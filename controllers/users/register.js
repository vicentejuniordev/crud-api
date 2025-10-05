import register from "../../services/user/register-user.js";

const registerUser = async (req, res)=>{
    const user = req.body;
    await register(user)
    res.send('test')
}

export default registerUser