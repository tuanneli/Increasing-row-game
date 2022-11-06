import {CustomLabel, RangeElement, SliderBox} from "./SliderStyles";
import styled from "styled-components";
import {useState} from "react";

const InputRange = styled.input`
  &[type=range] {
    -webkit-appearance: none;
    width: 100%;
    cursor: pointer;
    background-color: yellow;
    border-radius: 100vw;
  }

  &[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: blue;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  &[type=range]:focus {
    outline: none;
  }

  &[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`

const Slider = ({value, setValue, range, min, max}) => {
    return (
        <SliderBox>
            <CustomLabel>
                {range.map((item) => {
                    return <RangeElement key={item}>
                        {item}
                    </RangeElement>
                })}
            </CustomLabel>
            <InputRange type="range" min={min} max={max} value={value} onChange={(e) => setValue(e.target.value)}
                        className={'slider'}/>
        </SliderBox>
    );
};

export default Slider;