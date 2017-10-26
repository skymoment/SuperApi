var express = require('express');
var router = express.Router();

router.get('/index', function(req, res, next) {
    var testJSON = {
        'code': 200,
        'message': 'You win',
        'data': {
            'list': [
                {
                  'name': '1111',
                  'age': 18,
                },
                {
                    'name': 'sd',
                    'age': 18,
                },
                {
                    'name': 'sd',
                    'age': 18,
                }
            ]
        }
    };
    res.json(testJSON);
});

module.exports = router;