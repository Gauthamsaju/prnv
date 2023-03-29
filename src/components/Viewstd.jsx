import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import axios from 'axios'
import Add from './Add'


const Viewstd = () => {
    var [students, setStudents] = useState([])
    var [update, setUpdate] = useState(false)
    var [selected,setSelected]=useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                setStudents(students = response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    const deleteValues = (id) => {
        axios.delete(" http://localhost:3005/students/" + id)
            .then(response => {
                alert('deleted')
                window.location.reload(false)
            })
            .catch(err => console.log(err))
    }


    const Updatevalue =(value)=>{
        setSelected(value);
        setUpdate(true);
    }

    var Finaljsx=  <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>
                    ID
                </TableCell>
                <TableCell>
                    NAME
                </TableCell>
                <TableCell>
                    GRADE
                </TableCell>
                <TableCell>
                    DELETE
                </TableCell>
                <TableCell>
                   UPDATE
                </TableCell>


            </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value, index) => {
                return <TableRow key={index}>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell>
                        <Button color='success' variant='contained' onClick={() => deleteValues(value.id)}> delete</Button>
                    </TableCell>
                    <TableCell>
                        <Button color='success' variant='contained' onClick={() => Updatevalue(value)} > update</Button>
                    </TableCell>
                    

                </TableRow>
            })}




        </TableBody>
    </Table>
</TableContainer>
if(update)
Finaljsx=<Add data={selected} method="put"/>


    return (
        <div>
            <br/>
            <br/>
            <br/>


{Finaljsx}
          
        </div>
    )
}

export default Viewstd
