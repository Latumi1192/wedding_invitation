import { GuestData } from "../domain/dto/GuestData";
import { UserRepository } from "./UserRepository";

export class UserRepositoryImpl implements UserRepository {
  creatGuestData(guestData: GuestData): boolean {
    return true;
  }
}
