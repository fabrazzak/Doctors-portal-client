import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="w-24 h-24 border-t-8 border-b-4 border-secondary rounded-full animate-spin text-center flex justify-center items-center">Loading...</div>
            </div>
        </div>
    );
};

export default Loading;