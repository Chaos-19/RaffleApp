export function formatTransactionPrice(price:number){
    return price < 0? `-$${Math.abs(price)}`:`+$${Math.abs(price)}`
}

type TimeOption = { label: string; value: string };

function getFullTimeDifference(from: Date, to: Date = new Date()): TimeOption[] {
  let diffMs = Math.abs(to.getTime() - from.getTime());

  const secondsTotal = Math.floor(diffMs / 1000);

  const days = Math.floor(secondsTotal / (24 * 60 * 60));
  const hours = Math.floor((secondsTotal % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((secondsTotal % (60 * 60)) / 60);
  const seconds = secondsTotal % 60;

  const result: TimeOption[] = [];

  if (days > 0) {
    result.push({ label: `${days} Day${days !== 1 ? "s" : ""}`, value: `${days}d` });
  }
  if (hours > 0) {
    result.push({ label: `${hours} Hour${hours !== 1 ? "s" : ""}`, value: `${hours}h` });
  }
  if (minutes > 0) {
    result.push({ label: `${minutes} Minute${minutes !== 1 ? "s" : ""}`, value: `${minutes}m` });
  }
  if (seconds > 0 || result.length === 0) {
    result.push({ label: `${seconds} Second${seconds !== 1 ? "s" : ""}`, value: `${seconds}s` });
  }

  return result;
}
