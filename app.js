async function fetchAsync(){
  let data = await (await fetch("https://api.nasa.gov/planetary/apod?api_key=MiTfqF5OLo0PFUhLNYhRcjOttrsiDd7yrGZcLB0B&date=2004-03-05")).json();
  console.log(data);
}
 fetchAsync();

  const currentDate = new Date();
  let cDay = currentDate.getDate()
  let cMonth = currentDate.getMonth() + 1
  let cYear = currentDate.getFullYear()
  console.log(cDay);
  console.log(cMonth);
  console.log(cYear);
  console.log(`Today is ${cMonth}/${cDay}/${cYear}`);
  document.getElementById("todayis").innerHTML = `Today is ${cMonth}/${cDay}/${cYear}`;

  