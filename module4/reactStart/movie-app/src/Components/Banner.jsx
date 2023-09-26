import React, { Component } from 'react';
import {movies} from '../MoviesData';
import axios from 'axios';

export default class Banner extends Component {
  constructor(){
    super()
    this.state={
      movie:""
    }
  }

  async componentDidMount(){
    const res = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=47db7fcb061bf1da593fb8065acdeec5")
    this.setState({
      movie:res.data.results[Math.floor(Math.random() * 10)]
    })
  }

 

  render() {
    // const movie = movies.results[0];
    return (
     <>
      {
        this.state.movie == ''?
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>:
        <div className="card banner-card" >
          <img src={`https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path}`} className="card-img-top banner-img" alt="Image not available"/>
          <h1 className="card-title banner-title">{this.state.movie.original_title}</h1>
          <p className="card-text banner-text">{this.state.movie.overview}</p>   
        </div>
      }
       </> 
      
    )
  }
}
