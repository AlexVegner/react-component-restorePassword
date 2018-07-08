import React from 'react'
import styled from "styled-components"

export const FullHeight = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  height: 100% !important;
  width: 100% !important;
`

export const CenterInside = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width:80%;
`

const CenterWidget = ({children}) => {
  return (
    <FullHeight>
      <CenterInside>
        {children}
      </CenterInside>
    </FullHeight>
  );
}

export default CenterWidget