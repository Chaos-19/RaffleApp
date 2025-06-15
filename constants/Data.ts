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
    this.raffles =[
      {
        "img": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=300&h=300",
        "title": "Win a Trip to Dubai",
        "description": "Experience the ultimate luxury",
        "detail": "Enjoy a 7-day stay at a 5-star hotel in Dubai, including round-trip flights, a guided tour of the Burj Khalifa, desert safari experience, and access to luxury shopping malls.",
        "fees": 25,
        "date": "2025-07-15",
        "prize": "Dubai Luxury Vacation Package",
        "type": "featured"
      },
      {
        "img": "https://images.unsplash.com/photo-1605280665926-72b053ae2c8e?auto=format&fit=crop&w=300&h=300",
        "title": "Latest iPhone 16 Pro",
        "description": "Get the newest smartphone",
        "detail": "Win an iPhone 16 Pro Max 256GB with AppleCare+ coverage for two years, a premium leather case, wireless charging pad, and a set of AirPods Pro included.",
        "fees": 15,
        "date": "2025-06-30",
        "prize": "iPhone 16 Pro Max",
        "type": "standard"
      },
      {
        "img": "https://images.unsplash.com/photo-1558346490-a72e53ae2d4e?auto=format&fit=crop&w=300&h=300",
        "title": "Tesla Model 3 Giveaway",
        "description": "Drive the future",
        "detail": "Receive a brand new Tesla Model 3 Standard Range with full self-driving capability, a home charging station, and a one-year premium connectivity subscription.",
        "fees": 50,
        "date": "2025-08-01",
        "prize": "Tesla Model 3",
        "type": "premium"
      },
      {
        "img": "https://images.unsplash.com/photo-1504280390367-361c6de9f231?auto=format&fit=crop&w=300&h=300",
        "title": "Caribbean Cruise Adventure",
        "description": "Sail in style",
        "detail": "Embark on a 7-night Caribbean cruise for two with all-inclusive dining, onboard entertainment, a private cabin, and stops at Jamaica, the Bahamas, and Grand Cayman.",
        "fees": 30,
        "date": "2025-09-10",
        "prize": "Caribbean Cruise for Two",
        "type": "featured"
      },
      {
        "img": "https://images.unsplash.com/photo-1600585156237-2b6c4c8a8b8e?auto=format&fit=crop&w=300&h=300",
        "title": "MacBook Pro 14-inch",
        "description": "Power up your productivity",
        "detail": "Win the latest MacBook Pro with M2 chip, 512GB SSD, 16GB RAM, a sleek Space Gray finish, and a complimentary sleeve and wireless mouse.",
        "fees": 20,
        "date": "2025-06-25",
        "prize": "MacBook Pro 14-inch",
        "type": "standard"
      },
      {
        "img": "https://images.unsplash.com/photo-1547891653-1c4f3e90e120?auto=format&fit=crop&w=300&h=300",
        "title": "VIP Concert Tickets",
        "description": "Front-row experience",
        "detail": "Secure VIP tickets for two to a concert of your choice, including backstage access, exclusive merchandise, and a meet-and-greet with the artist.",
        "fees": 10,
        "date": "2025-07-20",
        "prize": "Concert VIP Package",
        "type": "standard"
      },
      {
        "img": "https://images.unsplash.com/photo-1618416117511-2f15e1e8a9f0?auto=format&fit=crop&w=300&h=300",
        "title": "65-inch 4K OLED TV",
        "description": "Cinematic home entertainment",
        "detail": "Win a 65-inch 4K OLED Smart TV with Dolby Atmos surround sound, built-in streaming apps, a wall mount kit, and a 2-year extended warranty.",
        "fees": 18,
        "date": "2025-07-05",
        "prize": "65-inch OLED TV",
        "type": "standard"
      },
      {
        "img": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=300&h=300",
        "title": "Bali Resort Getaway",
        "description": "Relax in paradise",
        "detail": "Enjoy a 5-night stay at a luxury Bali resort with a spa package, daily breakfast, a private pool villa, and a cultural dance performance experience.",
        "fees": 28,
        "date": "2025-08-15",
        "prize": "Bali Resort Package",
        "type": "featured"
      },
      {
        "img": "https://images.unsplash.com/photo-1524592094714-3a1dd799fe6c?auto=format&fit=crop&w=300&h=300",
        "title": "Luxury Rolex Watch",
        "description": "Timeless elegance",
        "detail": "Win a Rolex Datejust 41mm with a diamond bezel, stainless steel and gold finish, original box, and a 5-year international warranty.",
        "fees": 40,
        "date": "2025-07-30",
        "prize": "Rolex Datejust",
        "type": "premium"
      },
      {
        "img": "https://images.unsplash.com/photo-1587590227317-5d5c9e838a7a?auto=format&fit=crop&w=300&h=300",
        "title": "Ultimate Gaming PC",
        "description": "Game like a pro",
        "detail": "Receive a high-end gaming PC with RTX 4090 GPU, 32GB RAM, 1TB SSD, RGB lighting, a gaming chair, and a one-year software subscription.",
        "fees": 35,
        "date": "2025-06-28",
        "prize": "Gaming PC Setup",
        "type": "premium"
      },
      {
        "img": "https://images.unsplash.com/photo-1600585154526-990d4372fce5?auto=format&fit=crop&w=300&h=300",
        "title": "Luxury Spa Weekend",
        "description": "Pamper yourself",
        "detail": "Enjoy a weekend spa retreat for two with full treatments including massages, facials, a sauna session, and a gourmet dinner experience.",
        "fees": 22,
        "date": "2025-07-10",
        "prize": "Spa Weekend Package",
        "type": "standard"
      },
      {
        "img": "https://images.unsplash.com/photo-1551431009-a8026f16a1db?auto=format&fit=crop&w=300&h=300",
        "title": "Cash Prize Jackpot",
        "description": "Win big money",
        "detail": "Claim a $10,000 cash prize to spend as you wish, with the option for direct bank transfer or a prepaid card for instant use.",
        "fees": 12,
        "date": "2025-06-20",
        "prize": "$10,000 Cash",
        "type": "featured"
      }
    ]
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

export default RaffleAppData.getInstance();