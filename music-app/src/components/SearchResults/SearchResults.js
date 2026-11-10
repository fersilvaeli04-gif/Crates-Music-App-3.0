import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Song from '../Song/Song';
import { addSong } from '../../redux/libraryActions';
import { ResultsList } from './SearchResults.styles';

function SearchResults({ songs }) {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library);

  return (
    <ResultsList>
      {songs.map((song, i) => (
        <Song
          key={song.id}
          id={song.id}
          index={i + 1}
          title={song.title}
          artist={song.artist}
          album={song.album}
          isAdded={library.some((s) => s.id === song.id)}
          onAdd={() => dispatch(addSong(song))}
        />
      ))}
    </ResultsList>
  );
}

export default SearchResults;
