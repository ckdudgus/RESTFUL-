var express = require('express');
var router = express.Router();

router.use(express.urlencoded({extended:true}))

router.post('/', (req, res, next) =>{
    var type = req.query.type;
    req.body.mapper = "IntroduceSql"

    if( type ){  
        switch(type){
           // 사전인터뷰 글보기 , 글쓰기 , 글수정
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
            router.use('/', awssql )
            next('route')
     }
    else{ 
        console.log('설정된 테이블이 아니거나 오류가 발생했습니다. DB를 확인해보세요')
    };
});

module.exports = router;