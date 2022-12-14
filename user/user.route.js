// express route
const express = require('express');
const router = express.Router();
// import user model
const User = require('./user.model');



router.post('/register', async (req, res) => { 
    // get user data from request body
    const {name, email, password} = req.body;
    // create new user
    if(name==null || name==undefined || name=='' || email==null || email==undefined || email=='' || password==null || password==undefined || password=='') {
        return res.status(404).json({
            message: 'User not found',
           
        });
    }

    const newUser = new User({
        name,
        email,
        password
    });
    // save user to database
    newUser.save()
        .then(user => { 
            res.json(user);
        })
        .catch(err => console.log(err));

   return  res.status(200).json({
        message: 'User registered successfully',
        profile: newUser
    });
});

router.post('/login', async (req, res) => {
    // get emial and password from request body
    const {email, password} = req.body;
    // find user by email
    const user = await User.findOne({email});
    // check if user exists
    if(!user || user == undefined || user == null || user == '' || email==null || email==undefined || email=='' || password==null || password==undefined || password=='') {
        
        return res.status(404).json({
            message: 'User not found',
        });
    }
    // check if password is correct
    if(user.password !== password) {
       return  res.status(401).json({
            message: 'Password is incorrect',
            // profile: user
        });
    }
    // login user
   return  res.status(200).json({
        message: 'User logged in successfully',
        profile: user,
        token: `${user._id}:${user.name}:${user.email}:${user.password}`
    });
});



router.post('/logout', (req, res) => {
    res.send('Logout route');
});

// export router
module.exports = router;
