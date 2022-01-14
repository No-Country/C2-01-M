import axios from "axios"

const axiosHttp = () => {
  const customAxios = async (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
      Authorization: localStorage.getItem("token"),
      _id: localStorage.getItem("id"),
    }

    const controller = new AbortController()
    options.signal = controller.signal

    options.method = options.method || "GET"
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader

    options.body = JSON.stringify(options.body) || false
    if (!options.body) delete options.body

    setTimeout(() => controller.abort(), 4000)

    try {
      const res = await axios(endpoint, options)
      return res.data
    } catch (error) {
      return error
    }
  }
  const get = (url, options = {}) => customAxios(url, options)

  const post = (url, options = {}) => {
    options.method = "POST"
    return customAxios(url, options)
  }

  const del = (url, options = {}) => {
    options.method = "DELETE"
    return customAxios(url, options)
  }

  const pat = (url, options = {}) => {
    options.method = "PATCH"

    return customAxios(url, options)
  }
  return {
    post,
    get,
    del,
    pat,
  }
}

export default axiosHttp
