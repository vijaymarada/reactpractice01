import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [

    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'userId',
        headerName: 'USER ID',
        width: 150,
        editable: true,
    },
    {
        field: 'title',
        headerName: 'TITLE',
        width: 500
    },
    {
        field: 'completed',
        headerName: 'COMPLETED',
        type: 'boolean',
        width: 110
    },
];


class TableMaterialUI extends React.Component {

    render() {
        return (
            <div style={{ height: 400, width: '300%' }}>
                <DataGrid
                    rows={this.props.tabledata}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
        );
    }

}

export default TableMaterialUI;