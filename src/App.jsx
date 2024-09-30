import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

const API_URL = 'http://www.omdbapi.com?apikey=8407d84b'

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('nightmare before')
    }, [])


    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input type="text" placeholder="Search for movies" onChange={(e) => {setSearchTerm(e.target.value)}} value={searchTerm} />
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />

            </div>

            {
                movies.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie, index) => (<MovieCard key={index    } movie={movie} />))}
                        </div>
                    )
                    :
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    )
}

export default App