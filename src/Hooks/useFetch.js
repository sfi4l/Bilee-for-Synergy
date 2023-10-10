import { useEffect } from "react"
import { useApi } from "./useApi"

export const useFetch = (cb) => {
  const [get, post] = useApi()
  useEffect(() => {
    cb(get, post).catch(console.error)
  }, [])
}