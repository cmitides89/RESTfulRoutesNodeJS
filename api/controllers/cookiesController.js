'use strict';

var mongoose = require('mongoose'),
    Cookie = mongoose.model('Cookies');

exports.list_all_cookies = function(req, res){
    Cookie.find({}, function(err, cookie){
        if(err)
            res.send(err);
        res.json(cookie);
    });
};

exports.create_a_cookie = function(req, res){
    var new_cookie = new Cookie(req.body);
    new_cookie.save(function(err, task){
        if(err)
            res.send(err);
        res.json(cookie);
    });
};

exports.read_a_cookie = function(req, res){
    Cookie.findById(req.params.cookieId, function(err, cookie){
        if(err)
            res.send(err);
        res.json(cookie);
    });
};

exports.update_a_cookie = function(req, res){
    Cookie.findOneAndUpdate({_id: req.params.cookieId}, req.body, {new: true}, function(err, cookie){
        if(err)
            res.send(err);
        res.json(cookie);
    });
};

exports.delete_a_cookie = function(req, res){
    Cookie.remove({
        _id: req.params.cookieId
    }, function(err, cookie){
        if(err)
            res.send(err);
        res.json({message: 'Deleted the cookie'});
    });
};