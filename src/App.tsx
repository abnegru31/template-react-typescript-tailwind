import React from 'react';

// import logo from './logo.svg';

const App: React.FC = () => {
    const test = 'hello';
    console.log(test);
    return (
        <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center max-w-full'>
            <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
                <div 
                    className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'
                >
                </div>
                <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
                    <div className='max-w-md mx-auto'>
                        <div>
                            <img src='https://play.tailwindcss.com//img/logo.svg' className='h-7 sm:h-8' />
                        </div>
                        <div className='divide-y divide-gray-200'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
