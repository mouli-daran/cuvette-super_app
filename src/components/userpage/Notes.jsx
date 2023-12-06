import { useEffect, useState } from "react";

const Notes = () => {

    const [contents , setContents] = useState('');

    useEffect(() => {
        const storedContent = localStorage.getItem('notesContent');
        if(storedContent) {
            setContents(storedContent)
        }
    } , []);
    
    const handleChange = (e) => {
        const newContent = e.target.value;
        console.log(newContent);
        setContents(newContent);
        localStorage.setItem('notesContent' , newContent);
    };



  return (
    <div className="bg-yellow-300 w-[400px] m-5 rounded-3xl">
      <h1 className="p-10 font-bold text-3xl">All Notes</h1>
      <textarea
        className=" bg-yellow-300 rounded-xl text-black m-2 break-words cursor-text p-1"
        placeholder="Content Goes Here"
        cols="49"
        rows="14"
        value={contents}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Notes;
