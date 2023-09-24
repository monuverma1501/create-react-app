import React from 'react'
import ContactUs from '../misc/ContactUs'
import NewProducts from '../misc/NewProducts'
import Header from '../misc/Header'

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <NewProducts />
            <ContactUs />
        </React.Fragment>
    )
}

export default Home;
