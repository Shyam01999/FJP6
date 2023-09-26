import React, { Component } from 'react';
import { movies } from '../MoviesData';

export default class Favourite extends Component {
    constructor(){
        super();
        this.state={
            genres:[],
            currgenre:"All Genres",
            pArr:[1],
            movies:[],
            currText:"",
            limit:5,
            currPage:1
        }
    }

    componentDidMount(){
        let genreResult = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western",
        };
        let data = JSON.parse(localStorage.getItem('movies-app') || "[]");
        let temp = [];
        data.forEach((movieObj)=>{
            if(!temp.includes(genreResult[movieObj.genre_ids[0]])){
             temp.push(genreResult[movieObj.genre_ids[0]])
            }
        })
        temp.unshift('All Genres')
        this.setState({
            genres:[...temp],
            movies:[...data]
        })
    }

    handleGenre=(genre)=>{
        this.setState({
            currgenre:genre
        })
    }

    handlePopularityDesc=()=>{
        let temp = this.state.movies;
        temp.sort(function(objA,objB){
            return objB.popularity-objA.popularity
        })
        this.setState({
            movies:[...temp]
        })
    }

    handlePopularityAsc=()=>{
        let temp = this.state.movies;
        temp.sort(function(objA,objB){
            return objA.popularity-objB.popularity
        })
        this.setState({
            movies:[...temp]
        })
    }

    handleRatingDesc=()=>{
        let temp = this.state.movies;
        temp.sort(function(objA,objB){
            return objB.vote_average-objA.vote_average
        })
        this.setState({
            movies:[...temp]
        })
    }
    handleRatingAsc=()=>{
        let temp = this.state.movies;
        temp.sort(function(objA,objB){
            return objA.vote_average-objB.vote_average
        })
        this.setState({
            movies:[...temp]
        })
    }

    handlePageChange=(page)=>{
        this.setState({
            currPage:page
        })
    }

    handleDelete=(id)=>{
        let genreResult = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western",
        };
        let newArr =[];
        newArr = this.state.movies.filter((movieObj)=>{
            return movieObj.id!=id;
        })
        
        let temp=[];
        newArr.forEach((movieObj)=>{
            if(!temp.includes(genreResult[movieObj.genre_ids[0]])){
             temp.push(genreResult[movieObj.genre_ids[0]])
            }
        })
        temp.unshift('All Genres')
        this.setState({
            movies:[...newArr],
            genres:[...temp]
           
        })
        localStorage.setItem('movies-app',JSON.stringify(newArr))
    }
  render() {
    
    let genreResult = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western",
    };
    let filterArr =[];
    if(this.state.currText == ''){
        filterArr = this.state.movies
    }
    else {
        filterArr = this.state.movies.filter((movieObj)=>{
            let title = movieObj.original_title.toLowerCase();
            return title.includes(this.state.currText.toLowerCase())
        })
    }

     if(this.state.currgenre != 'All Genres'){
        filterArr = this.state.movies.filter((movieObj)=>genreResult[movieObj.genre_ids[0]]==this.state.currgenre)
    }

    let pages = Math.ceil(filterArr.length/this.state.limit);
    let pageArr =[];
    for(let i=1; i<=pages;i++){
        pageArr.push(i)
    }
    let si = (this.state.currPage-1)*this.state.limit;
    let ei = si+this.state.limit;
    filterArr=filterArr.slice(si,ei);
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <ul className="list-group favourite-genres">
                        {
                            this.state.genres.map((genre)=>(
                                this.state.currgenre == genre?<li className="list-group-item active" >{genre}</li>:
                                <li className="list-group-item" onClick={()=>this.handleGenre(genre)} >{genre}</li>
                                
                            ))
                        }
                    </ul>
                </div>
                <div className="col-sm-9 favourite-table">
                    <div className="row">
                        <input type="text" className='input-group-text col' placeholder='Search' value={this.state.currText} onChange={(e)=>this.setState({currText:e.target.value})}/>
                        <input type="number" className='input-group-text col' placeholder='Rows' value={this.state.limit} onChange={(e)=>this.setState({limit:e.target.value})}/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col" >Title</th>
                                    <th scope="col" className='text-center'>Genre</th>
                                    <th scope="col" className='text-center'><i className="fa-solid fa-sort-up" onClick={this.handlePopularityDesc}/>Popularity<i className="fa-solid fa-sort-down" onClick={this.handlePopularityAsc}/></th>
                                    <th scope="col" className='text-center'><i className="fa-solid fa-sort-up" onClick={this.handleRatingDesc}/>Rating<i className="fa-solid fa-sort-down" onClick={this.handleRatingAsc}/></th>
                                    <th scope="col"></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filterArr.map((movieObj)=>(
                                            <tr key={movieObj.id}>
                                                <th scope="row"><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className='favourite-img'/>{movieObj.title}</th>
                                                <td className='text-center'>{genreResult[movieObj.genre_ids[0]]}</td>
                                                <td className='text-center'>{movieObj.popularity}</td>
                                                <td className='text-center'>{movieObj.vote_average}</td>
                                                <td className='text-center'><button type="button" className="btn btn-danger" onClick={()=>this.handleDelete(movieObj.id)}> Delete </button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {
                                pageArr.map((page)=>(
                                    <li className="page-item"><a className="page-link" onClick={()=>this.handlePageChange(page)}>{page}</a></li>
                                ))
                            }
                            
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
        
    )
  }
}
