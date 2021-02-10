import React from 'react'
import styled from 'styled-components'
import Settings from '../Settings'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'

const StyledSwapHeader = styled.div`
  padding: 1.5rem 2rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 420px;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.bg7};
  color: ${({ theme }) => theme.text2};
`
const SwapHighlightHeader = styled.div`
  background-color: ${({ theme }) => theme.bg6};
  padding: 6px 15px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 21.37px;
`

export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <SwapHighlightHeader>
          <TYPE.black fontWeight={500}>Swap</TYPE.black>
        </SwapHighlightHeader>
        <Settings />
      </RowBetween>
    </StyledSwapHeader>
  )
}
