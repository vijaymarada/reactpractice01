import React from 'react';


class ImportDataToTable extends React.Component {
    render() {
        // if (this.props.tableView === 'false') {
        //     return (<></>)
        // }
        if (this.props.restData.length === 0) {  //Both the ways we can do.
            //debugger;
            return (<></>)
        }
        return (
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Completed</th>

                    </tr>

                </thead>
                {this.props.restData.map(row => (<tr>
                    <td>{row.id}</td>
                    <td>{row.userId}</td>
                    <td>{row.title}</td>
                    <td>{row.completed ? "true" : "false"}</td>
                </tr>
                ))}
            </table>
        );
    }

}
export default ImportDataToTable;

