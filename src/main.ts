import times from "./data";

console.log(times);
function daysBetweenDates(date1: string, date2: string): number {
  const startDate = new Date(date1);
  const endDate = new Date(date2);
  // Calculate the difference in milliseconds
  const differenceInTime = endDate.getTime() - startDate.getTime();
  console.log(differenceInTime);
  // Convert milliseconds to days
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  console.log(differenceInDays);
  return Math.abs(Math.round(differenceInDays)); // Return absolute value of days
  console.log(differenceInDays);
}

document.getElementById("dateForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("click");
  const startDate = (
    document.getElementById("start-date-el") as HTMLInputElement
  ).value;
  const endDate = (document.getElementById("end-date-el") as HTMLInputElement)
    .value;

  const daysDifference = daysBetweenDates(endDate, startDate);
  document.getElementById("total-el")!.innerText = `Total: ${daysDifference}`;
});
