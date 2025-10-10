import update from "../../services/user/update-user.js";

const updateUser= async (req, res) =>{
    const id = req.query.id;
    const body = req.body;
    const response = await update(id,body);
    res.send(response);
}

export default updateUser