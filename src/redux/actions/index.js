import getMusics from '../../services/musicsAPI';

export const GET_USER = 'GET_USER';
export const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';
export const GET_INFOS_SONGS = 'GET_INFO_SONGS';

export const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

export const getSearchValue = (payload) => ({
  type: GET_SEARCH_VALUE,
  payload,
});

export const getAlbumInfo = (payload) => ({
  type: GET_INFOS_SONGS,
  payload,
});

export const getSongInfo = (id) => async (dispatch) => {
  try {
    const response = await getMusics(id);
    const payload = {
      name: response[0].collectionName,
      songInfos: response,
    };
    dispatch(getSearchValue({ artist: response[0].artistName }));
    dispatch(getAlbumInfo(payload));
  } catch (error) {
    console.log(error);
  }
};
