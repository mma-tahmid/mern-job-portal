const usersModel = require("../models/userModel");
const bcryptss = require('bcrypt');



exports.Registration = async (req, res) => {

    try {
        const { fullName, email, password, phone, role } = req.body;

        // input fields validation
        if (!fullName || !email || !password || !phone || !role) {
            return res.send({ message: "All fields are required" })
            //All fields are required. Please complete all input fields
        }


        // Check existing users
        const existingUser = await usersModel.findOne({ email })

        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "You are already registered. Please log in",
            })
        }


        // new user can Register now 
        // create Hash password
        const salt = bcryptss.genSaltSync(10);
        const hashed = bcryptss.hashSync(password, salt); // if use only hash (alternate of hashSync) then use await 

        const createNewUser = await new usersModel({
            fullName,
            email,
            password: hashed,
            phone,
            role
        }).save()


        res.status(200).send({
            success: true,
            message: "user Register Successfully",
            output: createNewUser
        })


    }

    catch (error) {
        console.log(error)

        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
}

