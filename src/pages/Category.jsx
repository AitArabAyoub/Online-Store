import Product from '@/components/Product'
import { getCatProds } from '@/components/ProductsList'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {
    const { slug } = useParams()
    const {data,isLoading,error} = useQuery({queryKey  : ['cat',slug],queryFn : ()=>getCatProds(slug)})
    if(isLoading)return <h2>Loading ...</h2>
    if(error)return <h2>{error.message}</h2>
    return (
        <div className='container'>
            <div className='py-10'>
            <h1 className='text-2xl font-bold capitalize'>{slug}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates?</p>
            </div>
            <div className='grid grid-cols-5 gap-5'>
            {
                data.products.map(el=>(
                    <div className='col-span-1'>
                        <Product el={el} />
                    </div>
                ))
            }
            </div>
        </div>
)
}

export default Category