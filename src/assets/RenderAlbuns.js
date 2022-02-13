import React from 'react';
import Cards from '../Components/Cards';

export default function renderAlbuns() {
  const { promiseresolve, albuminfos, artistsearched } = this.state;
  if (promiseresolve && albuminfos.length === 0) {
    return <p>Nenhum álbum foi encontrado</p>;
  }
  if (promiseresolve) {
    return (
      <>
        <h1
          className="font-bold text-2xl p-4"
        >
          {`Resultado de álbuns de: ${artistsearched}`}
        </h1>
        <div className="container-cards w-full">
          {
            albuminfos.map((album) => (
              <Cards key={ album.collectionId } albumObject={ album } />))
          }
        </div>
      </>
    );
  }
}
