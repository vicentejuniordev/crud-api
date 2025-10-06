import update from "../../services/user/update-user.js";

const updateUser= async (req, res) =>{
    const id = req.query.id;
    const body = req.body;
    await update(id,body)
    console.log(id, body); 
    res.send('not implemented')
}

export default updateUser