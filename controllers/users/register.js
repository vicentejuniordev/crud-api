import register from "../../services/user/register-user.js";

const registerUser = async (req, res)=>{
    const user = req.body;
    console.log(req.body.name)
    const response = await register(user)
    res.send(response)
}

export default registerUser