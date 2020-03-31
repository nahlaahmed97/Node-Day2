const express = require('express')
const userModel= require('../models/users')
const router = express.Router();

router.get('/',(req,res)=>{
    userModel.find({},(err,users)=>{
        if (err) return res.send(err);
        res.json(users)
    })
  
})
// list by one user 
router.get('/:id',(req,res)=>
{
    userModel.findById(req.params.id, (err, user) => {
        if (err) return res.send(err);
        res.json(user);
    });
});

router.post('/',(req,res)=>{
    const { body : {firstName,lastName,email,password,posts} } = req
    const user = new userModel({
        firstName,
        lastName,
        email,
        password,
        posts,


    })
    user.save((err, user) => {
        if (err) return res.send(err);
        res.json(user);
    })
})

router.patch('/:id' , (req,res)=>{
    userModel.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) return res.send(err);
        res.json(user);
    });
});


router.delete("/:id", function(req, res) {
    userModel.findByIdAndDelete(req.params.id, req.body, (err, user) => {
        if (err) return res.send(err);
        res.json(user);
    });
});
module.exports = router;
