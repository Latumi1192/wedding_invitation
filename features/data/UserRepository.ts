import { GuestData } from "../domain/dto/GuestData";

export interface UserRepository {
  creatGuestData(guestData: GuestData): boolean;
}
