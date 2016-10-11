'use strict';

var IndexModel = require('../models/videos');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        
        
        res.render('videos', model);
        
        
    });

};