var express = require('express');

var awssql = express.Router();
var mysql = require('mysql');
var dbconfig = require('../db/config');

var connection = mysql.createConnection(dbconfig);

awssql.get('/' , (req , res) => {
    connection.query('select * from cyh_preinterview ' , (error , result) => {
        if(error) throw error;
        console.log('DB내용 :' ,result)
        res.send(result);
    })
})


module.exports = awssql;