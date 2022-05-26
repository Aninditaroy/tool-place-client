import React from 'react';
import divider from '../../Assets/separator.png';
import useTools from './../../hooks/useTools';
import Tools from './Tools';
const ToolsCard = () => {
    const [tools] = useTools();
    return (
        <div>
            <div class="relative min-h-screen flex flex-col items-center justify-center ">
                <h2 class="text-4xl font-bold sm:text-6xl mt-10">
                    Tools
                </h2>
                <img src={divider} alt="" className='mb-10 w-40' />
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 mb-20 md:gap-3 sm:gap-y-3'>
                    {
                        tools.map(tool => <Tools
                            key={tool._id}
                            tool={tool} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default ToolsCard;