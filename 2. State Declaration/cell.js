// Board 내부에 위치한 25개의 각 네모칸을 나타내는 컴포넌트

import {styled } from "styled-components";

function Cell({num}) {

    return <Container>{num}</Container>;

}

const Container = styled.div `

    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;

`;

export default Cell;