import styled from 'styled-components';
import img from '../img/1613224204_78-p-fon-sinii-kosmos-107.jpg'
import Slider from "../components/Slider/Slider";
import {useState} from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import mainBg from '../img/mainBg.svg';

const MenuWrapper = styled.div`
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  height: calc(100% - 60px);
  border-radius: 30px;
  border: 15px solid #121244;
  background-color: white;
  padding: 15px;
`

const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const MenuButton = styled.button`
  cursor: pointer;
  background-color: ${props => props.color || '#dcdc37'};
  border: none;
  outline: none;
  border-radius: ${props => props.borderRadius || '100vw'};
  font-weight: 700;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  margin: ${props => props.margin || '5px'};
  padding: ${props => props.padding || '3px 10px'};

  &:hover {
    opacity: .7;
  }

  &:active {
    opacity: .9;
  }
`

const MenuButtonWrapper = styled.div`
  max-width: 425px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const amountRange = ['2', '3', '4', '5'];
const valuesRange = ['A', '9', '19', '50', '99', '999'];

const Index = () => {

    const [amount, setAmount] = useState('2');
    const [values, setValues] = useState('1');
    const [increasing, setIncreasing] = useState('increase');

    return (
        <MainContainer img={img}>
            <MenuWrapper>
                <Menu>
                    <RowWrapper>
                        <h2 style={{marginBottom: '15px'}}><b>Кол-во предметов</b></h2>
                        <Slider value={amount} setValue={setAmount} range={amountRange} min={'2'} max={'5'}/>
                    </RowWrapper>
                    <RowWrapper>
                        <h2 style={{marginBottom: '15px'}}><b>Значения</b></h2>
                        <Slider value={values} setValue={setValues} range={valuesRange} min={'1'} max={'6'}/>
                    </RowWrapper>
                    <MenuButtonWrapper>
                        <MenuButton disabled={increasing === 'increase'} onClick={() => setIncreasing('increase')}
                                    height={'25px'}>По
                            возрастанию</MenuButton>
                        <MenuButton disabled={increasing === 'decrease'} onClick={() => setIncreasing('decrease')}
                                    height={'25px'}>По
                            убыванию</MenuButton>
                    </MenuButtonWrapper>
                    <Link href={{
                        pathname: '/game',
                        query: {
                            amount,
                            values,
                            increasing
                        }
                    }}>
                        <MenuButton color={'lightgreen'}
                                    height={'30px'}
                                    width={'120px'}
                                    borderRadius={'5px'}>Играть</MenuButton>
                    </Link>
                </Menu>
            </MenuWrapper>
        </MainContainer>
    );
};

export default Index;