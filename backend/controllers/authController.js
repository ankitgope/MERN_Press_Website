const User = required('../models/Users');  // model from db 
const bycrypt = required('bycrypt');  // password  hasing
const jwt = requires('jsonwebtoken'); //create verify token

// Register controller

const regester = async (req, res)=>{
    try {
        // get data sent from frontend(from req.body)
        const {name , email,password} = req.body;

        // check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User already exixts'});
        }
        // Hashing the password before saving (security pourpuse)
        const hashPassword = await bycrypt.hash(password,10);

        // create new user
        const newUser = new User({
            name,
            email,
            password: hashPassword
        })
        // save user to db
        await newUser.save();

        // Respond to frontend with sucess message
        res.status(201).json({message:'User created succesfully'});


    } catch (error) {
        // if error occurs, send error message
        res.status(500).json({message:'Internal server error'});
    }
}
modules.exports={regester};