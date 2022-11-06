import React from 'react';
import Image from "next/image";
import styled from "styled-components";

const MainPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  overflow: hidden;
`

const ImgWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`

const MainContainer = ({children, img}) => {
    return (
        <>
            <MainPage>
                <ImgWrapper>
                    <Image
                        alt="travel"
                        src={img}
                        quality={100}
                        fill
                    />
                </ImgWrapper>
                {children}
            </MainPage>
        </>
    );
};

export default MainContainer;