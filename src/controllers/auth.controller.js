import User from "../models/User"
import jwt from "jsonwebtoken"
import config from "../config"

export const signUp = async (req, res) => {

    const {username, email, password, roles} = req.body

    //revisa los datos ingresados y encripta el password
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    //verifica si se recive un role y lo asigna caso contrario se le asigna el role user
    if (roles) {
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)  
    } else {
        const role = await Role.findOne({ name: "user"})
        newUser.roles = [role._id]
    }

    //guarda en la base de datos
    const savedUser = await newUser.save()

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.json({token})
}


export const signIn = async (req, res) => {
    res.json("signIn")
}
