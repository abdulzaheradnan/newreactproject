import { TextField, Button, } from '@mui/material';



import React from 'react';
import { useState } from 'react';

const Crud = () => {

    const [data, setdata] = useState({
        name: " ",
        age: " ",
        number: " ",
        address: " "
    })
    const [indexvalue,setindexvalue]=useState()
    const [details, setdetails] = useState([])
    const [error, seterror] = useState(false)
    function crud(event) {
        setdata({ ...data, [event.target.name]: event.target.value })
        console.log(data)

    }
    function submit() {
        setdetails([...details, data])
        setdata({
            name: " ",
            age: " ",
            number: " ",
            address: " "
        })

    }
    function handeldelete(index) {
        details.splice(index, 1)
        setdata({ ...data })
    }
    function handleedit(index) {
        setdata(details[index])
        setindexvalue(index)
        seterror(true)

    }
    function handleupdate() {
        details.splice(indexvalue,1,data)
        setdata({...data})
        setdata({
            name: " ",
            age: " ",
            number: " ",
            address: " "
        })
        seterror(false)

    }
    console.log(details)
    return (
        <div>
            <div className='crudop'>
                <h1>fill the details</h1>
                <lable>Name</lable><br></br>
                <TextField size="small" value={data.name} name="name" onChange={(event) => { crud(event) }}></TextField><br /><br></br>
                <lable>Age</lable><br />
                <TextField size="small" value={data.age} name="age" onChange={(event) => { crud(event) }} ></TextField><br /><br></br>
                <lable>Number</lable><br />
                <TextField size="small" value={data.number} name="number" onChange={(event) => { crud(event) }}></TextField><br /><br></br>
                <lable>Address</lable><br />
                <TextField size="small" value={data.address} name="address" onChange={(event) => { crud(event) }}></TextField><br /><br></br>
                {error === false ? <Button variant="contained" onClick={() => { submit() }}>submit</Button> :
                    <Button variant="contained" onClick={() => { handleupdate() }}>update</Button>}



            </div>
            < div>

                <table>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>number</th>
                        <th>adress</th>

                    </tr>
                    <tbody>


                        {details.map((item, index) => {


                            return (

                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.number}</td>
                                    <td>{item.address}</td>
                                    <td><Button onClick={() => { handeldelete(index) }}>delete</Button></td>
                                    <td><Button onClick={() => { handleedit(index) }}>edit</Button></td>

                                </tr>
                            )

                        })}



                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Crud;
