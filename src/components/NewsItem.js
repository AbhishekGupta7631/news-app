import React from 'react'
import './component.css'

const NewsItem=(props)=>  {



    let{title , description , imageUrl ,newsUrl , date, author}= props;
    return (
      <div className='round'>
      <div className="card mainSize" style={{ width: "18rem" }}>
  <img  src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DRYNOTY3Z6E3WO24DIXBHQYLUY_size-normalized.JPG&w=1440":imageUrl} className="card-img-top size" alt="..." />


  <div className='sideUpper'>
  <span class=" badge rounded-pill bg-danger">
    {props.source}
    <span class="visually-hidden">unread messages</span>
  </span>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">
     {!description? "CLick on Link Below;":description+"..."}
    </p>
    <a href={newsUrl}  className="btn btn-sm btn-dark">
      Read More...
    </a>
    <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    </div>
  </div>
</div>

      </div>
    )
  
}

export default NewsItem
