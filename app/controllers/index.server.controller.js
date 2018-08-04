exports.render = function(req, res) {
    res.render('index', {
        title: 'Home',
        user: req.user ? req.user.username : ''
    });
};
// function named render -> will be used to require
//this module and use its function
//once we created a controller we need an express routing

/* controller uses the model to retrieve the data portion and the view template to render the HTML output.*/ 