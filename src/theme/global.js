import { createGlobalStyle } from 'styled-components';
import { colors } from './styled';

// eslint-disable-next-line
export const GlobalStyle = createGlobalStyle`
  html.unsupported {
    .unsupported-page {
      display: block !important;
    }

    #app {
      display: none;
    }
  }

  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${colors.white};
  }
  
  ul, ol {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: ${colors.black};
  }

  #app {
    -webkit-overflow-scrolling: touch;
  }

  .unsupported-page {
    text-align: center;
    padding: 18px 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;
