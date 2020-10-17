import { useState, useEffect } from "react"
import API_KEY from "./keys"

const CONTEXT_KEY = "PASTE YOUR CONTEXT KEY HERE"

const useGoogleSearch = (query) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`
      )
        .then((res) => res.json())
        .then((response) => setData(response))
    }
    fetchData()
  }, [query])

  return { data }
}

export default useGoogleSearch
