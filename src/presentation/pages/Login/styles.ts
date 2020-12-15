import styled from 'styled-components';

import BgUfam from '../../../assets/bg.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
`;

export const Ufam = styled.div`
  width: 80%;

  background-image: url(${BgUfam});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  aside {
    text-align: center;
    margin: 20px;

    h1, span  {
      color: #fff;
      margin-top: 7px;
    }

    h1 {
      font-size: clamp(1em, 1em + 1vw, 1.4em);
    }

    span {
      font-size: clamp(.75em, 1em + 1vw, 1em);
    }
  } 
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div``;

export const FormContent = styled.div`
  flex: 1;
`;

export const Footer = styled.div`
  z-index: 1;
  background: var(--greenDark);

  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  nav ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul li {
    list-style-type: none;
    margin: 20px;
  }

  ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: 300;

    &:hover {
      color: #c7c7c7;
    }
  }
`;


