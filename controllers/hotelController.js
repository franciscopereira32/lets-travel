const Hotel = require('../models/hotel');

exports.homePage = (req, res) => {
    res.render('index', { title: 'Lets travel' });
}

exports.listAllHotels = async (req, res, next) => {
    try{
        const allHotels = await Hotel.find({ available: { $eq: true }});
        res.render('all_hotels', {title: 'All Hotels', allHotels});
        //res.json(allHotels)
    }catch(errors){
        next(next);
    }
}

exports.adminPage = (req, res) => {
    res.render('admin', {title: 'Admin' });
}

exports.createHotelGet = (req, res, next) => {
    res.render('add_hotel', {title: 'Add new hotel'});
}

exports.createHotelPost = async (req, res, next) => {
    //res.json(req.body);
    try{
        const hotel = new Hotel(req.body);
        await hotel.save();
        res.redirect(`/all/${hotel._id}`);
    }catch(error){
        next(error);
    }    
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