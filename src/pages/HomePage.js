import React, { useContext, useEffect} from 'react'
import { ShopContext } from '../context/shop.Context'

import '../css/homepage.css'
import '../css/layout.css'


import Benefits from '../components/Benefits'
import Hook from '../components/Hook'
import Banner from '../components/Banner'
import Contact from '../components/Contact'


const HomePage = () => {


    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {

        };
    }, [fetchAllProducts])


    if(!products) return <div>Loading</div>
    return (

        <div className="container" style={{
            padding: "0",
            margin: "0",
            overflow: "hidden"
        }} >
            <Banner />
            <Hook />
            <Benefits />
            <Contact />
        </div>
    )
}

export default HomePage
