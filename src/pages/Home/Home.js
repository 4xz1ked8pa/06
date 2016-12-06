import React, {createClass} from 'react';
import './Home.css';

import Navigation from '../../components/Navigation/Navigation';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

const Home = createClass({
    render() {
        return (
            <div className='home'>
                <Navigation />
                <Banner />
                <Footer />
            </div>
        );
    }
});

export default Home;