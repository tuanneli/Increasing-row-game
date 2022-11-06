import React, {useEffect, useState} from 'react';
import img from "../img/1620189167_33-phonoteka_org-p-fon-pustinya-dlya-detei-38.jpg";
import MainContainer from "../components/MainContainer";
import styled from "styled-components";
import {ParseRow} from "../components/ParseRow";
import corn from '../img/corn.svg'
import burger from '../img/burger.svg'
import star from '../img/start.svg'
import babel from '../img/babel.svg'
import Image from "next/image";
import back1 from '../img/back1.svg'
import arrowRight from '../img/arrowRight.svg'
import arrowLeft from '../img/arrowLeft.svg'
import winBgImg from '../img/winBg.svg'
import {useNavigate} from "react-router-dom";
import {useRouter} from "next/router";
import CheckCorrect from "../components/CheckCorrect";

const PlayGround = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  border-radius: 15px;
  background-image: url(${back1.src});
  background-size: cover;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: start;
`

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  max-width: 886px;
  width: 100%;
  height: 100%;
`

const Item = styled.div`
  max-width: 120px;
  max-height: 120px;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transform: translate(0, 0);
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 1000;
  font-size: 56px;
  line-height: 68px;
  letter-spacing: 2px;
  -webkit-text-stroke: 3px #242546;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 131px;
  height: 131px;

  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
`

const Increasing = styled.div`
  display: flex;
  position: absolute;
  bottom: 280px;
  max-width: 846px;
  width: 100%;
  justify-content: ${props => props.justifyContent || 'start'};
  align-items: center;
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 1000;
  font-size: 36px;
  line-height: 68px;
  letter-spacing: 2px;
  -webkit-text-stroke: 2px #242546;
  color: white;
`

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  max-width: 886px;
  max-height: 222px;
  width: 100%;
  height: 100%;
  background: radial-gradient(238.96% 238.96% at 50% 54.28%, #FAF9F9 0%, #C09F9B 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  bottom: 30px;
`

const Game = ({amount, values, increasing}) => {
    const [amountRow, setAmountRow] = useState([])
    const [resultRow, setResultRow] = useState([])
    const images = [corn, star, babel, burger];

    useEffect(() => {
        setAmountRow(ParseRow(values, amount, images));
        setResultRow([]);
        for (let i = 1; i <= amount; i++) {
            setResultRow(prev => [...prev, {id: i, value: ""}])
        }
    }, [])

    const [currentItem, setCurrentItem] = useState();

    const dragOverHandler = (e) => {
        e.preventDefault();
    }

    const dragStartHandler = (e, item) => {
        setCurrentItem(item);
    }

    const dropHandler = (e, item) => {
        e.preventDefault()
        if (item.value === '') {
            setResultRow(resultRow.map(i => {
                if (i.id === item.id) {
                    return {...i, value: currentItem.value}
                }
                return i
            }));
            setAmountRow(amountRow.filter(i => i.id !== currentItem.id))
            e.target.style.backgroundImage = `url(${currentItem.image.src})`;
        }
    }

    return (
        <MainContainer img={img}>
            <PlayGround>
                <ItemWrapper>
                    {amountRow?.map((item) => {
                        return <Item color={'red'}
                                     style={item.id % 2 === 0 ? {marginTop: '100px'} : {marginBottom: '100px'}}
                                     img={item.image.src}
                                     draggable={true}
                                     onDragStart={(e) => dragStartHandler(e, item)}
                                     key={item.id}>
                            {item.value}
                        </Item>
                    })}
                </ItemWrapper>
                {increasing === 'increase'
                    ?
                    <Increasing>
                        По возрастанию<Image draggable={false} src={arrowRight} alt={'arrowRight'}/>
                    </Increasing>
                    :
                    <Increasing justifyContent={'end'}>
                        <Image draggable={false} src={arrowLeft} alt={'arrowLeft'}/>
                        <div>По убыванию</div>
                    </Increasing>}

                <BoxWrapper>
                    {resultRow.map((item) => {
                        return <Box key={item.id}>
                            <Item onDragOver={dragOverHandler}
                                  onDrop={(e) => dropHandler(e, item)}>
                                {item.value}
                            </Item>
                        </Box>
                    })}
                </BoxWrapper>
            </PlayGround>
            {!resultRow.find(item => item.value === "") &&
                <CheckCorrect resultRow={resultRow} increasing={increasing}/>}
        </MainContainer>
    );
};


export const getServerSideProps = (context) => {
    console.log(context.query)
    return {
        props: {
            amount: context.query.amount,
            values: context.query.values,
            increasing: context.query.increasing,
        }
    }
}

export default Game;