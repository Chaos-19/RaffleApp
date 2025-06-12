export class RaffleAppDataT {
  private raffles: {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
  }[];

  // Singleton instance
  private static instance: RaffleAppDataT;

  public static getInstance(): RaffleAppDataT {
    if (!RaffleAppDataT.instance) {
      RaffleAppDataT.instance = new RaffleAppDataT();
    }
    return RaffleAppDataT.instance;
  }

  private constructor() {
    this.raffles = [
      {
        img: require("../assets/images/image.png"),
        title: "Win a Trip to Dubai",
        description: "Experience the ultimate luxury",
        detail:
          "5-star hotel stay for 7 days, including flights and Burj Khalifa tour",
        fees: 25,
        date: "2025-07-15",
        prize: "Dubai Luxury Vacation Package",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Latest iPhone 16 Pro",
        description: "Get the newest smartphone",
        detail: "Win an iPhone 16 Pro Max 256GB with AppleCare+",
        fees: 15,
        date: "2025-06-30",
        prize: "iPhone 16 Pro Max",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Tesla Model 3 Giveaway",
        description: "Drive the future",
        detail: "Brand new Tesla Model 3 Standard Range",
        fees: 50,
        date: "2025-08-01",
        prize: "Tesla Model 3",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Caribbean Cruise Adventure",
        description: "Sail in style",
        detail: "7-night Caribbean cruise for two with all-inclusive dining",
        fees: 30,
        date: "2025-09-10",
        prize: "Caribbean Cruise for Two",
      },
      {
        img: require("../assets/images/image.png"),
        title: "MacBook Pro 14-inch",
        description: "Power up your productivity",
        detail: "Latest MacBook Pro with M2 chip and 512GB storage",
        fees: 20,
        date: "2025-06-25",
        prize: "MacBook Pro 14-inch",
      },
      {
        img: require("../assets/images/image.png"),
        title: "VIP Concert Tickets",
        description: "Front-row experience",
        detail: "VIP tickets for two to a concert of your choice",
        fees: 10,
        date: "2025-07-20",
        prize: "Concert VIP Package",
      },
      {
        img: require("../assets/images/image.png"),
        title: "65-inch 4K OLED TV",
        description: "Cinematic home entertainment",
        detail: "Latest 65-inch OLED Smart TV with surround sound",
        fees: 18,
        date: "2025-07-05",
        prize: "65-inch OLED TV",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Bali Resort Getaway",
        description: "Relax in paradise",
        detail: "5-night stay at a luxury Bali resort with spa package",
        fees: 28,
        date: "2025-08-15",
        prize: "Bali Resort Package",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Luxury Rolex Watch",
        description: "Timeless elegance",
        detail: "Win a Rolex Datejust 41mm with diamond bezel",
        fees: 40,
        date: "2025-07-30",
        prize: "Rolex Datejust",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Ultimate Gaming PC",
        description: "Game like a pro",
        detail: "High-end gaming PC with RTX 4090 and 32GB RAM",
        fees: 35,
        date: "2025-06-28",
        prize: "Gaming PC Setup",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Luxury Spa Weekend",
        description: "Pamper yourself",
        detail: "Weekend spa retreat for two with full treatments",
        fees: 22,
        date: "2025-07-10",
        prize: "Spa Weekend Package",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Cash Prize Jackpot",
        description: "Win big money",
        detail: "$10,000 cash prize to spend as you wish",
        fees: 12,
        date: "2025-06-20",
        prize: "$10,000 Cash",
      },
    ];
  }

  // Get all raffles
  getAllRaffles(): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
  }[] {
    return this.raffles;
  }

  // Get raffle by index
  getRaffleByIndex(index: number): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
  } | null {
    return this.raffles[index] || null;
  }

  // Calculate days left until raffle ends
  getDaysLeft(date: string): number {
    const raffleDate = new Date(date);
    const currentDate = new Date();
    const diffTime = raffleDate.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }

  // Get active raffles (not expired)
  getActiveRaffles(): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
  }[] {
    return this.raffles.filter((raffle) => this.getDaysLeft(raffle.date) > 0);
  }

  // Get total number of raffles
  getRaffleCount(): number {
    return this.raffles.length;
  }

  // Get raffles by price range
  getRafflesByPriceRange(
    minFee: number,
    maxFee: number
  ): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
  }[] {
    return this.raffles.filter(
      (raffle) => raffle.fees >= minFee && raffle.fees <= maxFee
    );
  }

  // Add new raffle
  addRaffle(raffle: {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
  }): void {
    this.raffles.push(raffle);
  }

  // Remove raffle by index
  removeRaffle(index: number): boolean {
    if (this.raffles[index]) {
      this.raffles.splice(index, 1);
      return true;
    }
    return false;
  }

  // Get raffles sorted by date
  getRafflesSortedByDate(): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
  }[] {
    return [...this.raffles].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
}

export class RaffleAppData {
  private raffles: {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
    type: "featured" | "standard" | "premium";
  }[];

  // Singleton instance
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
        img: require("../assets/images/image.png"),
        title: "Win a Trip to Dubai",
        description: "Experience the ultimate luxury",
        detail:
          "5-star hotel stay for 7 days, including flights and Burj Khalifa tour",
        fees: 25,
        date: "2025-07-15",
        prize: "Dubai Luxury Vacation Package",
        type: "featured",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Latest iPhone 16 Pro",
        description: "Get the newest smartphone",
        detail: "Win an iPhone 16 Pro Max 256GB with AppleCare+",
        fees: 15,
        date: "2025-06-30",
        prize: "iPhone 16 Pro Max",
        type: "standard",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Tesla Model 3 Giveaway",
        description: "Drive the future",
        detail: "Brand new Tesla Model 3 Standard Range",
        fees: 50,
        date: "2025-08-01",
        prize: "Tesla Model 3",
        type: "premium",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Caribbean Cruise Adventure",
        description: "Sail in style",
        detail: "7-night Caribbean cruise for two with all-inclusive dining",
        fees: 30,
        date: "2025-09-10",
        prize: "Caribbean Cruise for Two",
        type: "featured",
      },
      {
        img: require("../assets/images/image.png"),
        title: "MacBook Pro 14-inch",
        description: "Power up your productivity",
        detail: "Latest MacBook Pro with M2 chip and 512GB storage",
        fees: 20,
        date: "2025-06-25",
        prize: "MacBook Pro 14-inch",
        type: "standard",
      },
      {
        img: require("../assets/images/image.png"),
        title: "VIP Concert Tickets",
        description: "Front-row experience",
        detail: "VIP tickets for two to a concert of your choice",
        fees: 10,
        date: "2025-07-20",
        prize: "Concert VIP Package",
        type: "standard",
      },
      {
        img: require("../assets/images/image.png"),
        title: "65-inch 4K OLED TV",
        description: "Cinematic home entertainment",
        detail: "Latest 65-inch OLED Smart TV with surround sound",
        fees: 18,
        date: "2025-07-05",
        prize: "65-inch OLED TV",
        type: "standard",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Bali Resort Getaway",
        description: "Relax in paradise",
        detail: "5-night stay at a luxury Bali resort with spa package",
        fees: 28,
        date: "2025-08-15",
        prize: "Bali Resort Package",
        type: "featured",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Luxury Rolex Watch",
        description: "Timeless elegance",
        detail: "Win a Rolex Datejust 41mm with diamond bezel",
        fees: 40,
        date: "2025-07-30",
        prize: "Rolex Datejust",
        type: "premium",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Ultimate Gaming PC",
        description: "Game like a pro",
        detail: "High-end gaming PC with RTX 4090 and 32GB RAM",
        fees: 35,
        date: "2025-06-28",
        prize: "Gaming PC Setup",
        type: "premium",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Luxury Spa Weekend",
        description: "Pamper yourself",
        detail: "Weekend spa retreat for two with full treatments",
        fees: 22,
        date: "2025-07-10",
        prize: "Spa Weekend Package",
        type: "standard",
      },
      {
        img: require("../assets/images/image.png"),
        title: "Cash Prize Jackpot",
        description: "Win big money",
        detail: "$10,000 cash prize to spend as you wish",
        fees: 12,
        date: "2025-06-20",
        prize: "$10,000 Cash",
        type: "featured",
      },
    ];
  }

  // Get all raffles
  getAllRaffles(): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
    type: "featured" | "standard" | "premium";
  }[] {
    return this.raffles;
  }

  // Get raffle by index
  getRaffleByIndex(
    index: number
  ): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
    type: "featured" | "standard" | "premium";
  } | null {
    return this.raffles[index] || null;
  }

  // Calculate days left until raffle ends
  getDaysLeft(date: string): number {
    const raffleDate = new Date(date);
    const currentDate = new Date();
    const diffTime = raffleDate.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }

  // Get active raffles (not expired)
  getActiveRaffles(): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
    type: "featured" | "standard" | "premium";
  }[] {
    return this.raffles.filter((raffle) => this.getDaysLeft(raffle.date) > 0);
  }

  // Get total number of raffles
  getRaffleCount(): number {
    return this.raffles.length;
  }

  // Get raffles by price range
  getRafflesByPriceRange(
    minFee: number,
    maxFee: number
  ): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
    type: "featured" | "standard" | "premium";
  }[] {
    return this.raffles.filter(
      (raffle) => raffle.fees >= minFee && raffle.fees <= maxFee
    );
  }

  // Add new raffle
  addRaffle(raffle: {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
    type: "featured" | "standard" | "premium";
  }): void {
    this.raffles.push(raffle);
  }

  // Remove raffle by index
  removeRaffle(index: number): boolean {
    if (this.raffles[index]) {
      this.raffles.splice(index, 1);
      return true;
    }
    return false;
  }

  // Get raffles sorted by date
  getRafflesSortedByDate(): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
    type: "featured" | "standard" | "premium";
  }[] {
    return [...this.raffles].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  // Get raffles by type
  getRafflesByType(
    type: "featured" | "standard" | "premium"
  ): {
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
    type: "featured" | "standard" | "premium";
  }[] {
    return this.raffles.filter((raffle) => raffle.type === type);
  }

  // Get count of raffles by type
  getRaffleCountByType(type: "featured" | "standard" | "premium"): number {
    return this.raffles.filter((raffle) => raffle.type === type).length;
  }

  // Update raffle type by index
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
}
