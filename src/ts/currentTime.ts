export const currentTime = (timeZone: string) => {
  const date = new Date(new Date().toLocaleString("en-US", { timeZone }));
  let hour = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hour < 12 ? "am" : "pm";

  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
  }

  return `${hour}:${minutes} ${period}`;
};
