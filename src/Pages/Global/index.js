import React, {useEffect, useState} from 'react';
import "../Pages.css"
import axios from "axios"
import NumberFormat from 'react-number-format';

const Global = () => {
    const [dunia, setDunia] = useState({
        Positif: 0,
        Sembuh: 0,
        Meninggal: 0
    })
    
    useEffect(() => {
			axios
				.get("https://covid19.mathdro.id/api")
				.then((resp) => setDunia({
                    Positif: resp.data.confirmed.value,
                    Sembuh: resp.data.recovered.value,
                    Meninggal: resp.data.deaths.value
                }))
    }, [])
    return (
      <div>
            <h1>Global</h1>
            <div className='container'>
                <span className='box'>
                    <h2 style={{color: 'yellow'}}>Positif</h2>
                    <NumberFormat value={dunia.Positif} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{color: 'yellow'}}>{value}</div>} />
                </span>
                <span className='box'>
                    <h2 style={{color: 'greenyellow'}}>Sembuh</h2>
                    <NumberFormat value={dunia.Sembuh} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{color: 'greenyellow'}}>{value}</div>} />
                </span>
                <span className='box'>
                    <h2 style={{color: 'red'}}>Meninggal</h2>
                    <NumberFormat value={dunia.Meninggal} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{color: 'red'}}>{value}</div>} />
                </span>
            </div>
        </div>
    )
}

export default Global
