import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;

  width: 100vw;
  height: 100vh;

  main {
    background: ${props => props.theme.colors.boxBase};
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    fieldset {
      border: 0;
      padding: 0 2.4rem;
    }

    fieldset + fieldset {
      margin-top: 6.4rem;
    }

    fieldset legend {
      font: 700 2.4rem Archivo;
      color: ${props => props.theme.colors.textTitle};
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid ${props => props.theme.colors.lineInWhite};
    }

    label {
      color: ${props => props.theme.colors.textComplement};
    }

    footer {
      padding: 4rem 2.4rem;
      background: ${props => props.theme.colors.boxFooter};
      border-top: 1px solid ${props => props.theme.colors.lineInWhite};
      margin-top: 6.4rem;
    }

    footer p {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${props => props.theme.colors.textComplement};
    }

    footer p img {
      margin-right: 2rem;
    }

    footer button {
      width: 100%;
      height: 5.6rem;
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.buttonText};
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.6rem Archivo;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.2s;
      margin-top: 3.2rem;
    }

    footer button:hover {
      background: ${props => props.theme.colors.secondaryDark};
    }
  }

  @media (min-width: 700px) {
    max-width: 100vh;

    main fieldset {
      padding: 0 6.4rem;
    }

    main footer {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    main footer p {
      justify-content: space-between;
    }
  }
`

export const HeaderContent = styled.div`
  margin-bottom: 6.4rem;
`
