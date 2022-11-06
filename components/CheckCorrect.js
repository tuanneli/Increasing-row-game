import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import winBgImg from "../img/winBg.svg";
import looseBgImg from "../img/looseBg.svg";
import {useRouter} from "next/router";

const WinBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const WinMenu = styled.div`
  max-width: ${props => props.maxWidth || '700px'};
  max-height: 500px;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${props => props.img});;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WinTitle = styled.div`
  font-family: 'Circe Rounded Alt ';
  font-style: normal;
  font-weight: 600;
  font-size: 92px;
  display: flex;
  align-items: center;
  text-shadow: 0 0 15px green;
  color: #FFE44F;
`

const CongratulationText = styled.div`
  width: 250px;
  font-family: 'Circe Rounded';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 51px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #5F40A1;
  margin: 15px 0;
`

const AgainButton = styled.button`
  background: #2BD600;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-family: 'Circe Rounded Alt ';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  border: none;
  padding: 5px 25px;
  cursor: pointer;

  &:hover {
    background: rgba(43, 214, 0, 0.5);
  }

  &:active {
    background: rgba(134, 224, 111, 0.7);
  }
`

const CheckCorrect = ({resultRow, increasing}) => {

    const router = useRouter();

    const againHandler = (e) => {
        e.preventDefault();
        router.push('/')
    };

    const [isCorrect, setIsCorrect] = useState(true);

    let prev;

    useEffect(() => {
        resultRow.map((item) => {
            if (prev && prev.value < item.value) {
                setIsCorrect(false);
            }
            prev = item;
        })
    }, [])

    console.log(increasing)
    return (
        <>
            {(!isCorrect && increasing === 'increase') || (isCorrect && increasing === 'decrease') ?
                <WinBg>
                    <WinMenu img={winBgImg.src}>
                        <WinTitle>Победа!</WinTitle>
                        <CongratulationText>Молодец! Ты успешно справился с заданием!</CongratulationText>
                        <AgainButton onClick={againHandler}>Заново</AgainButton>
                    </WinMenu>
                </WinBg>
                :
                <WinBg>
                    <WinMenu maxWidth={'620px'} img={looseBgImg.src}>
                        <WinTitle>Неудача :(</WinTitle>
                        <CongratulationText>Ничего! Попробуй снова!</CongratulationText>
                        <AgainButton onClick={againHandler}>Заново</AgainButton>
                    </WinMenu>
                </WinBg>}
        </>
    );
};

export default CheckCorrect;