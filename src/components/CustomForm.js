import { Close } from '@mui/icons-material'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React, { useState } from 'react'
// import DatePicker from 'react-datepicker';
import { STATUS } from '../constants/projectConstants';
// import LoaderForm from '../../components/common-function/LoaderForm';
import moment from 'moment';
import Multiselect from 'multiselect-react-dropdown';

const CustomForm = ({ modalDetail, editData,  hideBackdrop,
    //  fullWidth, maxWidth,  onOpen, setFormLoading,
     open, onClose, updating, onCancel, onSubmit, editable, formLoading, additionalActions, onAdditionalAction, additionalActionOnView }) => {

    const [formData, setFormData] = useState({ ...editData } || {})
    const [submitDisabled, setSubmitDisabled] = useState(true)

    const handleChange = (evt) => {
        // console.log(evt.target.value)
        setSubmitDisabled(false);
        let eventValue={}
        if(evt.type && evt.type==="date"){
            eventValue={name:evt.name, type:evt.type, value:evt.format ? moment(evt.value).format(evt.format):evt.value}
        }
        const { name, value, type, selected, checked } = (evt && evt.target) ? evt.target : eventValue ;
        const finalValue = type === "checkbox" ? checked : type === "select" ? selected : value
        setFormData(updating ? {...editData, ...formData, [name]: finalValue } : { ...formData, [name]: finalValue })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length === 0){
            return;
        }
        onSubmit(formData)
        setFormData({})
    }

    const handleClose=() => { 
        onClose()
        setFormData({})
     }

    return (
        <Dialog
            hideBackdrop={hideBackdrop}
            fullWidth={true}
            maxWidth={"md"}
            // onBackdropClick={() => { return;}}

            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="child-modal-description"
        >

            <DialogTitle style={{ background: '#2196f3', color: '#fff', marginBottom: "20px" }}>
                
                { (editable && !updating) ?  modalDetail.addModalTitle : (editable && updating) ? modalDetail.editModalTitle : modalDetail.title}
                
                <IconButton
                    edge="start"
                    //color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    style={{ position: "absolute", top: "10px", right: "10px" }}
                ><Close /></IconButton>
            </DialogTitle>
            <DialogContent style={{ height: "400px" }}>
                <div>
                    {/* {formLoading && <LoaderForm />} */}
                    <form className="regulazation-form" onSubmit={handleSubmit}>

                        {
                            !editable && editData ?
                            <div>
                                
                               { modalDetail.formInputs.map((field, index) => {
                                const optionArray=field.type==="select" ?
                                        field.options.filter((e)=>{if(e.id===editData[field.name]){ return e }})
                                        : []
                                    return (
                                        <div key={index}>
                                            <div className="table-row-regular">
                                                <div className="table-row-cell-regular"><p><span style={{ fontWeight: "bold" }}>{field.label}</span></p></div>
                                                <div className={` ${field.name === "status" ? STATUS.COMPOFF[editData[field.name]] + " btns statuscard" : ""}`}>
                                                    <p>
                                                        {(field.name !== "status" && field.type !== "select"  )? editData[field.name] :

                                                        // field.type === "multiSelect"  ?
                                                        //  (editData[field.name].length ? "TEST"
                                                        //     // editData[field.name].map((e, i)=>(<span>{e.label + (editData[field.name].length-1===i ? "" :",")}</span>))
                                                        //     :
                                                        //     ""
                                                        // )
                                                        //  :

                                                            STATUS[editData[field.name]]
                                                        }
                                                        {  optionArray && optionArray.length ? optionArray[0].label : "" }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div>
                                    {
                                        (!editable && additionalActions && additionalActionOnView) ?
                                        additionalActions.length && additionalActions.map((action, index) => {
                                            return (
                                                
                                                formData && formData.id ?
                                                <button key={index} type={"button"} onClick={() => { onAdditionalAction( formData , action.name) }} className={`btn ${action.className}`}>{action.label}</button>
                                                :
                                                <button key={index} type={"button"} onClick={() => { onAdditionalAction( editData , action.name) }} className={`btn ${action.className}`}>{action.label}</button>
                                            )
                                        })
                                        :""
                                    }
                                </div>
                                  </div>

                                :
                                <div className="add-new-user-form">


                                    {
                                        modalDetail.formInputs.map((field, index) => {
                                            return (
                                                (field.type === "textWithLabel") ?
                                                    <div key={index} className="formInput" style={{ flexBasis: "50%" }}>
                                                        <label >
                                                            <span className="label-heading">{field.label} : </span> {editData?.[field.name] || ""}
                                                        </label>

                                                    </div>
                                                    : (field.type === "status_text") ?
                                                        <div className="formInput" style={{ flexBasis: "50%" }}>
                                                            <label >
                                                                <span className="label-heading">{field.label && field.label + " :"} </span> {editData?.status_text?.[editData[field.name]] || ""}
                                                            </label>

                                                        </div>
                                                    : (field.type === "status") ?
                                                    <div className="formInput" style={{ flexBasis: "50%" }}>
                                                        <label >
                                                            <span className="label-heading">{field.label && field.label + " :"} </span> {STATUS[editData[field.name]] || ""}
                                                        </label>

                                                    </div>
                                                        : (field.type === "text" || field.type === "email" || field.type === "password" || field.type === "checkbox") ?
                                                            <div key={index} className="formInput" >
                                                                <label >
                                                                    {field.label}
                                                                </label>

                                                                <input defaultValue={editData?.[field.name]} name={field.name} required={field.required} disabled={field.disabled}
                                                                    onChange={handleChange} type={field.type} placeholder={field.placeholder} />

                                                            </div>
                                                            : field.type === "select" ?
                                                                <div key={index} className="formInput">
                                                                    <label >
                                                                        {field.label}
                                                                    </label>
                                                                    <select name={field.name} defaultValue={editData[field.name]}
                                                                        required={field.required} disabled={field.disabled}
                                                                        onChange={handleChange}>
                                                                        <option value={""}>Select</option>
                                                                        {field.options.map((opt, indx) => {
                                                                            return (
                                                                                <option key={indx} value={opt.value}>{opt.label}</option>
                                                                            )
                                                                        })}
                                                                    </select>

                                                                </div>
                                                                : field.type === "date" ?
                                                                    <div key={index} className="formInput">
                                                                        <label >
                                                                            {field.label}
                                                                        </label>


                                                                        <input
                                                                            name={field.name}
                                                                            type={field.type}
                                                                            onChange={handleChange }
                                                                            // onChange={(evt) => { handleChange({name:field.name, type:field.type, format:field.format, value:evt}) }}
                                                                            defaultValue={editData?.[field.name]}
                                                                            required={field.required} disabled={field.disabled}
                                                                        />

                                                                    </div>
                                                                    : field.type === "textarea" ?
                                                                        <div key={index} className="formInput" style={{ flexBasis: "100%" }}>
                                                                            <label >
                                                                                {field.label}
                                                                            </label>


                                                                            <textarea defaultValue={editData?.[field.name]} name={field.name} required={field.required} disabled={field.disabled} onChange={handleChange} rows="3" placeholder={field.placeholder}></textarea>


                                                                        </div>

                                                                        : field.type === "multiSelect" ?
                                                                        <div key={index} className="formInput" style={{ flexBasis: "100%" }}>
                                                                            <label >
                                                                                {field.label}
                                                                            </label>

                                                                            <Multiselect
                                                                                isObject={true}
                                                                                onRemove={(evt) => { handleChange({target:{name:field.name, value:evt}}) }}
                                                                                onSelect={(evt) => { handleChange({target:{name:field.name, value:evt}}) }}
                                                                                displayValue={"label"}
                                                                                // value={editData?.[field.name]?.map(e=>e.id)}
                                                                                selectedValues={editData?.[field.name]?.map(e=>({id:e.id, label:e.label, value:e.id}))}
                                                                                options={field.options}      
                                                                            />


                                                                        </div>

                                                                        : ""
                                            )
                                        })
                                    }


                                    <div>
                                        {onSubmit && <button type='submit' className={`btn ${(formLoading || submitDisabled) ? "btn-submit" : "btn-submit"}`} disabled={formLoading || submitDisabled} >{updating ? "Update" : "Submit"}</button>}

                                        <>
                                        {
                                            (additionalActions && !additionalActionOnView) ?
                                            additionalActions.length && additionalActions.map((action, index) => {
                                                return (                                                    
                                                    <button key={index} type={"button"} onClick={() => { onAdditionalAction(formData , action.name) }} className={`btn ${action.className}`}>{action.label}</button>
                                                )
                                            })
                                            :""
                                        }
                                        </>
                                        {onCancel && <button type={"button"} onClick={onCancel} className="btn btn-cancel">Cancel</button>}
                                    </div>
                                </div>

                        }


                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CustomForm
