import Product from '@/components/Product'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
const getSearchItems = async(input)=>{
    const req = await fetch(`https://dummyjson.com/products/search?q=${input}`)
    return req.json()
}
function Search() {
    const [searchParams,setSearchParams] = useSearchParams()
    const query = searchParams.get('query')
    const {data,isLoading,error} = useQuery({queryKey : ['search',query],queryFn : ()=>getSearchItems(query)})
    if(isLoading) return <h2>Loading ...</h2>
    if(error) return <h2>{error.message}</h2>
    return (
        <div className='container'>
            <div className='py-5 border-b border-[#d6d6d6d5]'>
                <h1 className='text-2xl'>Results For : {query}</h1>
            </div>
            <div className='grid grid-cols-5 gap-5 pt-5'>
                {
                    data && data.products.map(el=>(
                        <div className='col-span-1'>
                            <Product el={el}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search