import { useState } from "react";
import superappimg from "../../assets/Super app.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Genre = ({ selectedTypes, removeType }) => {

  const [validationMessage , setValidationMessage] = useState("");

  let navigate = useNavigate();

  const handleCheck = () => {
    if (selectedTypes.length < 3) {
      setValidationMessage("Minimum 3 category required");
      console.log(setValidationMessage);
    } else {
      localStorage.setItem('selectedCategories', JSON.stringify(selectedTypes));
      console.log(selectedTypes);
      navigate('/userpage');
    }
  };

  return (
    <div className="w-[750px] px-10 bg-black text-white">
      <div className="flex flex-col  py-[100px]">
        <img src={superappimg} className="w-[150px]" alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold ">
          Choose your <br /> entertainment category
        </h1>
      </div>
      <div className="selected-types">
        <div className="flex flex-row flex-wrap">
          {selectedTypes.map((type, index) => (
            <p
              className="text-white text-lg bg-green-400 rounded-lg my-5 mx-2 py-1 px-3"
              key={index}
            >
              {type}{" "}
              <span
                className="cursor-pointer text-sm text-black px-2"
                onClick={() => removeType(type)}
              >
                X
              </span>
            </p>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-red-500">{validationMessage}</p>
      </div>
      <button
        onClick={() => {
          handleCheck()
        }}
        className="absolute bottom-11 right-10 p-2 rounded-lg bg-green-600"
      >
        Next Page
      </button>
     
    </div>
  );
};

Genre.propTypes = {
  selectedTypes: PropTypes.array.isRequired,
  removeType:PropTypes.bool.isRequired,
};

export default Genre;
