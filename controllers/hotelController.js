exports.homePage = (req, res) => {
    res.render('index', { title: 'Lets travel' });
}

exports.listAllHotels = (req, res) => {
    res.render('all_hotels', {title: 'All Hotels'});
}

// exports.signUp = (req, res, next) => {
//     //validate userinfo
//     console.log('siggn up middleware')
//     next()
// }

// exports.logIn = (req, res) => {
//     //login
//     console.log('login middleware')
// }