export const removeFavorites = (id) => {
  const favorites = JSON.parse(localStorage.getItem("itemsLikes"))
  if (favorites.includes(id)) {
    const newFavorites = favorites.filter((item) => item !== id)
    localStorage.setItem("itemsLikes", JSON.stringify(newFavorites))
  }
}
