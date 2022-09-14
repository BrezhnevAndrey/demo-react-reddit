export function timeAgoConvert(milisecands: number): string {
  const hours = Math.round(milisecands / 3600000);
  let variable = "ч.";
  if (hours < 24) {
    return `${hours} ${variable}`;
  } else {
    variable = "д.";
    return `${Math.round(hours / 24)} ${variable}`;
  }
}
