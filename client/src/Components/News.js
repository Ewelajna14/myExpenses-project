import React from 'react'
import NewsCard from './NewsCard';
import useFetch from "./useFetch";


function News(){

    const {data: news, setData: setNews, isPending, error} = useFetch('/news')

    const showNews = news.slice(0,10)

    const newsArray = showNews.map((onenews) =>{
        return(<NewsCard key={onenews.id} onenews={onenews}/>)
    })


    return(
        <div>
            {newsArray}
        </div>
    )
}

export default News