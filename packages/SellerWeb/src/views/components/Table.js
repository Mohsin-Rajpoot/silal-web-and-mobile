import React from 'react'
import DataTable from 'react-data-table-component'

const Table = ({ cols, rows }) => {

    const customStyles = {
        headCells: {
            style: {
                fontSize: "13px",
                fontWeight: 700
            },
        }
    }

    return (

        <DataTable
            columns={cols}
            data={rows}
            customStyles={customStyles}
            pagination
            selectableRows
        />

    )

}

export default Table