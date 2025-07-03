export interface RaffleType {
  id: number;
  img: string;
  title: string;
  description: string;
  detail: string;
  fees: number;
  startDate: string;
  endDate: string;
  prize: string;
  type: "featured" | "standard" | "premium";
  entryFee: number;
}

  type TimeOption = { label: string; value: string };