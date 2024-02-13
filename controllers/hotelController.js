exports.homePage = (req, res) => {
    res.render('index', { title: 'Lets travel' });
}

exports.listAllHotels = (req, res) => {
    res.render('all_hotels', {title: 'All Hotels'});
}

exports.adminPage = (req, res) => {
    res.render('admin', {title: 'Admin' });
}

exports.createHotelGet = (req, res) => {
    res.render('add_hotel', {title: 'Add new hotel'});
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