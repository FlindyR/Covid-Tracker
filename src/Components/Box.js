import React from 'react'
import "../Components/component.css"
import NumberFormat from 'react-number-format'

const Box = ({title, confirm, recover, death}) => {
    
    return (
        <div className='body'>
            <h1 style={{paddingLeft: "1em"}}>{title}</h1>
            <div className='container'>
                <span className='box'>
                    <h2 style={{color: 'yellow'}}>Positif</h2>
                    <NumberFormat value={confirm} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{color: 'yellow'}}>{value}</div>} />
                </span>
                <span className='box'>
                    <h2 style={{color: 'greenyellow'}}>Sembuh</h2>
                    <NumberFormat value={recover} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{color: 'greenyellow'}}>{value}</div>} />
                </span>
                <span className='box'>
                    <h2 style={{color: 'red'}}>Meninggal</h2>
                    <NumberFormat value={death} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{color: 'red'}}>{value}</div>} />
                </span>
            </div>
        </div>
    )
}

export default Box;
