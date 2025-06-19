import { RaffleType } from "@/utils/types";

export type TimeOption = { label: string; value: string };

export class RaffleAppData {
  private raffles: RaffleType[];
  private static instance: RaffleAppData;

  public static getInstance(): RaffleAppData {
    if (!RaffleAppData.instance) {
      RaffleAppData.instance = new RaffleAppData();
    }
    return RaffleAppData.instance;
  }

  constructor() {
    this.raffles = [
      {
        id: 1,
        img: require("../assets/images/image.png"),
        title: "Win a Trip to Dubai",
        description: "Experience the ultimate luxury",
        detail:
          "Enjoy a 7-day stay at a 5-star hotel in Dubai, including round-trip flights, a guided tour of the Burj Khalifa, desert safari experience, and access to luxury shopping malls.",
        fees: 25,
        entryFee: 25,
        startDate: "2025-06-15",
        endDate: "2025-07-15",
        prize: "Dubai Luxury Vacation Package",
        type: "featured",
      },
      {
        id: 2,
        img: require("../assets/images/image.png"),
        title: "Latest iPhone 16 Pro",
        description: "Get the newest smartphone",
        detail:
          "Win an iPhone 16 Pro Max 256GB with AppleCare+ coverage for two years, a premium leather case, wireless charging pad, and a set of AirPods Pro included.",
        fees: 15,
        entryFee: 15,
        startDate: "2025-06-01",
        endDate: "2025-06-30",
        prize: "iPhone 16 Pro Max",
        type: "standard",
      },
      {
        id: 3,
        img: require("../assets/images/image.png"),
        title: "Tesla Model 3 Giveaway",
        description: "Drive the future",
        detail:
          "Receive a brand new Tesla Model 3 Standard Range with full self-driving capability, a home charging station, and a one-year premium connectivity subscription.",
        fees: 50,
        entryFee: 50,
        startDate: "2025-07-01",
        endDate: "2025-08-01",
        prize: "Tesla Model 3",
        type: "premium",
      },
      {
        id: 4,
        img: require("../assets/images/image.png"),
        title: "Caribbean Cruise Adventure",
        description: "Sail in style",
        detail:
          "Embark on a 7-night Caribbean cruise for two with all-inclusive dining, onboard entertainment, a private cabin, and stops at Jamaica, the Bahamas, and Grand Cayman.",
        fees: 30,
        entryFee: 30,
        startDate: "2025-08-01",
        endDate: "2025-09-10",
        prize: "Caribbean Cruise for Two",
        type: "featured",
      },
      {
        id: 5,
        img: require("../assets/images/image.png"),
        title: "MacBook Pro 14-inch",
        description: "Power up your productivity",
        detail:
          "Win the latest MacBook Pro with M2 chip, 512GB SSD, 16GB RAM, a sleek Space Gray finish, and a complimentary sleeve and wireless mouse.",
        fees: 20,
        entryFee: 20,
        startDate: "2025-06-01",
        endDate: "2025-06-25",
        prize: "MacBook Pro 14-inch",
        type: "standard",
      },
      {
        id: 6,
        img: require("../assets/images/image.png"),
        title: "VIP Concert Tickets",
        description: "Front-row experience",
        detail:
          "Secure VIP tickets for two to a concert of your choice, including backstage access, exclusive merchandise, and a meet-and-greet with the artist.",
        fees: 10,
        entryFee: 10,
        startDate: "2025-06-20",
        endDate: "2025-07-20",
        prize: "Concert VIP Package",
        type: "standard",
      },
      {
        id: 7,
        img: require("../assets/images/image.png"),
        title: "65-inch 4K OLED TV",
        description: "Cinematic home entertainment",
        detail:
          "Win a 65-inch 4K OLED Smart TV with Dolby Atmos surround sound, built-in streaming apps, a wall mount kit, and a 2-year extended warranty.",
        fees: 18,
        entryFee: 18,
        startDate: "2025-06-15",
        endDate: "2025-07-05",
        prize: "65-inch OLED TV",
        type: "standard",
      },
      {
        id: 8,
        img: require("../assets/images/image.png"),
        title: "Bali Resort Getaway",
        description: "Relax in paradise",
        detail:
          "Enjoy a 5-night stay at a luxury Bali resort with a spa package, daily breakfast, a private pool villa, and a cultural dance performance experience.",
        fees: 28,
        entryFee: 28,
        startDate: "2025-07-15",
        endDate: "2025-08-15",
        prize: "Bali Resort Package",
        type: "featured",
      },
      {
        id: 9,
        img: require("../assets/images/image.png"),
        title: "Luxury Rolex Watch",
        description: "Timeless elegance",
        detail:
          "Win a Rolex Datejust 41mm with a diamond bezel, stainless steel and gold finish, original box, and a 5-year international warranty.",
        fees: 40,
        entryFee: 40,
        startDate: "2025-07-01",
        endDate: "2025-07-30",
        prize: "Rolex Datejust",
        type: "premium",
      },
      {
        id: 10,
        img: require("../assets/images/image.png"),
        title: "Ultimate Gaming PC",
        description: "Game like a pro",
        detail:
          "Receive a high-end gaming PC with RTX 4090 GPU, 32GB RAM, 1TB SSD, RGB lighting, a gaming chair, and a one-year software subscription.",
        fees: 35,
        entryFee: 35,
        startDate: "2025-06-01",
        endDate: "2025-06-28",
        prize: "Gaming PC Setup",
        type: "premium",
      },
      {
        id: 11,
        img: require("../assets/images/image.png"),
        title: "Luxury Spa Weekend",
        description: "Pamper yourself",
        detail:
          "Enjoy a weekend spa retreat for two with full treatments including massages, facials, a sauna session, and a gourmet dinner experience.",
        fees: 22,
        entryFee: 22,
        startDate: "2025-06-20",
        endDate: "2025-07-10",
        prize: "Spa Weekend Package",
        type: "standard",
      },
      {
        id: 12,
        img: require("../assets/images/image.png"),
        title: "Cash Prize Jackpot",
        description: "Win big money",
        detail:
          "Claim a $10,000 cash prize to spend as you wish, with the option for direct bank transfer or a prepaid card for instant use.",
        fees: 12,
        entryFee: 12,
        startDate: "2025-06-01",
        endDate: "2025-06-20",
        prize: "$10,000 Cash",
        type: "featured",
      },
    ];
  }

  getFullTimeDifference(from: Date, to: Date = new Date()): TimeOption[] {
    let diffMs = Math.abs(to.getTime() - from.getTime());
    const secondsTotal = Math.floor(diffMs / 1000);
    const days = Math.floor(secondsTotal / (24 * 60 * 60));
    const hours = Math.floor((secondsTotal % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((secondsTotal % (60 * 60)) / 60);
    const seconds = secondsTotal % 60;

    const result: TimeOption[] = [];

    if (days > 0) {
      result.push({
        label: `${days} Day${days !== 1 ? "s" : ""}`,
        value: `${days}d`,
      });
    }
    if (hours > 0) {
      result.push({
        label: `${hours} Hour${hours !== 1 ? "s" : ""}`,
        value: `${hours}h`,
      });
    }
    if (minutes > 0) {
      result.push({
        label: `${minutes} Minute${minutes !== 1 ? "s" : ""}`,
        value: `${minutes}m`,
      });
    }
    if (seconds > 0 || result.length === 0) {
      result.push({
        label: `${seconds} Second${seconds !== 1 ? "s" : ""}`,
        value: `${seconds}s`,
      });
    }

    return result;
  }

  getAllRaffles(): RaffleType[] {
    return this.raffles;
  }

  getRaffleByIndex(index: number): RaffleType | null {
    return this.raffles[index] || null;
  }

  getRaffleById(id: number): RaffleType | null {
    return this.raffles.find((raffle) => raffle.id === id) || null;
  }

  getDaysLeft(endDate: string): number {
    const raffleDate = new Date(endDate);
    const currentDate = new Date();
    const diffTime = raffleDate.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }

  getTimeLeft(endDate: string): TimeOption[] {
    const raffleDate = new Date(endDate);
    return this.getFullTimeDifference(raffleDate);
  }

  getActiveRaffles(): RaffleType[] {
    return this.raffles.filter(
      (raffle) => this.getDaysLeft(raffle.endDate) > 0
    );
  }

  getRaffleCount(): number {
    return this.raffles.length;
  }

  getRafflesByPriceRange(minFee: number, maxFee: number): RaffleType[] {
    return this.raffles.filter(
      (raffle) => raffle.entryFee >= minFee && raffle.entryFee <= maxFee
    );
  }

  addRaffle(raffle: RaffleType): void {
    this.raffles.push(raffle);
  }

  removeRaffle(index: number): boolean {
    if (this.raffles[index]) {
      this.raffles.splice(index, 1);
      return true;
    }
    return false;
  }

  getRafflesSortedByDate(): RaffleType[] {
    return [...this.raffles].sort(
      (a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
    );
  }

  getRafflesByType(type: "featured" | "standard" | "premium"): RaffleType[] {
    return this.raffles.filter((raffle) => raffle.type === type);
  }

  getRaffleCountByType(type: "featured" | "standard" | "premium"): number {
    return this.raffles.filter((raffle) => raffle.type === type).length;
  }

  updateRaffleType(
    index: number,
    type: "featured" | "standard" | "premium"
  ): boolean {
    if (this.raffles[index]) {
      this.raffles[index].type = type;
      return true;
    }
    return false;
  }

  endingSoon(daysThreshold: number = 7): RaffleType[] {
    return this.raffles.filter((raffle) => {
      const daysLeft = this.getDaysLeft(raffle.endDate);
      return daysLeft > 0 && daysLeft <= daysThreshold;
    });
  }
}

export default RaffleAppData.getInstance();
