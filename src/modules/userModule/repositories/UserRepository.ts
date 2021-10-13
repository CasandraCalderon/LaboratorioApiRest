import { IUser } from "../model/UserModel";
import { BaseRepository } from "./base/baseRepository";

class UserRepository extends BaseRepository<IUser> {
  public login() {}
  public singOut() {}
}
export default UserRepository;