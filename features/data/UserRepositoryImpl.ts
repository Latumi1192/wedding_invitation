import { GuestData } from '../domain/dto/GuestData';
import { UserRepository } from './UserRepository';

export class UserRepositoryImpl implements UserRepository {
  async creatGuestData(guestData: GuestData): Promise<boolean> {
    // example with POST Request
    const responsePOST = await fetch('/api/createGuest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guestData),
    });

    console.log(
      'response of example of POST Request',
      await responsePOST.json()
    );
    return true;
  }

  async getGuests(): Promise<GuestData[]> {
    // example with GET Request
    const responseGET = await fetch('/api/getGuests', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return (await responseGET.json()).data;
  }
}
