function NewsCard({onenews}){
    return(
    <div>
      <h2>{onenews.category}</h2>
      <h3>{onenews.datetime}</h3>
      <h2>{onenews.headline}</h2>
      <img src = {onenews.image} width="800" height="400"/>
      <p>{onenews.summary}</p>
      <a href={onenews.url}> Read more</a>
    </div>)
}

export default NewsCard