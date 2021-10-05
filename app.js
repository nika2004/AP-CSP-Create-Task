
const currentDate = new Date();
  let cDay = ("0" + currentDate.getDate()).slice(-2);
  let cMonth = currentDate.getMonth() + 1;
  let fMonth = ("0" + cMonth).slice(-2);
  console.log(cDay);
  console.log(cMonth);

const years = [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

const random = [Math.floor(Math.random() * years.length)];
console.log(random, years[[Math.floor(Math.random() * years.length)]]);

function getRandomDate () {
    async function fetchRandYear(){
      let data = await (await fetch(`https://api.nasa.gov/planetary/apod?api_key=MiTfqF5OLo0PFUhLNYhRcjOttrsiDd7yrGZcLB0B&date=${years[[Math.floor(Math.random() * years.length)]]}-${cMonth}-${cDay}`)).json();
      console.log(data);
      document.getElementById("today-is").innerHTML = `ON THIS DAY IN HISTORY <br id="break"> ${cMonth}/${cDay}/${years[[Math.floor(Math.random() * years.length)]]}`;
      document.getElementById("today-title").innerHTML = data.title;
      document.getElementById("today-image").innerHTML = `<img src="${data.hdurl}">`;
      document.getElementById("today-info").innerHTML = data.explanation;
      }
    fetchRandYear();
  }

document.getElementById("buttons-1").addEventListener("click", function() {getRandomDate() }); 





 