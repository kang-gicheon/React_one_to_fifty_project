import {useEffect, useRef, useState} from "react"
import styled from 'styled-components'

function Timer() {

    const [TimeElapsed, setTimeElapsed] = useState(0);
    const record = useRef();
    record.current = TimeElapsed;

    useEffect(() => {
        const Timer = setInterval(() => {
            setTimeElapsed(TimeElapsed => TimeElapsed + 30);
        },30);

        return () => {

            alert("Your Record : " + record.current / 1000);
            clearInterval(Timer);

        };

    },[]);

    return (
        <Container>

            <Front>{Math.floor(TimeElapsed / 1000)}:</Front>

            <Back>{(TimeElapsed % 1000) / 10}</Back>

        </Container>
    );

}

const Container = styled.div`

    margin-top: 30px;
    width:  100px;
    height: 50px;
    display: flex;
    justify-content: cetner;
    align-items: center;
    font-size: 30px

`;

const Front = styled.div`

    text-align: right;

`;

const Back = styled.div`

    width: 1em;

`;

export default Timer;