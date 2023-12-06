import { useState } from "react";
import Categorychipsdata from "./Categorychipsdata";
import Genre from "../genre/Genre";

const colors = [
  "bg-orange-500",
  "bg-pink-400",
  "bg-green-600",
  "bg-blue-300",
  "bg-amber-950",
  "bg-purple-500",
  "bg-pink-700",
  "bg-red-500",
  "bg-green-300",
];

const Categorychips = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleClick = (item) => {
    const typeExists = selectedTypes.includes(item.type);
    console.log(typeExists);
    if (typeExists) {
      const updatedTypes = selectedTypes.filter((type) => type !== item.type);
      console.log(updatedTypes);
      setSelectedTypes(updatedTypes);
    } else {
      setSelectedTypes([...selectedTypes, item.type]);
    }
  };

  const removeType = (typeToRemove) => {
    const updatedTypes = selectedTypes.filter((type) => type !== typeToRemove);
    setSelectedTypes(updatedTypes);
  };

  return (
    <div className="flex flex-row">
      <div className="my-5">
        <Genre selectedTypes={selectedTypes} removeType={removeType} />
      </div>

      <div className="flex flex-wrap gap-x-3 w-[800px] m-2 left-6">
        {Categorychipsdata.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`${colors[index]} category-chip py-4 border border-gray-700 w-[230px] h-[200px] rounded-lg my-2 px-3 cursor-pointer hover:bg-slate-200`}
          >
            <p className="text-lg font-semibold text-white px-2 py-2">
              {item.type}
            </p>
            <img src={item.img} alt={item.type} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorychips;
