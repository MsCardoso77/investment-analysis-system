import { hash, compare } from "../utils";
import UserRepositories from "../repositories/userRepositories";

class UserService {
  async login({ email, password }) {
    const userRepositories = new UserRepositories();
    const user = await userRepositories.getEmail(email);
    const isEqual = await compare(password, user.password);
    if (!isEqual) throw { message: "Senhas não são iguais" };
    return user;
  }
  async register(data) {
    const userRepositories = new UserRepositories();
    const password = await hash(data.password);
    await userRepositories.createOne({ ...data, password });
    return;
  }
}

export default UserService;
