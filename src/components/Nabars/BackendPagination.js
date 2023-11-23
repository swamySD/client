import React,{useState} from 'react'
import { useFetch } from '../apis/CustomHook'
import classes from './Pagination.module.css'

const PaginationB = () => {
    const [page,setPage]=useState(1)
    const { data, totalPages,loading, error, fetchData }=useFetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`,page)
    
    
    // console.log(data)
    
    const selectedPageHandler=(selectedPage)=>{
      if(selectedPage >=1 && selectedPage<=totalPages && selectedPage!==page)
      setPage(selectedPage)
    
      // console.log(selectedPage)
    }


  return (
    <div className={classes['products-container']}>
    
        <ul className={classes.ul}>
         {
        data?.products?.map((product,index)=>{
                return(
                    <div className={classes.products} key={product.id}>
                      <img  className={classes['product-image']} src={product.thumbnail} alt={product.title} />
                      <span>{product.title}</span>
                    </div>
                )
            })
         }
        </ul>
        {data?.products?.length>0&&
        <div className={classes.pagination}>
        <span onClick={()=>selectedPageHandler(page-1)}
        className={`${page>1?"":classes.disabled}`}
        >◀</span>
        {
          [...Array(totalPages)].map((_,i)=>{
          return <span className={`${page === i + 1 ? classes.selected : ''}`} onClick={()=>selectedPageHandler(i+1)} key={i}>{i+1}</span>})
        }
        <span onClick={()=>selectedPageHandler(page+1)}
        className={`${page<totalPages?"":classes.disabled}`}
        >▶</span>
          
        </div>
        }
    </div>
  )
}

export default PaginationB