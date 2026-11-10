import styled from 'styled-components';

export const SongCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-left: 3px solid
    ${({ theme, $isAdded }) => ($isAdded ? theme.colors.teal : 'transparent')};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1rem 1.25rem;
  flex-wrap: wrap;
`;

export const SongIndex = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.amber};
  width: 1.5rem;
  text-align: right;
  flex-shrink: 0;
`;

export const SongInfo = styled.div`
  flex-grow: 1;
  min-width: 0;
`;

export const SongTitleLink = styled.a`
  text-decoration: none;
`;

export const SongTitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.paper};
  transition: color 0.15s ease;

  ${SongTitleLink}:hover & {
    color: ${({ theme }) => theme.colors.amber};
  }
`;

export const SongArtist = styled.p`
  margin: 0.15rem 0 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.teal};
`;

export const SongAlbum = styled.p`
  margin: 0.1rem 0 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
  font-style: italic;
`;

export const SongDuration = styled.div`
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
  flex-shrink: 0;
`;

/* Botón "Agregar a mi biblioteca": su color depende de la prop $isAdded */
export const AddButton = styled.button`
  flex-shrink: 0;
  border: 1px solid
    ${({ theme, $isAdded }) => ($isAdded ? theme.colors.teal : theme.colors.amber)};
  color: ${({ theme, $isAdded }) => ($isAdded ? theme.colors.teal : theme.colors.amber)};
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  cursor: ${({ $isAdded }) => ($isAdded ? 'default' : 'pointer')};
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: ${({ theme, $isAdded }) =>
      $isAdded ? 'transparent' : theme.colors.amber};
    color: ${({ theme, $isAdded }) => ($isAdded ? theme.colors.teal : theme.colors.ink)};
  }
`;

/* Botón "Eliminar" (solo se muestra en la biblioteca) */
export const RemoveButton = styled.button`
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.ink};
  }
`;
