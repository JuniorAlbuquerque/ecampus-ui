import styled from 'styled-components';

import BgUfam from '../../../assets/bg.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
`;

export const Footer = styled.div`
  z-index: 1;
  background: var(--greenDark);

  height: 80px;
`;

export const Ufam = styled.div`
  width: 45%;
  
  background-image: url(${BgUfam});
  background-repeat: no-repeat;
  background-position: center;
`;

export const FormContainer = styled.div`
`;


