let container = document.getElementById("container");
let data;
let key = "148cb7d9f77dec3bb2830de0931264d6";
async function getData() {
  let city = document.querySelector("#city").value;
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );
    data = await res.json();
    console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}

function appendData(data) {
  container.innerHTML = null;
  //   let date = document.createElement("p");
  //   date.innerText = `Name - ${data.dt}`;
  let date = `${data.dt}`;
  var theDate = new Date(date * 1000);
  dateString = theDate.toGMTString();
  //   alert(dateString);
  //   console.log(date);
  container.append(theDate);
}
