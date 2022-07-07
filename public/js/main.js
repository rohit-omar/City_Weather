const date = document.getElementById("date");
const weaCond = document.getElementById("weaCond");
const getcurrentDay = () => {
  const weekDay = new Array();
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";
  let currentTime = new Date();
  let day1 = weekDay[currentTime.getDay()];
  return day1;
};
const getCurrentTime = () => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var currenntDate = new Date();
  var month = months[currenntDate.getMonth()];
  var year = currenntDate.getFullYear();
  var day = currenntDate.getDate();
  var hours = currenntDate.getHours();
  var mins = currenntDate.getMinutes();
  let period = "AM";
  if (hours > 11) {
    period = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  return `${month} ${day} | ${hours}:${mins} ${period}`;
};
date.innerHTML = getcurrentDay() + " | " + getCurrentTime();

const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const min_max = document.getElementById("min_max");

// fetch(
//   "api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=3eec179df04c11b6358d776c3424590d"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//  const handleGetJson=(event)=>{
//   event.preventDefault();
//     console.log("inside handleGetJson");
//     fetch("api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=1696013f675a64e25813e5f1df081b37", {
//         headers : { 
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//          }
  
//       })
//       .then((response) => {return response.json()})
//       .then((messages) => {console.log(messages);});
//   }

//   submitBtn.addEventListener('click',handleGetJson);

const getInfo =async (event) => {
  event.preventDefault();
  let cityNameValue = cityName.value;
  if(cityNameValue===""){
    city_name.innerText="Please write the city name before you search"
  }
  else{
    try{
      let url = `api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&units=metric&appid=3eec179df04c11b6358d776c3424590d`;
      // fetch(url).then(response => response.json).then(data=> console.log(data)).catch((e)=>console.log(e));
      // const res = await fetch(url);
      // const data = await res.json;
      // console.log(res);
      // console.log(data)
      // const arrData = [data];
      // console.log(arrData)

      fetch(url, {
        method: 'GET',
    }).then(res => res.json)
        .catch(error => {
            console.error('Error:', error);
        })
        .then(response => {
            console.log("first way");
            console.log(response);
        });

      


    //   temp.innerText = `${arrData[0].main.temp}°C`;
    //   min_max.innerText = `MIN ${arrData[0].main.temp_min}°C | MAX ${arrData[0].main.temp_max}°C`;
    //   city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`
    //   const tempStatus =arrData[0].weather[0].main;
    //   if(tempStatus=="Sunny"){
    //     weaCond.innerHTML = "<i class='fas fa-light fa-cloud fa-6x' id='weather-icon'style='color: #f16406;'></i>";
    //   } else if(tempStatus=="Clouds"){
    //     weaCond.innerHTML = "<i class='fas fa-light fa-cloud fa-6x' id='weather-icon'style='color: #dfe4ea;'></i>";
    //   } else if(tempStatus=="Rainy"){
    //     weaCond.innerHTML = "<i class='fas fa-light fa-cloud-rain fa-6x' id='weather-icon'style='color: #a4b0be;'></i>";
    //   } else {
    //     weaCond.innerHTML = "<i class='fas fa-light fa-cloud fa-6x' id='weather-icon'style='color: #f16406;'></i>";
    //   }
    // // console.log(data);

    } catch(e){
      console.log(e);
      city_name.innerText="Please enter the correct city name"
    }
  }
}

submitBtn.addEventListener('click',getInfo);
