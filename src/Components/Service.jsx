import { useEffect, useState } from 'react';
import headerImg from "/element.png";
import ServiceItems from './Shared/ServiceItems';

const Service = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch('service.json'); // Adjust the path if necessary
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMenu(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenuData();
    }, []);

    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

    return (
        <div className='max-w-screen-xl mx-auto py-28'>
            <div className='text-center mx-auto'>
                <img className='mx-auto' src={headerImg} alt="Header Image" />
                <h2 className='font-extrabold text-[48px] text-center mx-auto'>Our Services</h2>
                <p className='font-paprika text-[18px] w-[332px] mt-4 text-center mx-auto'>
                    We have been providing great flooring solutions service.
                </p>
            </div>

            <div className="">
                {menu.length > 0 ? (
                    <div className='flex justify-around'>
                        {menu.map((item, index) => (
                            <div className='flex' key={index}>
                                <ServiceItems 
                                item={item}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No services available.</p>
                )}
            </div>
        </div>
    );
};

export default Service;