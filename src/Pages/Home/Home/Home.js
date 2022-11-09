import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexs/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';


const Home = () => {
    const {loading} = useContext(AuthContext);
    const services = useLoaderData();

    // added route title
    useTitle('Home');

    if(loading){
        return <button className="btn btn-square loading"></button>
    }


    return (
        <div className='container mx-auto my-20'>
            <div>
                <Banner></Banner>
            </div>
            
            {/* services section */}
            <div className='my-20'>
                <h2 className='text-3xl font-bold pb-5'>Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service = {service}
                        ></Service>)
                    }
                </div>
                <Link to='/services'><button className='btn btn-primary mt-12'>Views All</button></Link>
            </div>

            <div className='mb-20'>
                <About></About>
            </div>
        </div>
    );
};

export default Home;