import React from 'react';
import styled from 'styled-components';

import { APP_ROUTER, CustomLink } from '../../router/Router';

export const NavigationComponent: React.FC = () => {
  return (
    <Container>
      <Ul>
        {APP_ROUTER.map(
          ({ path, title }) =>
            title && (
              <Li key={path}>
                <CustomLink to={path}>{title}</CustomLink>
              </Li>
            ),
        )}
      </Ul>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li`
  &:hover {
    a {
      color: #ec6409 !important;
    }
  }

  a,
  a:active,
  a:hover {
    text-decoration: none;
  }
`;
