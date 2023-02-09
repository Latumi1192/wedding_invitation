import { GuestData } from '@/features/domain/dto/GuestData';
import { UserServiceImpl } from '@/features/domain/services/UserServiceImpl';
import React, { useEffect, useState } from 'react';

const MyGuestsPage = () => {
  const userServ = new UserServiceImpl();
  const [guests, setGuests] = useState<GuestData[]>([]);

  useEffect(() => {
    fetchGuests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchGuests = async () => {
    const guests = await userServ.getGuests();
    console.log(guests);
    setGuests(guests);
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      {guests.map((guest) => (
        <div key={guest.uid}>
          <p>Tên: {guest.name}</p>
          <p>Khach cua: {guest.guestOf}</p>
          <p>Den du: {guest.event}</p>
          <p>Bao nhieu nguoi thêm: {guest.addedGuest}</p>
          <p>Thông tin thêm: {guest.notice}</p>
          -------
        </div>
      ))}
    </div>
  );
};

export default MyGuestsPage;
