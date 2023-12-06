import { useEffect, useState } from "react";

const News = () => {

const [flashNews , setFlashNews] = useState([]);


    useEffect(() => {
        fetchData();
    } ,[]);

    const fetchData = async () => {
        try {
            await fetch ("https://newsapi.org/v2/everything?q=bitcoin&apiKey=5db7890d015a4e79966d28c765d80091")
        .then(
            (response) => response.json()
        .then((data) => {
            setFlashNews(data.articles);
            console.log(data.articles);
           
        })
        ).catch((error) => {
            console.error(error);
            
        })
        } catch (error) {
            console.log("I will run if try has failed !@!")
            
        }
        
        
    };

    console.log(flashNews);
    return (
        <div className="flex flex-row">
        <div className="w-[400px] h-screen my-5 bg-white rounded-3xl">
        <img className="w-[400px] h-[500px] rounded-t-3xl" src={flashNews[5]?.urlToImage} alt="" />
        <div className="absolute top-[28rem] w-[400px] p-3 bg-black bg-opacity-50 text-white">
            <h1 className="text-xl">{flashNews[5]?.title}</h1>
            <p className="text-sm">{flashNews[5]?.publishedAt}</p>
        </div>
        <p className="text-sm py-10 px-5 bg-white font-medium leading-7  h-[21rem] rounded-b-3xl">{flashNews[1]?.description}</p>
    </div>

        </div>
    )
};

export default News;