import React, {useEffect, useState} from 'react';
import axios from "axios"
import Box from '../../Components/Box';

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
        <>
            <Box
                title= "Global"
                confirm= {dunia.Positif}
                recover= {dunia.Sembuh}
                death= {dunia.Meninggal}
            />
        </>
    )
}

export default Global
