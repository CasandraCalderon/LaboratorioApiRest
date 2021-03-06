import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { createModel, IUser, User } from "../model/UserModel";
import UserRepository from "../repositories/UserRepository";
class UseController {
  private userRepository: UserRepository;
  constructor(mongoose: Mongoose) {
    this.userRepository = new UserRepository(createModel(mongoose));
  }
  public async create(request: Request, response: Response) {
    let { name, email, password } = request.body;
    //Cifrar el password
    const result = await this.userRepository.create({ name, email, password });
    response.status(201).json({ serverResponse: result });
  }
  public async get(request: Request, response: Response) {
    const result = await this.userRepository.find({});
    response.status(201).json({ serverResponse: result });
  }
  public async update(request: Request, response: Response) {
      //NUEVO
      const result = await this.userRepository.update();
      response.status(201).json({ serverResponse: result });
  }
  public async delete(request: Request, response: Response) {
      //NUEVO
      const result = await this.userRepository.delete();
      response.status(201).json({ serverResponse: result });
  }
  public login(request: Request, response: Response) {}
  public singOut(request: Request, response: Response) {}
}
export default UseController;
