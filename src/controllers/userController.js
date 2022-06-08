import { v4 as uuidv4 } from "uuid";

class UserController {
  index(req, res, next) {
    return res.json({
      name: "Erick Willian",
      id: uuidv4(),
      email: "willianerick17@gmail.com",
      password: "1234",
    });
  }
}

export default UserController;
