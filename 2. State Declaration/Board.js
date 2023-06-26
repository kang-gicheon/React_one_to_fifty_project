// 게임이 진행될 5 X 5 판을 나타낼 컴포넌트

import { styled } from "styled-components";
import Cell from "./cell";

function Board({numbers}) {
    
    return (

        <Container>
            
          {numbers.map((num,index) => (
            <Cell num={num} key={index}></Cell>
          ))}

        </Container>

    );
}

const Container = styled.div`

    width: 400px;
    height: 400px;
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);

`;

export default Board;