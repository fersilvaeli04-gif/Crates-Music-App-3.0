import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Song from '../Song/Song';
import { removeSong } from '../../redux/libraryActions';
import { SongSection, SectionTitle } from '../../styles/shared';
import { LibraryList, EmptyMessage } from './Library.styles';

function Library() {
  const songs = useSelector((state) => state.library);
  const dispatch = useDispatch();

  return (
    <SongSection>
      <SectionTitle>Mi biblioteca</SectionTitle>
      {songs.length === 0 ? (
        <EmptyMessage>
          Todavía no has agregado canciones. Búscalas arriba y añádelas aquí.
        </EmptyMessage>
      ) : (
        <LibraryList>
          {songs.map((song, i) => (
            <Song
              key={song.id}
              id={song.id}
              index={i + 1}
              title={song.title}
              artist={song.artist}
              album={song.album}
              isAdded
              onRemove={() => dispatch(removeSong(song.id))}
            />
          ))}
        </LibraryList>
      )}
    </SongSection>
  );
}

export default Library;
