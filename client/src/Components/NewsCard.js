import styled from "styled-components"

function NewsCard({onenews}){
    return(
    <Wrapper>
      <h2>{onenews.category}</h2>
      <h2>{onenews.headline}</h2>
      <img src = {onenews.image} width="800" height="400"/>
      <p>{onenews.summary}</p>
      <a href={onenews.url}> Read more</a>
    </Wrapper>
    )
}

export default NewsCard

const Wrapper = styled.div `
margin: 3rem;
`