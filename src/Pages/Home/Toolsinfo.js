import React, { useState } from 'react';
import useTools from '../../hooks/useTools'
import Purchase from '../Purchase/Purchase';
import ToolInfo from './ToolInfo';

const Toolsinfo = () => {
    const [tools, setTools] = useTools([]);

    return (
        <div >
            <div className="card-body">
                <h2 className='text-3xl text-center my-12 font-bold'>FEATURED PRODUCTS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        tools.slice(0, 6).map(tool => <ToolInfo
                            key={tool._id}
                            tool={tool}
                        ></ToolInfo>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Toolsinfo;