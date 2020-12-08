import React from 'react';
import "../Pages.css"

const Global = () => {
    return (
        <div>
            <h1>Global</h1>
            <div className='container'>
                <span className='box1'>
                    <h3>Positif</h3>
                    {/* {positif} */}
                </span>
                <span className='box2'>
                    <h3>Sembuh</h3>
                    {/* {sembuh} */}
                </span>
                <span className='box3'>
                    <h3>Meninggal</h3>
                    {/* {meninggal} */}
                </span>
            </div>
        </div>
    )
}

export default Global
