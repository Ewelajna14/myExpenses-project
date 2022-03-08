import styled from "styled-components"

function NewsCard({onenews}){
    return(
    <Wrapper>
      <h2>{onenews.headline}</h2>
      <img src = {onenews.image} width="800" height="400"/>
      <p>{onenews.summary}</p>
      <a href={onenews.url}> Read more</a>
    </Wrapper>
    )
}

export default NewsCard

const Wrapper = styled.div `
margin: 4rem;

h2{
    width: 800px;
    font-family: 'Courier New';
    font-weight: bold;
}

p{
    width: 800px;
    font-family: 'Courier New', monospace;
}
`