const express = require("express");
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "tweetr",
        "msg": "first tweet",
        "username": "coder"
    }];
    res.end(JSON.stringify(str));
})

router.post('/addTweet', (req, res) => {
    res.end('NA');
})

module.exports = router;