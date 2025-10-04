import { Router } from "express";
import registerUser from "../controllers/users/register";

const routes = Router();

routes.post('user/register', registerUser);

export default routes;