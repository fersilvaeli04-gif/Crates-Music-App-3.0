import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: 560px;
  padding: 0 1.5rem;
`;

export const BackLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.teal};
  text-decoration: none;
  font-size: 0.9rem;
  margin: 2.5rem 0 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.amber};
  }
`;

export const DetailCard = styled.section`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1.5rem 1.75rem;
`;

export const DetailRow = styled.p`
  margin: 0.4rem 0;
  color: ${({ theme }) => theme.colors.paper};
  font-size: 0.95rem;

  strong {
    color: ${({ theme }) => theme.colors.teal};
    font-weight: 500;
    margin-right: 0.35rem;
  }
`;
