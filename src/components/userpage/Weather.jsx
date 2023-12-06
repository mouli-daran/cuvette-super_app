import { useEffect, useState } from "react";
import humidity from "/weatherimages/humidity.png";
import pressure from "/weatherimages/pressure.png";
import rain from "/weatherimages/rain.png";
import wind from "/weatherimages/wind.png";

const Weather = () => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

try {
  await fetch(
    "http://api.weatherapi.com/v1/current.json?key=4232b407c57e49a7a3990042233011 &q=coimbatore&aqi=no"
  )
    .then((response) =>
      response.json().then((data) => {
        setWeather(data.current);
        console.log(data.current);
      })
    )
    .catch((error) => {
      console.error(error);
    });
} catch (error) {
  console.error("I will need to check once again");

}
  };
  return (
    <div className="m-4">
      <div className="bg-pink-500 text-white text-4xl text-center p-2 rounded-t-3xl">
        <h1>{weather.last_updated}</h1>
      </div>
      <div className="bg-blue-900  flex flex-row px-8 py-3 place-content-center h-[9rem] text-white rounded-b-3xl">
        <div className="items-center px-6">
          <img className="w-18 h-16 " src={rain} alt="rain" />
          <h1>{weather?.condition?.text}</h1>
        </div>
        <div className="h-12 border-l-4 my-10 mx-2"></div>
        <div className="flex flex-col p-2">
          <h1 className="text-3xl py-3">{weather?.feelslike_c + " ° " + " C "}</h1>
          <div className="flex flex-row items-center">
            <img className="w-6 h-8 my-3 px-1" src={pressure} alt="pressure" />
            <h1 className="w-[100px]">
              {weather.pressure_mb + " mbar pressure"}
            </h1>
          </div>
        </div>
        <div className="h-12 border-l-4 mx-3 my-10"></div>
        <div className="my-2 flex flex-col p-2">
          <div className="flex flex-row items-center">
            <img className="w-8 h-8" src={wind} alt="wind" />
            <h1 className="w-[120px] px-3">
              {weather.wind_kph + " km/h wind"}
            </h1>
          </div>
          <div className="flex flex-row my-2">
            <img className="w-6 h-8" src={humidity} alt="humidity" />
            <h1 className="px-3">{weather.humidity + "% Humidity"}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
