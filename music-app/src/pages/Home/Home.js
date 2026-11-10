import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import Library from '../../components/Library/Library';
import useFetch from '../../hooks/useFetch';
import {
  SongSection,
  SectionTitle,
  StatusMessage,
  StatusError,
  RetryButton,
} from '../../styles/shared';
import { Main } from './Home.styles';
import { AUDIODB_BASE_URL } from '../../config';

const buildSearchUrl = (artistName) =>
  `${AUDIODB_BASE_URL}/searchalbum.php?s=${encodeURIComponent(artistName)}`;

function Home() {
  const [artistQuery, setArtistQuery] = useState('');

  const url = artistQuery ? buildSearchUrl(artistQuery) : null;
  const { data, loading, error, retry } = useFetch(url);

  // Transformamos los álbumes de la API en objetos "canción"
  const songs =
    data && data.album
      ? data.album.map((album) => ({
          id: album.idAlbum,
          title: album.strAlbum,
          artist: album.strArtist,
          album: album.strAlbum,
        }))
      : [];

  return (
    <Main>
      <SongSection>
        <SectionTitle>Buscar canciones</SectionTitle>
        <SearchBar onSearch={setArtistQuery} />

        {!artistQuery && (
          <StatusMessage>
            Busca un artista para ver sus álbumes, por ejemplo "Coldplay" u
            "Oasis".
          </StatusMessage>
        )}

        {loading && <StatusMessage>Cargando...</StatusMessage>}

        {error && (
          <StatusError>
            <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
            <RetryButton onClick={retry}>Reintentar</RetryButton>
          </StatusError>
        )}

        {!loading && !error && artistQuery && songs.length === 0 && (
          <StatusMessage>
            No se encontraron resultados para "{artistQuery}".
          </StatusMessage>
        )}

        {!loading && !error && songs.length > 0 && (
          <SearchResults songs={songs} />
        )}
      </SongSection>

      <Library />
    </Main>
  );
}

export default Home;
