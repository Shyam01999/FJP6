import React, { Component } from 'react';
import {movies} from '../MoviesData';
import axios from 'axios';


export default class MovieList extends Component {
  constructor(){
    super()
    this.state={
      hover:'',
      pArr:[1],
      currPage:1,
      movies:[],
      favourites:[]
    }
  }
  
  async componentDidMount(){
    //side effect
    // console.log('component did mount')
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=47db7fcb061bf1da593fb8065acdeec5&language=en-US&page=${this.state.currPage}`);
    const data = res.data;
    this.setState({
      movies:[...data.results]
    })
  }

  changeMovies=async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=47db7fcb061bf1da593fb8065acdeec5&language=en-US&page=${this.state.currPage}`);
    const data = res.data;
    this.setState({
      movies:[...data.results]
    })
  }

  handlePreviousPage=()=>{
    if(this.state.pArr != 1){
      this.setState({
        currPage:this.state.currPage - 1
      },this.changeMovies)
    }
  }

  handlePageClick=(value)=>{
    if(value != this.state.currPage){
      this.setState({
        currPage:value
      },this.changeMovies)
    }
  }

  handleNextPage=()=>{ 
    this.setState({
      pArr:[...this.state.pArr, this.state.pArr.length + 1],
      currPage:this.state.currPage+1
    },this.changeMovies)
  }

  handleFavourite=(movie)=>{
    let oldData =JSON.parse(localStorage.getItem('movies-app')|| '[]');
    if(this.state.favourites.includes(movie.id)){
      oldData = oldData.filter((movieObj)=>movieObj.id != movie.id)
    }else{
      oldData.push(movie)
    }
    localStorage.setItem('movies-app',JSON.stringify(oldData));
    console.log(oldData);
    this.handleFavouritesState();
  }

  handleFavouritesState=()=>{
    let oldData =JSON.parse(localStorage.getItem('movies-app')|| '[]');
    let temp = oldData.map((movie)=>movie.id)
    this.setState({
      favourites:[...temp]
    })
  }
  render() {
    // let movie = movies.results
    return (
      <>
        {
          this.state.movies.length == 0?
          <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>:
          <div>
            <h3 className='text-center'><strong>Trending</strong></h3>
            <div className='movie-list'>
            {
                this.state.movies.map((movieObj)=>(
                  <div className="card movie-card" key={movieObj.id} onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                    <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movie-img" alt="Image not available"/>
                    <h5 className="card-title movie-title">{movieObj.original_title}</h5>   
                    <div className="button-wrapper">
                      {
                        this.state.hover == movieObj.id && 
                        <a className='btn btn-primary movie-button' onClick={()=>this.handleFavourite(movieObj)}>{this.state.favourites.includes(movieObj.id)?'Remove from Favourite':'Add to Favourite'}</a>
                      }  
                    </div>
                  </div>
                ))
            }
            </div>
            <div className='movie-pagination'>
              <nav aria-label="Page navigation example">
                <ul className="pagination" >
                  <li className="page-item"><a className="page-link" onClick={this.handlePreviousPage}>Previous</a></li>
                  {
                    this.state.pArr.map((value)=>(
                      <li className="page-item"><a className="page-link" onClick={()=>this.handlePageClick(value)}>{value}</a></li>
                    ))
                  }
                  <li className="page-item"><a className="page-link" onClick={this.handleNextPage}>Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        }
      </>
      
    )
  }
}
