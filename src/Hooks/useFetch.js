import { useEffect } from "react"
import { useApi } from "./useApi"

export const useFetch = (cb, shouldCache) => {
  const [get, post, del] = useApi(shouldCache)
  useEffect(() => {
    cb(get, post, del).catch(console.error)
  }, [])
}