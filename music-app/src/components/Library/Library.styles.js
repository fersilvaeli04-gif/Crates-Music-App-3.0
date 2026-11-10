import styled from 'styled-components';

export { SongList as LibraryList } from '../../styles/shared';

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
  border: 1px dashed ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1.25rem;
  margin: 0;
`;
