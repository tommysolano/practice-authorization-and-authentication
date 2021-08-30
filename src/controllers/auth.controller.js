import User from "../models/User"

export const signUp = async (req, res) => {

    const {username, email, password, roles} = req.body

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    const savedUser = await newUser.save()

    res.json("signUp")
}


export const signIn = async (req, res) => {
    res.json("signIn")
}
