import axiosHttp from "../../helpers/axiosHTTP"

const getComments = async () => {
  try {
    let api = axiosHttp()
    const url = await `${process.env.REACT_APP_SERVER_URI}/comments`

    return await api.get(url)
  } catch (error) {
    console.log(error)
  }
}

export default getComments
