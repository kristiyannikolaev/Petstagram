const router = require('express').Router();

const userManager = require('../managers/userManager');
const { TOKEN_KEY } = require('../utils/util');
const { getErrorMessage }  = require('../utils/errorHelpers');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await userManager.login(username, password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        res.render('users/login', {error: getErrorMessage(error), username});
    }
    
});

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPass } = req.body;

    try{
        const token = await userManager.register(username, email, password, repeatPass);

        res.cookie('token', token);
        res.redirect('/');
    }catch(err){
        res.render('users/register', {error: getErrorMessage(err), username, email});
    }

});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(TOKEN_KEY);

    res.redirect('/');
});

module.exports = router;