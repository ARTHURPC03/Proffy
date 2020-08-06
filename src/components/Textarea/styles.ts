import styled from 'styled-components'

export const Container = styled.div``

export const TextAreaBlock = styled.div`
  label {
    color: ${props => props.theme.colors.textInPrimary};
  }

  position: relative;

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${props => props.theme.colors.inputBackground};
    border: 1px solid ${props => props.theme.colors.lineInWhite};
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
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
    bottom: 7px;
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
