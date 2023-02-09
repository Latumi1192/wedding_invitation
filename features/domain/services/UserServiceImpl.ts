import { UserService } from "./UserService";
import { GuestData } from "../dto/GuestData";
import { UserRepositoryImpl } from "@/features/data/UserRepositoryImpl";

export class UserServiceImpl implements UserService {
  userRepo = new UserRepositoryImpl();
  async creatGuestData(guestData: GuestData): Promise<boolean> {
    if (this.checkGuestData(guestData) != "") return false;
    else {
      // console.log(guestData);
      guestData.uid = this.generateID();
      return this.userRepo.creatGuestData(guestData);
    }
  }

  checkEvent(eventNumber: number): string[] {
    switch (true) {
      case eventNumber === 1:
        return ["Lễ vu quy", "14:00, ngày 25/02/2023", "Nhà cô dâu"];
      case eventNumber === 2:
        return ["Bữa cơm thân mật", "14:00, ngày 25/02/2023", "Nhà cô dâu"];
      case eventNumber === 3:
        return ["Tiệc cưới", "17:30, ngày 25/02/2023", "Nhà hàng Long Vĩ"];
      case eventNumber === 4:
        return ["Lễ thành hôn", "15:00, ngày 25/02/2023", "Nhà chú rể"];
      default:
        return [""];
    }
  }

  checkGuestData(guestData: GuestData): string {
    switch (true) {
      case guestData.name === "":
        return "Hãy điền tên của bạn";
      case guestData.guestOf === "Khách của":
        return "Bạn là khách của ai?";
      case guestData.event === 0:
        return "Bạn sẽ tham gia với chúng tôi lúc nào?";
      default:
        return "";
    }
  }

  generateID(): number {
    return Math.floor(Math.random() * 1000000);
  }

  getGuests(): Promise<GuestData[]> {
    return this.userRepo.getGuests();
  }

  generateMessageConfirm(eventNumber: number): string {
    const events = this.checkEvent(eventNumber);
    return (
      "Bạn sẽ đến tham gia " +
      events[0] +
      " của chúng tôi, lúc " +
      events[1] +
      ", tại " +
      events[2]
    );
  }

  generateMessageDeny(): string {
    return "Rất tiếc vì bạn không thể tham gia với chúng tôi";
  }
}
