const User = require('../models/User');
const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken');
const SECRET = '123XYZ';

exports.registerUser = async (req,res) => {
    if(req.body.employeeEmail && req.body.employeeAddress && req.body.employeePassword){
        try {
            var user = new User({
                employeeEmail: req.body.employeeEmail,
                employeeAddresss: req.body.employeeAddress,
                employeePassword: await bcrypt.hash(req.body.employeePassword, salt),
            });
            await user.save();
            res.send({type:'sucess', msg:'Account Created Successfully'});
        } catch(err) {
            console.log(err);
            res.send({type: 'error', msg: ' Failed to create a user'});
        }
    } else {
        res.send({type:'error' , msg:'Data Field Empty!'});
    }
};

exports.login = async (req,res) => {
    if (req.body.employeeEmail && req.body.employeePassword){
        try {
            const user = await User.findOne({employeeEmail: req.body.employeeEmail});
            if (user.employeeEmail) {
                var match = await bcrypt.compare(req.body.employeePassword, user.employeePassword);
                if (match) {
                    // delete user._doc.employeePassword;
                    // delete user._v.employeeEmail;
                    const token = jwt.sign(
                        {
                            employeeEmail:user.employeeEmail,
                            employeeAddress: user.employeeAddress,
                        },
                        SECRET,
                        {expiresin: '24H'}
                    );
                    console.log('Token: ------------->', token);
                    res.cookie('token',token,{maxAge:900000, httpsOnly: true, sameSite:"lax"});
                    res.send(user);
                }
            } else {
                res.send({type:'error',msg :'Wrong Email!'});
            }
        } catch (err) {
            console.log(err);
            res.send({type:'error',msg:'Failed to login!'});
        }
    } else {
        res.send({type:'error',msg:'Data field empty!'});
    }
};

exports.authorizeToken= (req, res, next) => {
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, SECRET, (err, decoded) => {
            if (!err) {
                req.user = decoded;
                next();
            } else {
                res.cookie('token', '');
                console.log(err)
                res.status(401).send({msg: 'ACCESS DENIED!'});
            }
        });
    } else {
        res.cookie('token', '');
        console.log(err)
        res.status(401).send({msg: 'ACCESS DENIED!'});
    }
};

// exports.getUser = (res,req) => [
    
// ]

exports.logout = (req,res) => {
    res.cookie('token', ' ')
    res.send({msg: 'Logged Out!'});
};