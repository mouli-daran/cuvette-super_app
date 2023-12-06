import profileimage from  "../../assets/profileimage.png";

const Userinfo = () => {

    const userData = JSON.parse(localStorage.getItem('formData'));
console.log(userData);

const categoryData = JSON.parse(localStorage.getItem('selectedCategories'));
console.log(categoryData);
    return (
        <div className="bg-violet-700  flex p-4 m-5 rounded-3xl h-[16rem]">
            <div>
                <img className=" h-[14rem] my-2" src={profileimage} alt="" />
            </div>
            <div className="text-white  p-4 text-xl">
            <h1 className="text-2xl">
                {userData.name}
                </h1>
            <h1>
                {userData.email}
            </h1>
            <h1 className="text-4xl">
                {userData.userName}
            </h1>
            {/* </div>
            <div> */}
                <h1 className=" w-[225px] gap-2 m-2 grid grid-cols-2 ">
                
                            {categoryData.map((category, index) => (
                                <h1 className="bg-slate-400 text-xl py-2 px-2 rounded-3xl" key={index}>{category}</h1>
                            ))}
                        </h1>
                   
            </div>
        </div>
    )
};

export default Userinfo;