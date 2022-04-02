var express = require('express');
var router = express.Router();

router.get('/' , (req , res) => {
    res.send('라우팅 연결 완료')
});

module.exports = router;