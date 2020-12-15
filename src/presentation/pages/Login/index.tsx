import React from 'react';

import { Wrapper, Footer, Ufam, FormContainer, Header, FormContent } from './styles';

import ufamLogo from '../../../assets/ufam-logo.png';

const Login: React.FC = () => {
  return (
    <Wrapper>
        <Ufam>
          <aside>
            <img src={ufamLogo} alt=""/>
            <h1>UNIVERSIDADE FEDERAL DO AMAZONAS</h1>
            <span>Desde 1909</span>
          </aside>
          <aside>
            <span>CORONA VÍRUS (COVID-19)</span>
          </aside>
        </Ufam>
        <FormContainer>

          <Header>

          </Header>

          <FormContent>

          </FormContent>

          <Footer>
            <nav>
              <ul>
                <li><a href="/">Acesso à informação</a></li>
                <li><a href="/">Simplifique</a></li>
                <li><a href="/">Participe</a></li>
                <li><a href="/">Legislação</a></li>
                <li><a href="/">Canais</a></li>
              </ul>
            </nav>
          </Footer>
        </FormContainer>
    </Wrapper>
  );
}

export default Login;