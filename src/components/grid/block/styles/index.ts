import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
  puzzle?: boolean
}

export const Container = styled.div<IProps>`
  ${({ active, puzzle, theme }) => css`
    align-items: center;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    color: ${puzzle ? theme.colors.black : theme.colors.purple};
    cursor: pointer;
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    font-size: 20px;
    font-weight: bold;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      content: '';
      float: left;
      padding-top: 100%;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
