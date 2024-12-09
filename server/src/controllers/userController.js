const usersModel = require("../models/userModel");
const bcryptss = require('bcrypt');
var jwt = require('jsonwebtoken');


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


exports.Login = async (req, res) => {

    try {
        const { email, password, role } = req.body

        // input fields validation
        if (!email || !password || !role) {
            return res.send({ message: "All fields are required" })
        }

        let validUser = await usersModel.findOne({ email })


        if (!validUser) {
            return res.status(400).send({
                success: false,
                message: "Email is Not Resigtered",
            })
        }


        const isPasswordMatching = await bcryptss.compare(password, validUser.password) // validUser.password is comes from Database 

        if (!isPasswordMatching) {
            return res.status(400).send({
                success: false,
                message: "Wrong Credentials",
            })
        }

        // check role
        if (role !== validUser.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role.",
                success: false
            })
        }


        //Create Token
        // Create token using sign() method

        const createToken = jwt.sign(
            { individualUserTokenId: validUser._id },
            process.env.JWT_SECRET_KEY, { expiresIn: '1d' }
        )
        // ending of token creation part


        const { password: excludedPassword, ...otherDetails } = validUser.toObject();

        // otherDetails = {
        //     _id: validUser._id,
        //     fullName: validUser.fullName,
        //     email: validUser.email,
        //     phone: validUser.phone,
        //     role: validUser.role,
        //     profile: validUser.profile

        // }


        res.cookie(
            "access_token", // token name 
            createToken,
            {
                expires: new Date(Date.now() + 3600000), // 1hour
                // expires: new Date(Date.now() + 3 * 3600000), // 3 hours
                // expires: new Date(Date.now() + 24 * 3600000), // one day
                httpOnly: true,
                sameSite: 'strict'

            }
        ).status(200).send({
            success: true,
            message: "Login Successfully",
            output: otherDetails,
            token: createToken

        })


    }

    catch (error) {

        //console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
}


exports.LogOut = async (req, res) => {

    try {
        return res.status(200).cookie(
            "access_token",
            "",
            { maxAge: 0 }

        ).send({
            success: true,
            message: "Log Out Successfully "
        })

    }

    catch (error) {
        console.log(error)
    }

}


exports.UpdateProfile = async (req, res) => {
    //individualUserTokenId comes from Login part (create token part)
    if (req.userInformation.individualUserTokenId !== req.params.pid) {
        return res.status(401).send({ message: "You can update only your account" }) // middleware authentication
    }

    try {

        const { fullName, email, phone, bio, skills } = req.body

        // input fields validation
        // if (!fullName || !email || !phone || !bio || !skills) {
        //     return res.send({ message: "All fields are required" })
        // }


        // In model skill type is String. and its converted to array using split method
        let skillsArray = skills.split(",")


        const updateUser = await usersModel.findByIdAndUpdate(req.params.pid, {
            $set: {
                fullName: fullName,
                email: email,
                phone: phone,
                "profile.bio": bio, // Update nested bio
                "profile.skills": skillsArray, // Update nested skills

            }
        }, { new: true })

        const { password, ...rest } = updateUser.toObject();

        res.status(200).send({
            success: true,
            message: "user updated Successfully",
            output: rest
        })

    }

    catch (error) {

        res.status(500).send({
            success: false,
            message: "Error in Update user",
            error
        })

    }


}