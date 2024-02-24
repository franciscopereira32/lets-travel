const Hotel = require('../models/hotel');

// exports.homePage = (req, res) => {
//     res.render('index', { title: 'Lets travel' });
// }

exports.listAllHotels = async (req, res, next) => {
    try{
        const allHotels = await Hotel.find({ available: { $eq: true }});
        res.render('all_hotels', {title: 'All Hotels', allHotels});
        //res.json(allHotels)
    }catch(errors){
        next(next);
    }
}

exports.listAllCountries = async (req, res, next) => {
    try{
        const allCountries = await Hotel.distinct('country');
        res.render('all_countries', {title: 'Browse by country', allCountries});
    }catch(error) {
        next(error)
    }
}

exports.homePageFilters = async (req, res, next) => {
    try{
        const hotels = await Hotel.aggregate([
            { $match: { available: true } },
            { $match: { size: 9 } }
        ]);
        const countries = await Hotel.aggregate([
            { $group: { _id: '$country' } },
            { $sample: { size: 9 } }
        ]);
        res.render('index', { countries, hotels });
        //res.json(countries)
    }catch(error){
        next(error)
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

exports.editRemoveGet = (req, res) => {
    res.render('edit_remove', { title: 'Search for hotel to edit or remove'});
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