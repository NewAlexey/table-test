import React from 'react';
import styled from 'styled-components';
import { MemoryRouter as BrowserRouter } from 'react-router-dom';

import './app.scss';
import { AppContainer } from './containers/AppContainer';
import { NavigationComponent } from './components/NavigationComponent';
import { AppRouterContent } from './router/Router';
import { CatalogueContextProvider } from './context/CatalogueContext';

const App: React.FC = () => (
  <CatalogueContextProvider>
    <AppContainer>
      <BrowserRouter>
        <AppContent>
          <NavigationComponent />
          <AppRouterContent />
        </AppContent>
      </BrowserRouter>
    </AppContainer>
  </CatalogueContextProvider>
);

export default App;

const AppContent = styled.div`
  width: 90%;
  padding: 50px 20px 20px 50px;
`;
