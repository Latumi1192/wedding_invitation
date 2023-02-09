import { GuestData } from "../dto/GuestData";

export interface UserService {
  creatGuestData(guestData: GuestData): boolean;
}
