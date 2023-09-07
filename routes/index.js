var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco Cat",
  });
});

router.post('/', function(req, res, next) {
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText),
  });
});

module.exports = router;

function checkPalindrome(phrase){
  let temp = phrase.trim();
  temp = temp.split();
  temp = temp.reverse();
  temp = temp.join("");
  if (phrase.toLowerCase().replace("", "") === temp.toLowerCase().replace("", "")) {
    return true
  }
  else {
    return false
  }
}

function getResultDescription (phrase) {
  if (checkPalindrome(phrase)) {
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}

function reversedphrase () {
  getResultDescription(phrase.reverse())
}