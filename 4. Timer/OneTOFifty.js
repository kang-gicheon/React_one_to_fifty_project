// 제작할 게임의 최상위 컴포넌트
import{ useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import Board from "./Board";
import Timer from './Timer';

let array = [];
for(let i = 1 ; i <= 25 ; i++) {
    array.push(i);
}
// 1부터 25까지 숫자 배열 생성
function OneToFifty() {

    const [numbers, setNumbers] = useState(array);      // 1부터 25까지의 숫자 배열
    const [gameFlag, setGameFlag] = useState(false);    // 게임이 진행중인지 여부(true / false)    
    const [current, setCurrent] = useState(1);          // 게임 진행 중 특정시점에서 클릭해야할 숫자(처음은 1 나중에는 50까지)

    
    // handleClick 함수 내부 구현

    const handleClick = num => {
        if (num === current) {  // num이 current와 같을시
          if (num === 50) {
            console.log("Success"); // 숫자가 50인지 확인, 50이라면 게임이 끝남
            //게임 끝 구현
          }
          const index = numbers.indexOf(num); // numbers 배열 내에서 해당 num의 index값 추출
          setNumbers(numbers => [   // 해당 num(26 ~ 50)으로 치환
            ...numbers.slice(0, index),
            num < 26 ? num + 25 : 0,    // num이 26이상일시 치환할 숫자가 존재하지 않음, 0으로 치환
            ...numbers.slice(index + 1)
          ]);
          setCurrent(current => current + 1); // 클릭 판정을 위한 current 1 증가
        }
      };

    const shuffleArray = array => {

        for (let i = array.length - 1 ; i > 0 ; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

      // 게임의 시작, 끝 기능 구현 시작
      // startGame, endGame 함수 추가

      const startGame = () => {     // startGame 함수가 실행될시 

        setNumbers(shuffleArray(array));    // shuffleArray() 함수를 통해 numbers가 섞이면서 게임 시작
        setCurrent(1);
        setGameFlag(true);

      };

      const endGame = () => {
        setGameFlag(false);
      }

    return (
        <Container>
        <Board numbers={numbers} handleClick={handleClick}></Board>
        {gameFlag ? (
          <Timer/>
        ) : (
          <StartButton onClick={startGame}>start</StartButton>
        )}
      </Container>
    );
  }

const Container = styled.div`

    width: 600px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const  StartButton = styled.button`

margin-top: 30px;
width: 100px;
height: 50px;

`;

export default OneToFifty;