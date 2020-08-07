import styled from 'styled-components'

export const Container = styled.div``

export const SelectBlock = styled.div`
  label {
    color: ${props => props.theme.colors.textInPrimary};
  }

  position: relative;

  label {
    font-size: 1.4rem;
  }

  select {
    color: ${props => props.theme.colors.textTitle};
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${props => props.theme.colors.inputBackground};
    border: 1px solid ${props => props.theme.colors.lineInWhite};
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${props => props.theme.colors.primaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  & + & {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    & + & {
      margin-top: 0;
    }
  }
`
