import React from 'react';
import { HeaderWrapper, HeaderInner, Mark, Title, Subtitle } from './Header.styles';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Mark>/// </Mark>
        <Title>Crates</Title>
        <Subtitle>tu colección de canciones favoritas</Subtitle>
      </HeaderInner>
    </HeaderWrapper>
  );
}

export default Header;
