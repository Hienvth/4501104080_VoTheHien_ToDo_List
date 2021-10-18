import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../css/todo.css'
import moment from 'moment'
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';


// Arrow Function components
export const ToDoList = () => {
    const { data, setData, name, setName, deadline, setDeadline} = useContext(TodoContext)
    const handleClick = (e) => {
        e.preventDefault();
        const newItem = {
            id: data.length + 1,
            name: name,
            deadline: deadline,
            isCompleted: false
        };
    
        setData([...data, newItem]);
        setName('');
        setDeadline('');
    }
    const columns = [
        {title: "Activity Name", field:"name"},
        {title:"Deadline", field:"deadline"},
        {title:"Status", field:"isCompleted"}
    ]

    return (
        <div className="main">
            <h2>TODO LIST</h2>
             <div className="container">
             <table className="tbtodo" >
                <tbody>
                    <tr className="m">
                        <td>Name:</td>
                        <td>
                        <input value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Deadline:</td>
                        <td>
                            <input type="date"  value={deadline} onChange={(e) => {
                                setDeadline(e.target.value);
                            }} />
                        </td>
                    </tr>
                     
                            
            
                </tbody>
             </table>
             <button className="r" onClick={handleClick}><b>Add</b></button>
             </div>
             <br />
            {data.map((item) => {
                //process js

                return (
                    <div key={item.id}>
                        {item.name} --- {moment(item.deadline).format('DD/MM/yyyy')} : { item.isCompleted ? 'DONE' : 'INPROGRESS'}
                    </div>
                )
            })}

<MaterialTable columns={columns} data={data}
            editable={{
                onRowAdd: (newRow) => new Promise((resolve, reject) => {
                    setData([...data, newRow])

                    setTimeout(() => resolve(), 500)
                }),
                onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                    const updatedData = [...data]
                    updatedData[oldRow.data.id] = newRow
                    setData(updatedData)
                    setTimeout(() => resolve(), 500)
                }),
                onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                    const updatedData = [...data]
                    updatedData.splice(selectedRow.data.id, 1)
                    setData(...updatedData)
                    setTimeout(() => resolve(), 1000)

                })
            }}
            actions={[
                {
                    icon: () => <GetAppIcon />,
                    tooltip: "Click me",
                    onClick: (e, data) => console.log(data),
                    // isFreeAction:true
                }
            ]}
            onSelectionChange={(selectedRows) => console.log(selectedRows)}
            options={{
                sorting: true,
                search: true,
                searchFieldAlignment: "right", 
                searchAutoFocus: true, 
                searchFieldVariant: "standard",
                filtering: true, 
                paging: true, 
                pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], 
                pageSize: 5,
                paginationType: "stepped", 
                showFirstLastPageButtons: false, 
                paginationPosition: "both", 
                exportButton: true,
                exportAllData: true, 
                exportFileName: "TableData", 
                addRowPosition: "first", 
                actionsColumnIndex: -1, 
                selection: true,
                showSelectAllCheckbox: false, 
                showTextRowsSelected: false, 
                selectionProps: rowData => ({
                    disabled: rowData.age == null,
                    // color:"primary"
                }),
                grouping: true, 
                columnsButton: true,
                rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                headerStyle: { background: "#f44336", color: "#fff" }
            }}
            title="Table Todo List"
            icons={{ Add: () => <AddIcon />,
                   
            }} />

        </div>
    )
};