import { GuestData } from '../dto/GuestData';

export interface UserService {
  creatGuestData(guestData: GuestData): Promise<boolean>;
  getGuests(): Promise<GuestData[]>;
}
