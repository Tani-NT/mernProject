const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req,res)=>{
    try {
        res.status(200).send("home auth controller..");
    } catch (error) {
        console.log("error..");
    }
}

// Registration Logic
const register = async(req,res,next)=>{
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body;
    
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: "Email already Exists!!"});
        }

        const userCreated = await User.create({username, email, phone, password});

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound);

        res.status(201).json(
                {msg: "registrated successully!", 
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString()
                }
            );
    } catch (error) {
        console.log("error in registration",error);
        next(error);
    };
};

// Login Logic
const login = async function(req,res){
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({msg:"Invalid Credentials!"})
        }
        else{
            res.status(200).json({
                msg: "Login Successull!",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        }
    } catch (error) {
        console.log("error in login",error);
    }
}

module.exports = {home, register, login};