document.getElementById("search-submit").addEventListener("click", function () {
    const input = document.getElementById("userInput").value;
    console.log(input);
    const userDate = input;
    async function fetchAsync(){
      let data = await (await fetch(`https://api.nasa.gov/planetary/apod?api_key=MiTfqF5OLo0PFUhLNYhRcjOttrsiDd7yrGZcLB0B&date=${userDate}`)).json();
      console.log(data);
      document.getElementById("date-title").innerHTML = data.title;
      document.getElementById("date-image").innerHTML = `<img src="${data.hdurl}">`;
      document.getElementById("date-info").innerHTML = data.explanation;
      }
    fetchAsync()
  });