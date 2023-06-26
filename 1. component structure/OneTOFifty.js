// 제작할 게임의 최상위 컴포넌트
import styled from "styled-components";
import Board from "./Board";


function OneToFifty() {

    return (

        <Container>
            <Board></Board>
        </Container>

    )

}

const Container = styled.div`

    width: 600px;
    height: 800px;
    border: 1px solid black;
   

`;

export default OneToFifty;