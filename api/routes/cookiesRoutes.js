'use strict';
module.exports = function(app){
    var cookieList = require('../controllers/cookiesController');

    app.route('/cookies')
        .get(cookieList.list_all_cookies)
        .post(cookieList.create_a_cookie);
    
    app.route('/cookies/:cookieId')
        .get(cookieList.read_a_cookie)
        .put(cookieList.update_a_cookie)
        .delete(cookieList.delete_a_cookie);
};