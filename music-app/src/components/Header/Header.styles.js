import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  padding: 3.5rem 1.5rem 2.5rem;
  display: flex;
  justify-content: center;
`;

export const HeaderInner = styled.div`
  max-width: 560px;
  width: 100%;
`;

export const Mark = styled.span`
  color: ${({ theme }) => theme.colors.amber};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.85rem;
  letter-spacing: 0.15em;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 600;
  font-size: 3rem;
  margin: 0.25rem 0 0.4rem;
  color: ${({ theme }) => theme.colors.paper};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.25rem;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.teal};
  font-size: 1rem;
`;
