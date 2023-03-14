let key = "148cb7d9f77dec3bb2830de0931264d6";

let container = document.getElementById("container");

async function cityName() {
  let city = document.getElementById("city").value;
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );
    let data = await res.json();
    console.log(data);

    appendData(data);
  } catch (err) {
    console.log(err);
  }
}

let map = document.getElementById("gmap_canvas");
function appendData(data) {
  container.innerHTML = null;
  let name = document.createElement("p");
  name.innerText = `Name - ${data.name}`;
  let temp = document.createElement("p");
  temp.innerText = `Temp - ${data.main.temp}`;
  let humidity = document.createElement("p");
  humidity.innerText = `Humidity - ${data.main.temp}`;
  let pressure = document.createElement("p");
  pressure.innerText = `Temp - ${data.main.pressure}`;

  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  container.append(name, temp, humidity, pressure);
}
