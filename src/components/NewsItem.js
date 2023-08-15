import React from 'react'

const NewsItem =(props)=> {
   
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
      <div className="card">
  <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEMbFWnCg1Z7GxYgkvk60mlDCP_5Pni53Kg&usqp=CAU":imageUrl}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...<span className="badge rounded-pill   bg-secondary ">{source}</span></h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small className="text-muted">By {!author?"unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a rel="norefrer"href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
</div>
    )
  
}

export default NewsItem