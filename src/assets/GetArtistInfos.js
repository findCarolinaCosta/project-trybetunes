import searchAlbumsAPI from '../services/searchAlbumsAPI';

async function getArtistInfos(searchValue) {
  const arrayAlbuns = await searchAlbumsAPI(searchValue);
  return arrayAlbuns;
}

export default getArtistInfos;
