// 제작할 게임의 최상위 컴포넌트
import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import Board from "./Board";

let array = [];
for(let i = 1 ; i <= 25 ; i++) {
    array.push(i);
}

function OneToFifty() {

    const [numbers, setNumbers] = useState(array);      // 1부터 25까지의 숫자 배열
    const [gameFlag, setGameFlag] = useState(false);    // 게임이 진행중인지 여부(true / false)    
    const [current, setCurrent] = useState(1);          // 게임 진행 중 특정시점에서 클릭해야할 숫자(처음은 1 나중에는 50까지)
    const [timeElapsed, setTimeElapsed] = useState(0);  // 경과시간

    return (

        <Container>
            <Board numbers={numbers}></Board>
        </Container>

    )

}

const Container = styled.div`

    width: 600px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
   

`;

export default OneToFifty;