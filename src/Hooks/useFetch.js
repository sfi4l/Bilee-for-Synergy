import { useEffect } from "react"
import { useApi } from "./useApi"

export const useFetch = (path, cb, cacheCb) => {
  const [get, post, del] = useApi(path, cacheCb)
  useEffect(() => {
    cb(get, post, del).catch(console.error)
  }, [])
}