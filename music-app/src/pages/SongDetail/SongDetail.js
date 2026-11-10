import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {
  SectionTitle,
  StatusMessage,
  StatusError,
  RetryButton,
} from '../../styles/shared';
import { Main, BackLink, DetailCard, DetailRow } from './SongDetail.styles';
import { AUDIODB_BASE_URL } from '../../config';

const buildAlbumUrl = (id) =>
  `${AUDIODB_BASE_URL}/album.php?m=${id}`;

function SongDetail() {
  const { id } = useParams();
  const { data, loading, error, retry } = useFetch(buildAlbumUrl(id));

  const album = data && data.album && data.album[0];

  return (
    <Main>
      <BackLink as={Link} to="/">
        &larr; Volver a la búsqueda
      </BackLink>

      {loading && <StatusMessage>Cargando...</StatusMessage>}

      {error && (
        <StatusError>
          <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          <RetryButton onClick={retry}>Reintentar</RetryButton>
        </StatusError>
      )}

      {!loading && !error && !album && (
        <StatusMessage>
          No se encontró información para esta canción.
        </StatusMessage>
      )}

      {!loading && !error && album && (
        <DetailCard>
          <SectionTitle>{album.strAlbum}</SectionTitle>
          <DetailRow>
            <strong>Artista:</strong> {album.strArtist}
          </DetailRow>
          <DetailRow>
            <strong>Álbum:</strong> {album.strAlbum}
          </DetailRow>
          {album.intYearReleased && (
            <DetailRow>
              <strong>Año de lanzamiento:</strong> {album.intYearReleased}
            </DetailRow>
          )}
          {album.strGenre && (
            <DetailRow>
              <strong>Género:</strong> {album.strGenre}
            </DetailRow>
          )}
        </DetailCard>
      )}
    </Main>
  );
}

export default SongDetail;
