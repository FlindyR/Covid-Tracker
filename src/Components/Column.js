import NumberFormat from "react-number-format"

export const Columns = [
    {
        Header: "Provinsi",
        accessor: "provinsi"
    },
    {
        Header: "Positif",
        accessor: "kasusPosi",
        Cell: item => { 
            return <NumberFormat value={item.value}
                displayType={'text'} thousandSeparator={true}
                renderText={value => <div>{value}</div>} />
            }
    },
    {
        Header: "Sembuh",
        accessor: "kasusSemb",
        Cell: item => { 
            return <NumberFormat value={item.value}
                displayType={'text'} thousandSeparator={true}
                renderText={value => <div>{value}</div>} />
            }
    },
    {
        Header: "Meninggal",
        accessor: "kasusMeni",
        // Cell: item => { 
        //     return <NumberFormat value={item.value}
        //         displayType={'text'} thousandSeparator={true}
        //         renderText={value => <div>{value}</div>} />
        //     }
    },
]