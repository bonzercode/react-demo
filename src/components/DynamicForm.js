import React, {useState, useEffect} from 'react'
import { filledInputClasses, FormControl, FormGroup, Input } from '@mui/material'

const DynamicForm = () => {

    const formDetail={
        name:"addResume",
        key:"addResume",
        title:"Add Resume",
        formFields:[
            {id:1, name:"name",label:"Name", placeholder:"Name", type:"text", required:true, format:"", regex:"", defaultValue:"",hidden:false, disabled:false, options:[]},
            {id:2, name:"profileName",label:"profileName", placeholder:"profileName", type:"text", required:true, format:"", regex:"", defaultValue:"",hidden:false, disabled:false, options:[]},
            {id:3, name:"phone",label:"phone", placeholder:"phone", type:"text", required:true, format:"", regex:"", defaultValue:"",hidden:false, disabled:false, options:[]},
            {id:4, name:"phone",label:"phone", placeholder:"phone", type:"text", required:true, format:"", regex:"", defaultValue:"",hidden:false, disabled:false, options:[]},
            {id:5, name:"phone",label:"phone", placeholder:"phone", type:"text", required:true, format:"", regex:"", defaultValue:"",hidden:false, disabled:false, options:[]},
            {id:6, name:"phone",label:"phone", placeholder:"phone", type:"text", required:true, format:"", regex:"", defaultValue:"",hidden:false, disabled:false, options:[]},
            {id:7, name:"phone",label:"phone", placeholder:"phone", type:"text", required:true, format:"", regex:"", defaultValue:"",hidden:false, disabled:false, options:[]},
            {id:8, name:"phone",label:"phone", placeholder:"phone", type:"text", required:true, format:"", regex:"", defaultValue:"",hidden:false, disabled:false, options:[]},

        ]
    }

    const [formData, setFormData] = useState({});

    const handleChange=(evt) => { 
        let {name, type, value, checked}=evt.target;
        value=type==="checkbox" ? checked : value;
        // console.log(name ,">>", value);
        setFormData({...formData, [name]:value});
        console.log(formData)
     }

  return (
    <div>
        
        <FormGroup>
            {
                formDetail.formFields.map((formField, i)=>{
                    return(
                        formField.type==="text" ?
                            <FormControl>
                                <Input type={'text'} name={formField.name} placeholder={formField.placeholder} onChange={handleChange} />
                            </FormControl>
                            : formField.type==="text" ?
                            <FormControl>
                                <Input type={'text'} name="profileName" placeholder={"Profile Name"} onChange={handleChange} />
                            </FormControl>
                            : formField.type==="text" ?
                            <FormControl>
                                <Input type={'number'} name="phone" placeholder={"Phone"} onChange={handleChange} />
                            </FormControl>
                            : formField.type==="text" ?
                            <FormControl>
                                <Input type={'email'} name="email" placeholder={"Email"} onChange={handleChange} />
                            </FormControl>
                            : formField.type==="text" ?
                            <FormControl>
                                <Input type={'text'} name="mailingAddress" placeholder={"Mailing Address"} onChange={handleChange} />
                            </FormControl>
                            :
                            ""
                        )
                    })
                }
        </FormGroup>
    </div>
  )
}

export default DynamicForm