export default function getFavoriteList() {
  const { favorites } = this.state;
  favorites.forEach(({ trackId }) => {
    const favoriteMusic = document.getElementById(`checkbox-music-${trackId}`);
    if (favoriteMusic) {
      favoriteMusic.checked = true;
    }
  });
}
