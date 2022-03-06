import React, { useContext } from 'react';
import { AlbumContext } from '../context/album';
import Cards from './Cards';

export default function RenderAlbuns() {
  const { searchValue, promiseResolve, albumList } = useContext(AlbumContext);
  if (promiseResolve && albumList.length === 0) {
    return <p>Nenhum álbum foi encontrado</p>;
  }
  if (promiseResolve) {
    return (
      <>
        <h1
          className="font-bold text-2xl p-4"
        >
          {`Resultado de álbuns de: ${searchValue}`}
        </h1>
        <div className="container-cards w-full">
          {
            albumList.map((album) => (
              <Cards key={ album.collectionId } albumObject={ album } />))
          }
        </div>
      </>
    );
  }
  return null;
}
