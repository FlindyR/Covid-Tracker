import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from '../../Components/Table'

const Provinsi = () => {
    const [prov, setProv] = useState([])
    
    useEffect(() => {
			axios
				.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
				.then((resp) => setProv(resp.data.data))
    }, [])
    return (
        <>
            <Table provin= {prov}/>
        </>
    )
}

export default Provinsi
