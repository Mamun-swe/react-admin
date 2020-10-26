import React from 'react'
import '../../App.scss'

const Index = ({ message }) => {
    return (
        <div className="loading">
            <div className="flex-center flex-column">
                <div className="loader"></div>
                <h4>{message}</h4>
            </div>
        </div>
    );
};

export default Index;