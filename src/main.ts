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
  document.getElementById("time-feed")!.innerHTML = `<div class="pb-10">
    <div class="flex space-x-2 justify-center border-1 py-2">
    <p>Start date: ${startDate}</p>
    <p>End date: ${endDate}</p>
    <p>Total nights: ${daysDifference}</p>
    </div>
    <div class="flex justify-center"><p>Total nights: ${daysDifference}</p></div>
    </div>`;
});

document.getElementById("dateForm")?.addEventListener("submit", getTimes);

function getTimes() {
  let timesData = "";
  times.forEach(function (time) {
    timesData += `<div class="pb-10">
    <div class="flex space-x-2 justify-center border-1 py-2">
    </div>
    <div class="flex justify-center"><p>Total nights: 0</p></div>
    </div>`;
  });
  return timesData;
}

function render() {
  document.getElementById("time-feed").innerHTML = getTimes();
}
