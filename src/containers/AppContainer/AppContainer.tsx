import React from 'react';
import styled from 'styled-components';

export const AppContainer: React.FC = ({ children }) => (
  <Container>
    <HeaderContainer />
    <AppWrapper>
      <AsideNavMenu />
      {children}
    </AppWrapper>
  </Container>
);

const Container = styled.div``;

const AppWrapper = styled.div`
  display: flex;
`;

const HeaderContainer = styled.div`
  height: 50px;
  background-color: #f3f6f9;
  border: 1px solid #dedcdc;
`;

const AsideNavMenu = styled.aside`
  width: 50px;
  min-height: calc(100vh - 54px);
  background-color: #f3f6f9;
  border: 1px solid #dedcdc;
`;
