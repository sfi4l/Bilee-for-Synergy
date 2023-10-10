import axios from "axios"

const api = axios.create({
  baseURL: "https://bilee.ru/api"
})

export const useApi = () => {
  const get = async path => {
    return await api.get(path)
  }

  const post = async (path, data) => {
    return await api.post(path, data)
  }

  return [get, post]
}