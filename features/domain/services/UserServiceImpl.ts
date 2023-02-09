import { UserService } from "./UserService";
import { GuestData } from "../dto/GuestData";
import { UserRepositoryImpl } from "@/features/data/UserRepositoryImpl";

export class UserServiceImpl implements UserService {
  userRepo = new UserRepositoryImpl();
  creatGuestData(guestData: GuestData): boolean {
    if (this.checkGuestData(guestData) != "") return false;
    else {
      console.log(guestData);
      guestData.uid = this.generateID();
      return this.userRepo.creatGuestData(guestData);
    }
  }

  checkEvent(eventNumber: number): string[] {
    switch (true) {
      case eventNumber === 1:
        return ["Lễ vu quy", "14:00 25/02/2023", "Nhà cô dâu"];
      case eventNumber === 2:
        return ["Bữa cơm thân mật", "14:00 25/02/2023", "Nhà cô dâu"];
      case eventNumber === 3:
        return ["Tiệc cưới", "17:30 25/02/2023", "Nhà hàng Long Vĩ"];
      case eventNumber === 4:
        return ["Lễ thành hôn", "15:00 25/02/2023", "Nhà chú rể"];
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
}
