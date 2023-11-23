

import { useEffect, useState } from "react"



export const useFetch=(url,page)=>{

    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const [totalPages,setTotalPages]=useState(0)
    useEffect(() => {
        const getData=async()=>{
          try {
            setLoading(true)
            const response= await fetch(url)
            const res=await response.json()
            setLoading(false)
            setData(res)
            setTotalPages(res.total/10)

          } catch (error) {
            console.log(error)
            setError(error)
          }
        }
        getData()
    }, [page])
  
    return { data, error, loading,totalPages }
  
}