import { GuestData } from '../domain/dto/GuestData';

export interface UserRepository {
  creatGuestData(guestData: GuestData): Promise<boolean>;
  getGuests(): Promise<GuestData[]>;
}
