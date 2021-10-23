import getMusics from '../services/musicsAPI';

export default async function getSongsListByAlbum(Props) {
  const { id } = Props.match.params;
  const infosSongs = await getMusics(id);
  await this.setState({
    artistName: infosSongs[0].artistName,
    collectionName: infosSongs[0].collectionName,
    infosSongs,
  });
}
