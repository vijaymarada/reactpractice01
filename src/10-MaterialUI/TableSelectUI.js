import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const todoscolumns = [
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
        width: 600
    },
    {
        field: 'completed',
        headerName: 'COMPLETED',
        type: 'boolean',
        width: 110
    },
];

const commentcolumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'postId',
        headerName: 'POST ID',
        width: 150,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'NAME',
        width: 150
    },
    {
        field: 'email',
        headerName: 'email',
        width: 110
    },
    {
        field: 'body',
        headerName: 'body',
        width: 400
    },
];
class TableSelectUI extends React.Component {
    render() {
        if (this.props.type === 'todos')
            return (
                <div style={{ height: 400, width: '300%' }}>
                    <DataGrid
                        rows={this.props.tabledata}
                        columns={todoscolumns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                    />
                </div>
            );
        else
            return (
                <div style={{ height: 400, width: '300%' }}>
                    <DataGrid
                        rows={this.props.tabledata}
                        columns={commentcolumns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                    />
                </div>
            );
    }

}

export default TableSelectUI