import axios from "axios"
import {
  buildKeyGenerator,
  buildMemoryStorage,
  setupCache
} from "axios-cache-interceptor"

const api = axios.create({
  baseURL: "https://bilee.ru/api"
})

const cacheStorage = buildMemoryStorage()
const keyGenerator = buildKeyGenerator((request) => ({
  method: request.method,
  url: request.url
}))

setupCache(api, {
  storage: cacheStorage,
  generateKey: keyGenerator
})

export const useApi = (path, cacheCb) => {
  const get = async () => {
    return await api.get(path, { cache: cacheCb ? {} : false })
  }

  const post = async (data) => {
    data.cache = cacheCb ? {} : false
    return await api.post(path, data)
  }

  const del = async () => {
    return await api.delete(path, { cache: cacheCb ? {} : false })
  }

  cacheStorage.get(keyGenerator({ method: "get", url: path })).then((saved) => {
    cacheCb(saved.state === "cached" ? saved.data.data : null)
  })

  return [get, post, del]
}
