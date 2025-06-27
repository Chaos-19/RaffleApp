import { useEffect, useState } from "react";

export type TimeOption = {
  label: string;
  value: "days" | "hours" | "minutes" | "seconds";
};

export function useCountdown(targetDate: Date): TimeOption[] {
  const getTimeOptions = (): TimeOption[] => {
    const now = new Date();
    const diffMs = Math.max(targetDate.getTime() - now.getTime(), 0);
    const totalSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return [
      { label: `${days} Day${days !== 1 ? "s" : ""}`, value: "days" },
      { label: `${hours} Hour${hours !== 1 ? "s" : ""}`, value: "hours" },
      { label: `${minutes} Minute${minutes !== 1 ? "s" : ""}`, value: "minutes" },
      { label: `${seconds} Second${seconds !== 1 ? "s" : ""}`, value: "seconds" },
    ];
  };

  const [timeOptions, setTimeOptions] = useState<TimeOption[]>(getTimeOptions());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOptions(getTimeOptions());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeOptions;
}
