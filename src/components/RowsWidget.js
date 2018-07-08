import React from 'react'
import styled from "styled-components"

export const Rows = styled.section`
  display: flex;
  flex-direction: column;
`

const RowsWidget = ({children}) => {
  return (
    <Rows>
      {children}
    </Rows>
  );
}

export default RowsWidget