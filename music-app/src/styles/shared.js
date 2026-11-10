import styled from 'styled-components';

export const SongSection = styled.section`
  padding-top: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 600;
  font-size: 1.35rem;
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.paper};
`;

export const SongList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StatusMessage = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
  margin: 0 0 1rem;
`;

export const StatusError = styled.div`
  color: ${({ theme }) => theme.colors.error};
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
  margin-bottom: 1rem;

  p {
    margin: 0;
  }
`;

export const RetryButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.ink};
  }
`;
