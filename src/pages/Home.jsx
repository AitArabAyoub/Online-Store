import { Banner } from '@/components/Banner'
import ProductsList from '@/components/ProductsList'
import React from 'react'
function Home() {
    return (
        <div className='container'>
            <Banner/>
            <ProductsList slug='smartphones'/>
            <ProductsList slug='mobile-accessories'/>
            <ProductsList slug='laptops'/>
            <ProductsList slug='tablets'/>
            <ProductsList slug='sunglasses'/>
            <ProductsList slug='sports-accessories'/>
        </div>
    )
}

export default Home