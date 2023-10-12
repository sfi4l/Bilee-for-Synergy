import axios from "axios"
import { setupCache } from "axios-cache-interceptor"

const api = axios.create({
  baseURL: "https://bilee.ru/api"
})

setupCache(api)

export const useApi = (shouldCache) => {
  const get = async (path) => {
    return await api.get(path, { cache: shouldCache ? {} : false })
  }

  const post = async (path, data) => {
    return await api.post(path, { ...data, cache: shouldCache ? {} : false })
  }

  const del = async (path) => {
    return await api.delete(path, { cache: shouldCache ? {} : false })
  }

  return [get, post, del]
}
