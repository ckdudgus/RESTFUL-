var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../db/config');
var pool = mysql.createPool(dbconfig);

router.use(express.urlencoded({extended:true}))

router.get('/', (req, res, next) =>{
    var botable = req.query.botable;

    var crud = 'select';

    switch(botable){ // 스위치 방식
        case 'interviewlist' : req.body.crud = "select"; 
                     req.body.mapper_id = "interview";
                     break;
         case 'interviewwrite': req.body.crud = "insert"; 
                     req.body.mapper_id = "interviewwrite";
                     break;
         case 'interviewmodify': req.body.crud = "update"; 
                     req.body.mapper_id = "interviewModify";
                     break;
         // 면접제안 글보기 , 글쓰기
         case 'meetinglist': req.body.crud = "select"; 
                     req.body.mapper_id = "meetingArrange";
                     break;
         case 'meetingwrite': req.body.crud = "insert"; 
                     req.body.mapper_id = "meetingArrangeInsert";
                     break;              
         default      : req.body.crud = "delete"; 
                     req.body.mapper_id = "interviewDrop";
                     break; 
         // 포트폴리오
         case 'cyhportfolio' : req.body.crud = "select";
                     req.body.mapper_id = "portfolio"
                     break;
    }

    if(botable != 'none'){ 
        pool.getConnection(function(err, connection) {
            connection.query(
                'select * from cyh_preinterview.'+botable, 
                (error, result) => {
                    if(error) throw error;
                    res.send(result)
                })       
            connection.release(); 
        })
    }else{
        console.log('설정된 테이블이 아닙니다. DB를 확인해보세요')
    }
})

module.exports = router;