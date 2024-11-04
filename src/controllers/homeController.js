let getHomePage = (req, res) => {
    return res.render('homepages.ejs');
};
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}


// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage:getAboutPage,
};
