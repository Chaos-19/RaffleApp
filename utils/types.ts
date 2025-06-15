export interface RaffleType{
    img: string;
    title: string;
    description: string;
    detail: string;
    fees: number;
    date: string;
    prize: string;
    type: "featured" | "standard" | "premium";
  }