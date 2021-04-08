const router = require('express').Router();

router.post('/new', (req, res) => {
    res.json({
        ok: true,
        msg: 'Register'
    })
});

router.post('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'login'
    })
});

router.get('/renew', (req, res) => {
    res.json({
        ok: true,
        msg: 'Re new'
    })
});

module.exports  = router;