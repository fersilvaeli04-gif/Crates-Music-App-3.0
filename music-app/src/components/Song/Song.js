import React from 'react';
import { Link } from 'react-router-dom';
import {
  SongCard,
  SongIndex,
  SongInfo,
  SongTitleLink,
  SongTitle,
  SongArtist,
  SongAlbum,
  SongDuration,
  AddButton,
  RemoveButton,
} from './Song.styles';

function Song({
  id,
  index,
  title,
  artist,
  album,
  duration,
  onAdd,
  onRemove,
  isAdded,
}) {
  return (
    <SongCard $isAdded={isAdded}>
      <SongIndex>{index}</SongIndex>
      <SongInfo>
        <SongTitleLink as={Link} to={`/song/${id}`}>
          <SongTitle>{title}</SongTitle>
        </SongTitleLink>
        <SongArtist>{artist}</SongArtist>
        <SongAlbum>{album}</SongAlbum>
      </SongInfo>
      {duration && <SongDuration>{duration}</SongDuration>}
      {onAdd && (
        <AddButton
          type="button"
          $isAdded={isAdded}
          onClick={isAdded ? undefined : onAdd}
        >
          {isAdded ? 'Agregada ✓' : 'Agregar a mi biblioteca'}
        </AddButton>
      )}
      {onRemove && (
        <RemoveButton type="button" onClick={onRemove}>
          Eliminar
        </RemoveButton>
      )}
    </SongCard>
  );
}

export default Song;
