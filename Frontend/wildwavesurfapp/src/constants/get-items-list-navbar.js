export const getItemsList = (item) => {
  const men = [
    "remera/musculosas",
    "bermudas",
    "pantalones",
    "mochilas",
    "Mochilas / Bolsos / Valijas",
    "Billeteras",
    " Camisas",
    "Accesorios",
    " Jeans",
    " Buzos / Polars",
    "Sweaters",
    "Camperas",
    "Underwear",
    "Boardshorts",
    "Gorros",
    "Gorras / Sombreros",
    "Lycras",
  ]
  const woman = [
    "Remeras / Musculosas",
    "Camisas / Tops",
    "Pantalones",
    "Billeteras",
    "Jeans",
    "Buzos / Polars",
    "Sweaters",
    "Camperas",
    "Polleras / Vestidos",
    "Jumpsuits / Jumpers",
    " Shorts",
    "Bikinis",
    "Mochilas / Bolsos / Valijas",
    "Anteojos",
    "Gorras / Sombreros",
    "Gorros",
    "Accesorios",
    "Lycras",
  ]
  const children = [
    "  Nene",
    " Nena",
    "Mochilas",
    "Baby",
    "Anteojos",
    "Accesorios",
    " Gorras / Sombreros",
    "Gorros",
    "Lycras",
  ]
  const snow = [
    "Hombre",
    "Mujer",
    "Niños",
    "Tablas",
    "Fijaciones",
    "Accesorios",
  ]
  switch (item) {
    case "men":
      return men
    case "woman":
      return woman
    case "children":
      return children
    case "snow":
      return snow
    default:
      return null
  }
}
