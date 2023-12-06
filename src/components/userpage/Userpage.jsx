import Userinfo from "./Userinfo";
import Weather from "./Weather";
import Notes from "./Notes";
import Timer from "./Timer";
import News from "./News";
import { useNavigate } from "react-router-dom";

const Userpage = () => {
    let navigate = useNavigate();

    const handleChange = (() => {
        navigate("/movielists");
    })
  return (
    <div className="bg-black">
      <div className="flex flex-row ">
        <div className="grid grid-flow-row">
          <div className="row-span-1 col-span-1">
            <Userinfo />
            <Weather />
          </div>
          <div className="row-span-1 col-span-1">
            <Notes />
          </div>
          <div className="row-span-1 col-span-4">
            <Timer />
          </div>
        </div>
        <div className="">
          <News />
        </div>
      </div>
      <div className="bg-black">
        <button className="text-black bg-green-500 p-2 text-2xl rounded-3xl absolute right-10 top-[117%]" onClick={handleChange}>Browse</button>
      </div>
    </div>
  );
};

export default Userpage;
