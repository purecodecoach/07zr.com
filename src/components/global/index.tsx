import {createGlobalStyle} from "styled-components";

interface Props {
    theme?: any;
}

const GlobalStyles = createGlobalStyle<Props>`
  body {
    margin: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, span, li, a, div, input, label, button {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 400;
    margin: 0;
    line-height: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: ${props => props.theme.colors.heading};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 14px;
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-size: 48px;
    font-weight: 900;
  }

  h2 {
    font-size: 38px;
    font-weight: 800;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 22px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 14px;
  }
  
  a {
    cursor: pointer;
  }
  
  label {
    display: flex;
    align-items: center;
    grid-gap: 8px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
    color: #8b8b8b;
    cursor: pointer;
  }
  
  input[type='text'], input[type='password'] {
    display: block;
    width: calc(100% - 32px);
    border: ${props => props.theme.borders.thin};
    height: ${props => props.theme.size.input.height};
    padding: 0 12px;
    font-size: 14px;
    transition: all 0.3s;
    font-weight: 600;
    :focus {
      border: ${props => props.theme.borders.active};
      outline: none;
      width: 100%;
      transition: all 0.3s;
    }
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #f9f9f9 inset;
    }
    :not(:placeholder-shown) {
      width: 100%;
    }
  }
  
  textarea {
    display: block;
    width: calc(100% - 32px);
    min-height: 150px;
    border: ${props => props.theme.borders.thin};
    padding: 12px;
    font-size: 14px;
    transition: all 0.3s;
    font-weight: 600;
    :focus {
      border: ${props => props.theme.borders.active};
      outline: none;
      width: 100%;
      transition: all 0.3s;
    }
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #f9f9f9 inset;
    }
    :not(:placeholder-shown) {
      width: 100%;
    }
  }

  //Toast
  .Toastify{
    .Toastify__toast-container{
      z-index: 101;
    }
    .Toastify__toast {
      padding: 8px 16px;
      border-radius: 0;
      box-shadow: none;
      border: 1px solid #000000;
      font-family: 'IBM Plex Mono', monospace;
      display: flex;
      color: #000000;
      button {
        min-width: auto;
      }
    }
  }
  
  //quill
  .ql-container{
    min-height: 300px;
  }
`

export default GlobalStyles