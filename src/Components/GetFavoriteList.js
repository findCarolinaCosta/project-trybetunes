export default async function getFavoriteList() {
  try {
    const { favorites } = this.state;
    favorites.forEach(({ trackId }) => {
      const favoriteMusic = document.getElementById(trackId);
      if (favoriteMusic) {
        favoriteMusic.checked = 'true';
      }
    });
  } catch (error) { console.log(error); }
}
