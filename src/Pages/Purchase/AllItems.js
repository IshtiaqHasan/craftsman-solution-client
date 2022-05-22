import React, { useState } from 'react';
import useTools from '../../hooks/useTools';
import AllItem from './AllItem';
import Purchase from './Purchase';

const AllItems = () => {
    const [tools, setTools] = useTools([]);
    const [items, setItems] = useState(null);
    return (
        <div >
            <div class="card-body">
                <h2 className='text-3xl text-center my-12 font-bold'>PURCHASE PRODUCTS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        tools.map(tool => <AllItem
                            key={tool._id}
                            tool={tool}
                            setItems={setItems}
                        ></AllItem>)
                    }

                </div>
                {items && <Purchase
                    items={items}
                    setItems={setItems}
                ></Purchase>}
            </div>
        </div>
    );
};

export default AllItems;