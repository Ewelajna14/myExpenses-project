import React from 'react'
import {Button, Col} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NewsCard from './NewsCard';
import useFetch from "./useFetch";


function News({user}){

    const {data: news, setData: setNews, isPending, error} = useFetch('/news')

    const showNews = news.slice(0,10)
    console.log(showNews)

    const newsArray = showNews.map((onenews) =>{
        return(<NewsCard key={onenews.id} onenews={onenews}/>)
    })

    const history = useHistory()

    function handleClick(){
        history.push("/")
    } 

    return(
        <div>
            <h1>Hello {user.first_name}</h1>
            <Button onClick={handleClick} as={Col} className="mx-2" variant="info" type="submit">
                      Back
            </Button>
            {newsArray}
        </div>
    )
}

export default News