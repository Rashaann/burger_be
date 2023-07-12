var express = require('express');
const Burger = require('../models/burgers');
var router = express.Router();

/* GET list of burgers */
router.get('/all', (req, res) => {
    Burger.find().then(data => {
        res.json({result: true, list: data});
    })
});





router.post('/addBurger', (req, res) => {
    const today = new Date();
    Burger.find().then(burgers => {
        //console.log(burgers);
        if(!burgers.includes(e => e.id === req.body.id)){
            const newBurger = new Burger({
                id: req.body.id,
                name: req.body.name,
                ingredients: req.body.ingredients,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
                stripeId: req.body.stripe_id,
                availability: req.body.availability,
                date: today,
            });

            newBurger.save().then(movie => {
                res.json({added: true, data: movie});
            })
        }
    })
});


module.exports = router;
