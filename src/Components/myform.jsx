import { useEffect, useState } from 'react';

const Myform = () => {


const [arr,setarr]=useState([])

    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,
        salery: false

    })





    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        password: '',
        salery: ''
    })
    const [dataarr,setdataarr]=useState([])

    function handlechange(e) {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
        setError({
            name: false,
            email: false,
            password:false,
            salery: false
        })
       

    }

    function validation() {
        const regName = /^[A-Za-z\'`~!^&*()_=+":;?\s\.\,]+$/
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const passReg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        const salaryReg = /^[0-9]*$/
        if (!regName.test(formdata.name)) {
            setError({...error, name: true })
        } else if (!regEmail.test(formdata.email)) {
            setError({...error, email: true })
        }else if(!passReg.test(formdata.password)){
            setError({...error,password: true})
        }else if(!salaryReg.test(formdata.salery || formdata.salery==='')){
            setError({...error,salery: true})
        }else{
            setdataarr([...dataarr,formdata])
            setformdata({
                name: '',
                email: '',
                password: '',
                salery: ''
            })
        }
    }
    useEffect(()=>{
        console.log(dataarr)
    },[dataarr])

    return (
        <div className='form'>
            <label htmlFor="">name</label><br />
            <input name="name" onChange={(e) => handlechange(e)} value={formdata.name} ></input><br />
            {
                error.name === true ?
                    <div className='errors'>enter name please</div>
                    : null
            }
            <label htmlFor="">email</label><br />
            <input name="email" onChange={(e) => handlechange(e)} value={formdata.email} ></input><br />
            {
                error.email === true ?
                    <div className='errors'>enter email please</div>
                    : null
            }
            <label htmlFor="">password</label><br />
            <input name="password" onChange={(e) => handlechange(e)} value={formdata.password} ></input><br />
            {
                error.password === true ?
                    <div className='errors'>enter password please</div>
                    : null
            }
            <label htmlFor="">salery</label><br />
            <input name="salery" onChange={(e) => handlechange(e)} value={formdata.salery} ></input><br /><br />
            {
                error.salery === true ?
                    <div className='errors'>enter salery please</div>
                    : null
            }
            <button onClick={()=>validation()
            }>submit</button>

        </div>
    );
}

export default Myform;
