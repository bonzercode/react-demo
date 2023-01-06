// import { Add } from '@mui/icons-material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ProcessSpinner from '../loader/ProcessSpinner'
// import React from 'react'

// const CustomButton = ({title, onClick , loading, spinnerSize, className, disabled, type, preAddIcon, preBackIcon, customIcon, iconRight}) => {
//   return (
//     <button 
//         className={className ? className : `btn-with-loader`}
//         onClick={onClick} 
//         disabled={disabled}
//         type={type || "button"}
//     >
//         {loading ? <ProcessSpinner size={spinnerSize || "sm"} /> : ""}
//         {preBackIcon && <ArrowBackIcon />}
//         {(!iconRight && customIcon) && customIcon}
//         {preAddIcon && <Add />}{ title || "Submit"}
//         {(iconRight && customIcon) && customIcon}
//     </button>
//   )
// }

// export default CustomButton








// import { useState } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// // import { useSelector } from 'react-redux';

// import { history } from './history';

// export { PrivateRoute };

// // function PrivateRoute({ children }) {
// //    // const { data: authUser } = useSelector(state => state.AuthUser);
// //    const authUser = localStorage.getItem('rtm_user')  ? 'access' : '';

// //     if (!authUser) {
// //         // not logged in so redirect to login page with the return url
// //         return <Navigate to="/" state={{ from: history.location }} />
// //     }

// //     // authorized so return child components
// //     return children;
// // }
// // const { REACT_APP_ENV } = process.env;

// // function PrivateRoute({ children }) {
// //   const auth = localStorage.getItem(`${REACT_APP_ENV}_rtms`) ? true : false;
// //   return auth ? children : <Navigate to="/" state={{ from: history.location }} />;
// // }


// function PrivateRoute({ children, path }) {

//   const location = useLocation()
//   const [menuData, setMenuData] = useState([])

//   const localStorageVar = localStorage.getItem('menuData');
//   const localMenuData = localStorageVar && JSON.parse(localStorageVar);

//   if (menuData && menuData.length === 0) {
//     if (localMenuData && localMenuData.data && localMenuData.data.rows) {
//       setMenuData(localMenuData?.data?.rows)
//       // console.log(localMenuData?.data?.rows,"menuData")
//     }
//   }

//   const auth = localStorage.getItem(`${REACT_APP_ENV}_rtms`) ? true : false;
//   // return auth ? children : <Navigate to="/" state={{ from: history.location }} />;

//   return auth ? location.pathname === '/dashboard' ? children
//     : menuData && menuData.find(ele => ele.menu === path)
//       ? children
//       : <Navigate replace to={"/access-denied"} />
//     : <Navigate to="/" state={{ from: history.location }} />;
// }








// // import { Close } from '@mui/icons-material'
// // import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
// // import React, { useState } from 'react'
// // import DatePicker from 'react-datepicker';
// // import { STATUS, STATUSES } from '../../redux/common-status/constant';
// // import LoaderForm from '../../components/common-function/LoaderForm';
// // import moment from 'moment';
// // import Multiselect from 'multiselect-react-dropdown';

// // const RegularizeModal = ({ modalDetail, editData,  hideBackdrop,
// //     //  fullWidth, maxWidth,  onOpen, setFormLoading,
// //      open, onClose, updating, onCancel, onSubmit, editable, formLoading, additionalActions, onAdditionalAction, additionalActionOnView }) => {

// //     const [formData, setFormData] = useState({ ...editData } || {})
// //     const [submitDisabled, setSubmitDisabled] = useState(true)

// //     const handleChange = (evt) => {
// //         // console.log(evt.target.value)
// //         setSubmitDisabled(false);
// //         let eventValue={}
// //         if(evt.type && evt.type==="date"){
// //             eventValue={name:evt.name, type:evt.type, value:evt.format ? moment(evt.value).format(evt.format):evt.value}
// //         }
// //         const { name, value, type, selected, checked } = (evt && evt.target) ? evt.target : eventValue ;
// //         const finalValue = type === "checkbox" ? checked : type === "select" ? selected : value
// //         setFormData(updating ? {...editData, ...formData, [name]: finalValue } : { ...formData, [name]: finalValue })
// //     }

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         if(Object.keys(formData).length === 0){
// //             return;
// //         }
// //         onSubmit(formData)
// //         setFormData({})
// //     }

// //     const handleClose=() => { 
// //         onClose()
// //         setFormData({})
// //      }

// //     return (
// //         <Dialog
// //             hideBackdrop={hideBackdrop}
// //             fullWidth={true}
// //             maxWidth={"md"}
// //             // onBackdropClick={() => { return;}}

// //             open={open}
// //             onClose={handleClose}
// //             aria-labelledby="modal-title"
// //             aria-describedby="child-modal-description"
// //         >

// //             <DialogTitle style={{ background: '#2196f3', color: '#fff', marginBottom: "20px" }}>
                
// //                 { (editable && !updating) ?  modalDetail.addModalTitle : (editable && updating) ? modalDetail.editModalTitle : modalDetail.title}
                
// //                 <IconButton
// //                     edge="start"
// //                     //color="inherit"
// //                     onClick={handleClose}
// //                     aria-label="close"
// //                     style={{ position: "absolute", top: "10px", right: "10px" }}
// //                 ><Close /></IconButton>
// //             </DialogTitle>
// //             <DialogContent style={{ height: "400px" }}>
// //                 <div>
// //                     {formLoading && <LoaderForm />}
// //                     <form className="regulazation-form" onSubmit={handleSubmit}>

// //                         {
// //                             !editable && editData ?
// //                             <div>
                                
// //                                { modalDetail.formInputs.map((field, index) => {
// //                                 const optionArray=field.type==="select" ?
// //                                         field.options.filter((e)=>{if(e.id===editData[field.name]){ return e }})
// //                                         : []
// //                                     return (
// //                                         <div key={index}>
// //                                             <div className="table-row-regular">
// //                                                 <div className="table-row-cell-regular"><p><span style={{ fontWeight: "bold" }}>{field.label}</span></p></div>
// //                                                 <div className={` ${field.name === "status" ? STATUS.COMPOFF[editData[field.name]] + " btns statuscard" : ""}`}>
// //                                                     <p>
// //                                                         {(field.name !== "status" && field.type !== "select"  )? editData[field.name] :

// //                                                         // field.type === "multiSelect"  ?
// //                                                         //  (editData[field.name].length ? "TEST"
// //                                                         //     // editData[field.name].map((e, i)=>(<span>{e.label + (editData[field.name].length-1===i ? "" :",")}</span>))
// //                                                         //     :
// //                                                         //     ""
// //                                                         // )
// //                                                         //  :

// //                                                             STATUS[editData[field.name]]
// //                                                         }
// //                                                         {  optionArray && optionArray.length ? optionArray[0].label : "" }
// //                                                     </p>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     )
// //                                 })}

// //                                 <div>
// //                                     {
// //                                         (!editable && additionalActions && additionalActionOnView) ?
// //                                         additionalActions.length && additionalActions.map((action, index) => {
// //                                             return (
                                                
// //                                                 formData && formData.id ?
// //                                                 <button key={index} type={"button"} onClick={() => { onAdditionalAction( formData , action.name) }} className={`btn ${action.className}`}>{action.label}</button>
// //                                                 :
// //                                                 <button key={index} type={"button"} onClick={() => { onAdditionalAction( editData , action.name) }} className={`btn ${action.className}`}>{action.label}</button>
// //                                             )
// //                                         })
// //                                         :""
// //                                     }
// //                                 </div>
// //                                   </div>

// //                                 :
// //                                 <div className="add-new-user-form">


// //                                     {
// //                                         modalDetail.formInputs.map((field, index) => {
// //                                             return (
// //                                                 (field.type === "textWithLabel") ?
// //                                                     <div key={index} className="formInput" style={{ flexBasis: "50%" }}>
// //                                                         <label >
// //                                                             <span className="label-heading">{field.label} : </span> {editData?.[field.name] || ""}
// //                                                         </label>

// //                                                     </div>
// //                                                     : (field.type === "status_text") ?
// //                                                         <div className="formInput" style={{ flexBasis: "50%" }}>
// //                                                             <label >
// //                                                                 <span className="label-heading">{field.label && field.label + " :"} </span> {editData?.status_text?.[editData[field.name]] || ""}
// //                                                             </label>

// //                                                         </div>
// //                                                     : (field.type === "status") ?
// //                                                     <div className="formInput" style={{ flexBasis: "50%" }}>
// //                                                         <label >
// //                                                             <span className="label-heading">{field.label && field.label + " :"} </span> {STATUS[editData[field.name]] || ""}
// //                                                         </label>

// //                                                     </div>
// //                                                         : (field.type === "text" || field.type === "email" || field.type === "password" || field.type === "checkbox") ?
// //                                                             <div key={index} className="formInput" >
// //                                                                 <label >
// //                                                                     {field.label}
// //                                                                 </label>

// //                                                                 <input defaultValue={editData?.[field.name]} name={field.name} required={field.required} disabled={field.disabled}
// //                                                                     onChange={handleChange} type={field.type} placeholder={field.placeholder} />

// //                                                             </div>
// //                                                             : field.type === "select" ?
// //                                                                 <div key={index} className="formInput">
// //                                                                     <label >
// //                                                                         {field.label}
// //                                                                     </label>
// //                                                                     <select name={field.name} defaultValue={editData[field.name]}
// //                                                                         required={field.required} disabled={field.disabled}
// //                                                                         onChange={handleChange}>
// //                                                                         <option value={""}>Select</option>
// //                                                                         {field.options.map((opt, indx) => {
// //                                                                             return (
// //                                                                                 <option key={indx} value={opt.value}>{opt.label}</option>
// //                                                                             )
// //                                                                         })}
// //                                                                     </select>

// //                                                                 </div>
// //                                                                 : field.type === "date" ?
// //                                                                     <div key={index} className="formInput">
// //                                                                         <label >
// //                                                                             {field.label}
// //                                                                         </label>


// //                                                                         <input
// //                                                                             name={field.name}
// //                                                                             type={field.type}
// //                                                                             onChange={handleChange }
// //                                                                             // onChange={(evt) => { handleChange({name:field.name, type:field.type, format:field.format, value:evt}) }}
// //                                                                             defaultValue={editData?.[field.name]}
// //                                                                             required={field.required} disabled={field.disabled}
// //                                                                         />

// //                                                                     </div>
// //                                                                     : field.type === "textarea" ?
// //                                                                         <div key={index} className="formInput" style={{ flexBasis: "100%" }}>
// //                                                                             <label >
// //                                                                                 {field.label}
// //                                                                             </label>


// //                                                                             <textarea defaultValue={editData?.[field.name]} name={field.name} required={field.required} disabled={field.disabled} onChange={handleChange} rows="3" placeholder={field.placeholder}></textarea>


// //                                                                         </div>

// //                                                                         : field.type === "multiSelect" ?
// //                                                                         <div key={index} className="formInput" style={{ flexBasis: "100%" }}>
// //                                                                             <label >
// //                                                                                 {field.label}
// //                                                                             </label>

// //                                                                             <Multiselect
// //                                                                                 isObject={true}
// //                                                                                 onRemove={(evt) => { handleChange({target:{name:field.name, value:evt}}) }}
// //                                                                                 onSelect={(evt) => { handleChange({target:{name:field.name, value:evt}}) }}
// //                                                                                 displayValue={"label"}
// //                                                                                 // value={editData?.[field.name]?.map(e=>e.id)}
// //                                                                                 selectedValues={editData?.[field.name]?.map(e=>({id:e.id, label:e.name, value:e.id}))}
// //                                                                                 options={field.options}      
// //                                                                             />


// //                                                                         </div>

// //                                                                         : ""
// //                                             )
// //                                         })
// //                                     }


// //                                     <div>
// //                                         {onSubmit && <button type='submit' className={`btn ${(formLoading || submitDisabled) ? "btn-submit" : "btn-submit"}`} disabled={formLoading || submitDisabled} >{updating ? "Update" : "Submit"}</button>}

// //                                         <>
// //                                         {
// //                                             (additionalActions && !additionalActionOnView) ?
// //                                             additionalActions.length && additionalActions.map((action, index) => {
// //                                                 return (                                                    
// //                                                     <button key={index} type={"button"} onClick={() => { onAdditionalAction(formData , action.name) }} className={`btn ${action.className}`}>{action.label}</button>
// //                                                 )
// //                                             })
// //                                             :""
// //                                         }
// //                                         </>
// //                                         {onCancel && <button type={"button"} onClick={onCancel} className="btn btn-cancel">Cancel</button>}
// //                                     </div>
// //                                 </div>

// //                         }


// //                     </form>
// //                 </div>
// //             </DialogContent>
// //         </Dialog>
// //     )
// // }

// // export default RegularizeModal


// // import React from 'react'
// import './domain.scss'
// import { useNavigate } from 'react-router-dom'
// import Navbar from '../../components/navbar/Navbar';
// import Sidebar from '../../components/sidebar/Sidebar';
// import { toast, ToastContainer } from 'react-toastify';
// import { useEffect, useState } from "react"
// import DynamicTable from "../../components/dynamic-table/DynamicTable"
// import dataService from "../../redux/services/data.service"
// import RegularizeModal from "../../components/common-function/RegularizeModal"

// // projects: [],
// //         projects_count:0,
// //         projects_status: STATUSES.IDLE,
// //         projects_error: '',

// import { projectsList, domainList } from "../../redux/features/domainSlice"
// import { useDispatch, useSelector } from "react-redux"
// import { STATUS, STATUSES } from "../../redux/common-status/constant"
// import Button from '../../components/button/Button';
// import { Tooltip } from '@mui/material';
// const { REACT_APP_ENV } = process.env;

// const ProjectDomain = () => {

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const rtm_user = localStorage.getItem(`${REACT_APP_ENV}_rtms`) && JSON.parse(localStorage.getItem(`${REACT_APP_ENV}_rtms`))
//   const userId = rtm_user.user.data.id;

//   // const [holidays, setHolidays] = useState([])
//   const {domains, projects, projects_count, projects_status, projects_error } = useSelector(state => state.domain)
//   const [pageSize, setPageSize] = useState(10);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [skip, setSkip] = useState(0);
//   const [params, setParams] = useState({})
//   const [fieldName, setFieldName] = useState("")
//   const [defaultValue, setDefaultValue] = useState("")

//   // Modal Related data
//   const [open, setOpen] = useState(false)
//   const [formLoading, setFormLoading] = useState(false)
//   const [updating, setUpdating] = useState(false);
//   const [editable, setEditable] = useState(false);

//   const whereClause = { ...params, "skip": skip, "limit": pageSize || 10 }

//   const [projectsData, setProjectsData] = useState({
//     // name:"Deepawali",

//   })

//   const modalDetail = {
//     title: "Project Details",
//     editModalTitle: "Edit Project",
//     addModalTitle: "Add Project",
//     formInputs: [
//       { id: 1, name: "project_name", label: "Project Name", placeholder: "Enter Name", type: "textWithLabel", required: true, disabled: false },
//       {
//         id: 3, name: "status", label: "Status", placeholder: "Enter For Date", type: "status",
//         options: [
//           { id: 1, label: "Active", value: true },
//           { id: 2, label: "Inactive", value: false },
//         ],
//         required: true, disabled: false
//       },
//       { id: 2, name: "domains", label: "Domains", placeholder: "Enter Domains", type: "multiSelect", 
//         options:domains.map(e=>({id:e.id, label:e.name, value:e.id})),
//       //  options: [
//       //   { id: 1, label: "Active", value: true },
//       //   { id: 2, label: "Inactive", value: false },
//       // ],
//       required: true, disabled: false
//      },

//       // { id: 4, name: "description", label: "Descriptions", placeholder: "Enter Descriptions", type: "textarea", required: false, disabled: false },
//     ],
//     // additionalActions: [
//     //   { id: 1, name: "Active", label: "Active", className: "btn-submit", disabled: false },
//     //   { id: 2, name: "Inactive", label: "Inactive", className: "btn-cancel", disabled: false },
//     // ]
//   }

//   const holidaysColumns = [
//     { field: "id", headerName: "ID", width: 70 },
//     {
//       field: "project_name",
//       headerName: "Project Name",
//       width: 275,
//     },
//     {
//       field: "project_key",
//       headerName: "Project Key",
//       width: 150,
//     },

//     {
//       field: "is_jira_project",
//       headerName: "Is Jira Project",
//       width: 150,
//       hideable: false,
//       // filterable:false,
//       sortable: false,

//       type: 'singleSelect',
//       valueOptions: [{ label: "Yes", value: "True" }, { label: "No", value: "False" }],
//       renderCell: (params) => {
//         return (
//           <div className="cellWithImg">
//               {params.row.is_jira_project ? "Yes": "No"}
//           </div>)
//       },
//     },
//     {
//       field: "domains",
//       headerName: "Domains",
//       width: 380,
//       hideable: true,
//       filterable: true,
//       sortable: false,
//       type: 'singleSelect',
//       // valueOptions: optionsObj.domains,
//       renderCell: (params) => {
//         return (
//           <div className="cellWithImg">
//             {params.row.domains && params.row.domains.length ?
//               params.row.domains.map((domain, index) => {
//                 return (
//                   <p key={index} style={{}}>
//                     {index === 0 && domain.name} {index === 0 && params.row.domains.length > 1 && ","}
//                     {params.row.domains.length > 1 && index === 1 && domain.name} {index === 1 && params.row.domains.length > 2 && ","}
//                   </p>
//                 )
//               })
//               : ""
//             }
//             {(params.row.domains && params.row.domains.length > 2) ? `..[+${params.row.domains.length - 2}]` : ""}

//           </div>
//         );
//       },
//     },
//     // {
//     //   field: "description",
//     //   headerName: "Description",
//     //   width: 400,
//     //   renderCell: (params) => {
//     //     return (
//     //       <Tooltip describeChild
//     //         title={params.row.description}
//     //       >
//     //         <p> {params.row.description} </p>
//     //       </Tooltip>)
//     //   }
//     // },

//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,

//       type: 'singleSelect',
//       valueOptions: [
//         { label: "Active", value: "True" },
//         { label: "Inactive", value: "False" },
//       ],
//       renderCell: (params) => {
//         return (
//           <div className={
//             STATUS[params.row.status.toString()]
//             + " " + "Active"
//           }
//             style={
//               params.row.status === true ? { color: '#0000FF' } :
//                 params.row.status === false ? { color: '#ff0000' } :
//                   { color: '#000' }
//             }
//           >
//             <p
//             // className={STATUS[params.row.status]}
//             >
//               {STATUS[params.row.status.toString()]}

//             </p>
//           </div>
//         );
//       },
//     },
//   ];

  
//   const onSubmit = async (data) => {
//     const finalData = projectsData.id ? { ...projectsData, ...data, updated_by: userId } : { ...data, created_by: userId }
//     // return;
//     const res = await dataService.assign_project_domain({
//       "project_id": finalData.project_id,
//       "domains_ids": finalData?.domains?.map(e=>e.id),
//       "created_by": userId
//     });
//     if (res.data && res.data.status === 200) {
//       toast.success(res.data.message)
//       dispatch(projectsList(whereClause))
//       onCloseModal();
//     }
//     else {
//       toast.error(res.data.message)
//     }
//   }

//   // const onView = (data) => {
//   //   setProjectsData(
//   //     { ...projectsData, 
//   //       project_name:data.project_name, domains:data.domains, 
//   //       project_id: data.id, status:data.status,
//   //     created_by: userId
//   //     });
//   //   setEditable(false);
//   //   setOpen(true);
//   // }

//   const onAdditionalAction = async (data, key) => {
//     if (key === "assign_domain") {
//       setProjectsData(
//         { ...projectsData, 
//           // project_name:data.project_name, domains:[1,4], 
//           project_name:data.project_name, domains:data.domains, 
//           project_id: data.id, status:data.status,
//         created_by: userId
//         });
//       setUpdating(true)
//       setEditable(true);
//       setOpen(true);
//     }
//   }


//   // Edit Shift
//   const handleEdit = (data) => {
//     setProjectsData(
//       { ...projectsData, 
//         project_name:data.project_name, domains:data.domains, 
//         project_id: data.id, status:data.status,
//       created_by: userId
//       });
//     setUpdating(true)
//     setEditable(true);
//     setOpen(true);
//   }

//   // Delete Holiday
//   const deleteHoliday = async (id) => {
//     const res = await dataService.delete_holiday(id)
//     if (res && res.data && res.data.status === 200) {
//       toast.success(res.data.message)
//       dispatch(projectsList(whereClause))
//     } else {
//       toast.error(res.data.message)
//     }
//   }

//   //  Open Modal
//   const onOpenModal = () => {
//     setOpen(true)
//   }

//   //  AddHoliday Modal
//   const onAddHoliday = () => {
//     setOpen(true)
//     setEditable(true);
//   }

//   //  Close Modal
//   const onCloseModal = () => {
//     setOpen(false)
//     setUpdating(false);
//     setEditable(false);
//     setProjectsData({});
//   }

//   useEffect(() => {
//     dispatch(projectsList(whereClause))
//     dispatch(domainList())

//   }, [skip, params])

//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />

//         <div className="top-headings">
//           <h3 >Project-Domain </h3>
//           <div>
//             {/* <Button  title={"Add Holiday"} 
//             preAddIcon className="btn-add-new " 
//             onClick={onAddHoliday} 
//           /> */}
//             <button onClick={() => navigate(-1)} className="btn-add-new ">
//               Back
//             </button>
//           </div>
//         </div>

//         <ToastContainer />
//         <>
//           {
//             <DynamicTable
//               moduleName="holidays"
//               tableColumns={holidaysColumns}
//               tableRows={projects || []}
//               currentPage={currentPage} pageSize={pageSize} skip={skip} params={params}
//               setPageSize={setPageSize} setCurrentPage={setCurrentPage} setSkip={setSkip} setParams={setParams} 
//               setFieldName={setFieldName} setDefaultValue={setDefaultValue}
//               paginationMode={"server"}
//               rowCount={projects_count}
//               loading={projects_status === STATUSES.LOADING}
//               columnVisibilityModel={{
//                 id: false,
//               }}
//               // onViewDetail={onView}
//               // onEdit={handleEdit}

//               additionalAction={[{ id: 1, key: "assign_domain", title: "Assign Domain" }]}
//               onAdditionalAction={onAdditionalAction}
//             // deleteRow={deleteHoliday} 
//             />
//           }
//         </>
//         {
//           // projectsData && projectsData.id &&
//           <RegularizeModal
//             modalDetail={modalDetail}
//             open={open}
//             onOpen={onOpenModal}
//             onClose={onCloseModal}
//             // onCancel={onCancel}
//             onSubmit={onSubmit}
//             hideBackdrop
//             fullWidth
//             maxWidth
//             updating={updating}
//             editData={projectsData}
//             editable={editable}
//             formLoading={formLoading}
//             setFormLoading={setFormLoading}
//             additionalActions={modalDetail.additionalActions}
//             // onAdditionalAction={() => {return;}}
//           />
//         }
//       </div>
//     </div>
//   )
// }

// // export default ProjectDomain


// // const { REACT_APP_ENV } = process.env;

// // function App() {

// //   // Acl Router
// //   const dispatch = useDispatch()
// //   useEffect(() => {
// //     const auth = localStorage.getItem(`${REACT_APP_ENV}_rtms`) ? true : false;
// //     auth && dispatch(getAsigneRoleMenuList(roleWiseFilter))
// //   }, [])

// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route exact path="/" element={<Login />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />
// //         <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
// //         <Route
// //           exact path="/dashboard"
// //           element={
// //             <PrivateRoute path="dashboard?reload=done">
// //               <DashboardMenu />
// //             </PrivateRoute>
// //           }
// //         />

// //         {/* <Route path="all-resource/add" element={<PrivateRoute><ResourceEdit /></PrivateRoute>} /> */}

// //         <Route path="/profile" element={<PrivateRoute path="profile"><Profile /></PrivateRoute>} />
// //         <Route path="/profile/:Id" element={<PrivateRoute path="profile"><Profile /></PrivateRoute>} />
// //         <Route path="/edit-profile" element={<PrivateRoute path="edit-profile"><EditProfile inputs={editInput} title="Edit Profile" /></PrivateRoute>} />
// //         <Route path="/setting" element={<Setting />} />
// //         <Route path="/notification" element={<Notification />} />
// //         <Route path="/all-massages" element={<Messages />} />

// //         {/* User Type */}

// //         <Route path="/all-user" element={
// //           <PrivateRoute path="all-user"><AllManageUser /></PrivateRoute>
// //         } />

