import { men, woman, children, snow } from "./get-options-list"

export const getItemsList = (item) => {
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
