import UserService from "../services/userService";

class UserController {
  async store(req, res, next) {
    try {
      const userService = new UserService();
      const data = await userService.register(req.body);
      return res.status(201).json(data);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
  async login(req, res, next) {
    try {
      const userService = new UserService();
      const user = await userService.login(req.body);
      delete user.password;
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ err });
    }
  }
}

export default UserController;
