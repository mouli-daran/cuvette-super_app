/* eslint-disable no-unused-vars */

import { json } from "react-router-dom";
import superimg from "../../assets/Super app.png";
import profileimg from "../../assets/profileimage.png";
import { useEffect , useState } from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
 

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Fiction"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 37,
      "name": "Western"
    }
]



const MovieListByCategory = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const matchedGenre = genres.find(genre =>
      genre.name.toLowerCase() === category.toLowerCase()
    );

    if (matchedGenre) {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ae17724cc6a19a7e50ab5f1b93a9a2ea&with_genres=${matchedGenre.id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((json) => {
          const slicedMovies = json.results.slice(0, 6);
          setMovies(slicedMovies);
        })
        .catch((error) => {
          console.error('Error fetching movies by category:', error);
        });
    }
  }, [category]);

  return (
    <div>
      <h2 className="text-2xl">{category}</h2>
      <div className="flex flex-row gap-10 p-5">
        {movies.map(movie => (
          <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-48" />
        ))}
      </div>
    </div>
  );
};

const MovieListing = () => {

  let navigate = useNavigate();
  const handleChange = () => {
    navigate("/")
  }
  
  const categoryData = JSON.parse(localStorage.getItem("selectedCategories")) || [];
  return (
    <div className="bg-black p-10">
<div className="flex justify-between">
        <img className="w-24 h-20" src= {superimg} alt="" />
        <img onClick={handleChange} className="w-20 h-16 cursor-pointer rounded-full" src={profileimg} alt="" />
      </div>
      <div className="text-white text-3xl">
        <h1>Entertainment according to your choice</h1>
      </div>
    <div className="text-white py-10">
      {categoryData.map(category => (
        <MovieListByCategory key={category} category={category} />
        ))}
        </div>
    </div>
  );
};


MovieListByCategory.propTypes = {
  category: PropTypes.string.isRequired,
};  

export default MovieListing;

