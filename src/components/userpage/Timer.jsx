import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [activeTime, setActiveTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [status, setStatus] = useState(false);
  const [btnName, setBtnName] = useState("Start");

  const updateTime = (field, value) => {
    if (value >= 0 && value <= 59) {
      setTime({ ...time, [field]: value >= 10 ? value : `0${value}` });
    }
  };

  const start = () => {
    setActiveTime({ ...time });
    setStatus(true);
    startTimer();
  };

  const startTimer = () => {
    let totalSeconds =
      Number(time.hours) * 3600 + Number(time.minutes) * 60 + Number(time.seconds);

    const interval = setInterval(() => {
      if (totalSeconds <= 0) clearInterval(interval);

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setActiveTime({
        hours: hours >= 10 ? hours : `0${hours}`,
        minutes: minutes >= 10 ? minutes : `0${minutes}`,
        seconds: seconds >= 10 ? seconds : `0${seconds}`,
      });

      totalSeconds--;
    }, 1000);
  };

  return (
    <div className=" m-5 w-[61rem] h-[20rem] p-2 bg-indigo-800 rounded-3xl flex justify-evenly items-center">
      {/* Countdown Circle Timer */}
      <div className="shadow-inner bg-blue-950 rounded-full w-64 h-64 flex items-center justify-center">
        <div className="flex justify-evenly items-center absolute">
          {status && (
            <CountdownCircleTimer
              isPlaying
              size={220}
              rotation="counterclockwise"
              duration={
                Number(time.hours) * 3600 +
                Number(time.minutes) * 60 +
                Number(time.seconds) +
                1
              }
              colors="#FF6A6A"
              colorsTime={[0]}
              onComplete={() => {
                setStatus(false);
                let audio = new Audio("/clock-ring.mp3");
                audio.play();
              }}
              trailColor="#191E39"
            />
          )}
        </div>
        <p className="font-bold text-5xl leading-10 text-white">
          {activeTime.hours}:{activeTime.minutes}:{activeTime.seconds}
        </p>
      </div>

      {/* Set Countdown */}
      <div className="flex flex-col items-center">
        <div className="flex gap-8">
          {/* Hours */}
          <div className="text-gray-200">
            <p className="text-4xl leading-10 m-2">Hours</p>
            <div className="mx-9">
              <button onClick={() => updateTime('hours', Number(time.hours) + 1)} className="cursor-pointer mx-4 ">▲</button>
              <p className="my-2 mx-1 text-4xl font-bold">{time.hours}</p>
              <button onClick={() => updateTime('hours', Number(time.hours) - 1)} className="cursor-pointer mx-4">▼</button>
            </div>
          </div>

          {/* Minutes */}
          <p className="font-bold text-7xl leading-10 text-gray-400 mt-20">:</p>
          
          {/* Minutes */}
          <div className="text-gray-200">
            <p className="text-4xl leading-10 m-2">Minutes</p>
            <div className="mx-12">
              <button onClick={() => updateTime('minutes', Number(time.minutes) + 1)} className="cursor-pointer mx-4">▲</button>
              <p className="my-2 text-4xl mx-1 font-bold">{time.minutes}</p>
              <button onClick={() => updateTime('minutes', Number(time.minutes) - 1)} className="cursor-pointer mx-4">▼</button>
            </div>
          </div>

          {/* Seconds */}
          <p className="font-bold text-7xl leading-10 text-gray-400 mt-20">:</p>
          
          {/* Seconds */}
          <div className="text-gray-100">
            <p className="text-4xl leading-10 m-2">Seconds</p>
            <div className="mx-10">
              <button onClick={() => updateTime('seconds', Number(time.seconds) + 1)} className="cursor-pointer mx-4">▲</button>
              <p className="my-2 text-4xl mx-1 font-bold">{time.seconds}</p>
              <button onClick={() => updateTime('seconds', Number(time.seconds) - 1)} className="cursor-pointer mx-4">▼</button>
            </div>
          </div>
        </div>
        
        {/* Start button */}
        <div className="start-button">
          <button
            className="w-[43rem] h-[5rem] bg-pink-600 rounded-full font-bold text-5xl leading-8 text-white m-4 p-4"
            onClick={() => {
              start();
              setBtnName(btnName === "Start" ? "Stop" : "Start");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
}