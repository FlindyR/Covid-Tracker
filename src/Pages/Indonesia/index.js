import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Box from '../../Components/Box'

const Indonesia = (p) => {
    const [indo, setIndo] = useState({
        positif: 0,
        sembuh: 0,
        meninggal: 0
    })
    
    useEffect(() => {
			axios
				.get("https://covid19.mathdro.id/api/countries/indonesia")
				.then((resp) => setIndo({
                    positif: resp.data.confirmed.value,
                    sembuh: resp.data.recovered.value,
                    meninggal: resp.data.deaths.value
                }))
    }, [])
    console.log(indo)
    return (
        <>
            <Box 
                title="Indonesia"
                confirm= {indo.positif}
                recover= {indo.sembuh}
                death= {indo.meninggal}
            />
        </>
    )
}

export default Indonesia
