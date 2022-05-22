import React from 'react';
import UseTools from '../../hooks/useTools';
import Upcoming from './Upcoming';

const Upcomings = () => {
    const [tools, setTools] = UseTools([])
    return (
        <div >
            <div class="card-body">
                <h2 className='text-3xl text-center my-12 font-bold'>UPCOMING PRODUCTS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        tools.slice(6, 9).map(tool => <Upcoming
                            key={tool._id}
                            tool={tool}
                        ></Upcoming>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Upcomings;