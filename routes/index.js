import { Router } from "express";
import registerUser from "../controllers/users/register.js";


const routes = Router();
routes.get('/', (req,res)=>{
    res.send("hello world")
})
routes.post('/user/register', registerUser);

export default routes;