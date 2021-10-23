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
        <h1>{`Resultado de álbuns de: ${artistsearched}`}</h1>
        <div>
          {
            albuminfos.map((album) => (
              <Cards key={ album.collectionId } albumObject={ album } />))
          }
        </div>
      </>
    );
  }
}
