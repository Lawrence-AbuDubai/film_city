import React from "react";
import { useState, useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard'

// key : 2610e096

const API_URL = "https://www.omdbapi.com/?apikey=2610e096"

// add https


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('batman')
    }, []);

    return (
        <div className="app">
            <h1>Movie City</h1>

            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // e comes from the callback function refering to "Event"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))
                        }
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }

            

        </div>
    );
    
}

export default App;