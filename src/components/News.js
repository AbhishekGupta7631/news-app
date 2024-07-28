import React, { useState , useEffect} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


import Spinner from './spinner.js'

export const News = (props)=>{
 



const [page, setPage] = useState(1);
// const [loading, setLoading] = useState(true);
const [articles,setArticles] = useState([]);
const [totalResults,setTotalResults] = useState(0);


const updateNews = async() => {
  props.setProgress(10);

  document.title =`${props.category.toUpperCase()} -NewsMonkey`;


  
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=8c2d881ea3e445d8b336c4cc3f43c11f&category=${props.category}&pageSize=${props.pageSize}&page=${page}`;
    
    let response  = await fetch(URL);
    props.setProgress(30);
    let data = await response.json();
    props.setProgress(70);
    setArticles( data.articles)
    setTotalResults(data.totalResults )
   
   
  props.setProgress(100);

}



const fetchMoreData = async () => {
  props.setProgress(10);
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=8c2d881ea3e445d8b336c4cc3f43c11f&category=${props.category}&pageSize=${props.pageSize}&page=${page+1}`;
    setPage(page+1);
    
    let response  = await fetch(URL);
    props.setProgress(30);

    let data = await response.json();
    props.setProgress(70);

    setTotalResults(data.totalResults)
    setArticles(articles.concat(data.articles));
    
  

    if(page===Math.ceil(totalResults/props.pageSize)-1){
      setPage(0);
  }
  props.setProgress(100);

}

  useEffect (()=>{ updateNews(); },[updateNews])



    return (
        <>
    <div className="conatiner mx-5">
   
      <h2 className="text-center my-4 mx-5"> NewsMonkey - Top Headlines...</h2>


      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          // hasMore={page<=Math.ceil(totalResults/props.pageSize)}  for equal to total number of articles 
          hasMore={true}
          loader={<Spinner/>}
        >
      <div className='row my-3 mx-3'>
       {articles.map((element)=>{
        return(
        <div className='col-md-4  ' key={element.url}>

        <NewsItem title={element.title.slice(0,55)}  description ={element.description} imageUrl ={element.urlToImage} newsUrl ={element.url}  date ={element.publishedAt} author = {element.author} source={element.source.name}/>
        </div> 
       )})}
       </div>
       </InfiniteScroll>
      </div>
      </>
    )
  

  }
News.defaultProps ={
  pageSize : 10,
  country : "in",
  category : "general",
}
News.propTypes ={
  pageSize : PropTypes.number,
  country  : PropTypes.string,
  category : PropTypes.string,
}



export default News ;
