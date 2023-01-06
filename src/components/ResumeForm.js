import { Add } from '@mui/icons-material'
import React, { useState } from 'react'
import CustomForm from './CustomForm'

const ResumeForm = () => {
  // const [holidays, setHolidays] = useState([])
//   const {domains, projects, projects_count, projects_status, projects_error } = useSelector(state => state.domain)
//   const [pageSize, setPageSize] = useState(10);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [skip, setSkip] = useState(0);
//   const [params, setParams] = useState({})
//   const [fieldName, setFieldName] = useState("")
//   const [defaultValue, setDefaultValue] = useState("")

      // Modal Related data
  const [open, setOpen] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [updating, setUpdating] = useState(false);
  const [editable, setEditable] = useState(false);

//   const whereClause = { ...params, "skip": skip, "limit": pageSize || 10 }

  const [projectsData, setProjectsData] = useState({
    name:"Deepawali",
    skills:[
        { id: 2, label: "API", value: 2 },
        { id: 3, label: "UI", value: 3 },
    ],
    strength:[
        { id: 2, label: "Hard Working", value: 2 },
        { id: 3, label: "Honest", value: 3 },
    ],
    languages:[
        { id: 2, label: "Hindi", value: 2 },
        // { id: 3, label: "English", value: 3 },
        { id: 4, label: "French", value: 4 },

    ]

  })

  const modalDetail = {
    title: "Project Details",
    editModalTitle: "Edit Project",
    addModalTitle: "Add Project",
    formInputs: [
      { id: 1, name: "name", label: "Name", placeholder: "Enter Name", type: "text", required: true, disabled: false },
      { id: 2, name: "email", label: "email", placeholder: "Enter email", type: "text", required: true, disabled: false },
      { id: 3, name: "phone", label: "phone", placeholder: "Enter phone", type: "text", required: true, disabled: false },
      { id: 4, name: "current_address", label: "current_address", placeholder: "Enter current_address", type: "text", required: true, disabled: false },
      { id: 5, name: "permanent_address", label: "permanent_address", placeholder: "Enter permanent_address", type: "text", required: true, disabled: false },
      { id: 6, name: "profile_name", label: "profile_name", placeholder: "Enter profile_name", type: "text", required: true, disabled: false },
      { id: 7, name: "objective", label: "objective", placeholder: "Enter objective", type: "text", required: true, disabled: false },

      {
        id: 3, name: "status", label: "Status", placeholder: "Enter For Date", type: "select",
        options: [
          { id: 1, label: "Active", value: true },
          { id: 2, label: "Inactive", value: false },
        ],
        required: true, disabled: false
      },
      { id: 2, name: "skills", label: "Skills", placeholder: "Enter Skills", type: "multiSelect", 
        // options:[1,2,3].map(e=>({e})),
       options: [
        { id: 1, label: "Pending", value: 1 },
        { id: 2, label: "Inactive", value: 2 },
        { id: 3, label: "Active", value: 3 },
        { id: 4, label: "Deleted", value: 4 },
      ],
      required: true, disabled: false
     },
     { id: 2, name: "strength", label: "strength", placeholder: "Enter strength", type: "multiSelect", 
     // options:[1,2,3].map(e=>({e})),
    options: [
     { id: 1, label: "Pending", value: 1 },
     { id: 2, label: "Inactive", value: 2 },
     { id: 3, label: "Active", value: 3 },
     { id: 4, label: "Deleted", value: 4 },
   ],
   required: true, disabled: false
  },
  { id: 2, name: "languages", label: "languages", placeholder: "Enter languages", type: "multiSelect", 
  // options:[1,2,3].map(e=>({e})),
 options: [
    { id: 2, label: "Hindi", value: 2 },
    { id: 3, label: "English", value: 3 },
    { id: 4, label: "French", value: 4 },
],
required: true, disabled: false
},


      // { id: 4, name: "description", label: "Descriptions", placeholder: "Enter Descriptions", type: "textarea", required: false, disabled: false },
    ],
    // additionalActions: [
    //   { id: 1, name: "Active", label: "Active", className: "btn-submit", disabled: false },
    //   { id: 2, name: "Inactive", label: "Inactive", className: "btn-cancel", disabled: false },
    // ]
  }

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

  
  const onSubmit = async (data) => {
    // const finalData = projectsData.id ? { ...projectsData, ...data, updated_by: 1 } : { ...data, created_by: 1 }
    // return;
    // const res = await dataService.assign_project_domain({
    //   "project_id": finalData.project_id,
    //   "domains_ids": finalData?.domains?.map(e=>e.id),
    //   "created_by": userId
    // });
    // if (res.data && res.data.status === 200) {
    //   toast.success(res.data.message)
    // //   dispatch(projectsList(whereClause))
    //   onCloseModal();
    // }
    // else {
    //   toast.error(res.data.message)
    // }
  }

  // const onView = (data) => {
  //   setProjectsData(
  //     { ...projectsData, 
  //       project_name:data.project_name, domains:data.domains, 
  //       project_id: data.id, status:data.status,
  //     created_by: userId
  //     });
  //   setEditable(false);
  //   setOpen(true);
  // }

//   const onAdditionalAction = async (data, key) => {
//     if (key === "assign_domain") {
//       setProjectsData(
//         { ...projectsData, 
//           // project_name:data.project_name, domains:[1,4], 
//           project_name:data.project_name, domains:data.domains, 
//           project_id: data.id, status:data.status,
//         created_by: 1
//         });
//       setUpdating(true)
//       setEditable(true);
//       setOpen(true);
//     }
//   }


  // Edit Shift
//   const handleEdit = (data) => {
//     setProjectsData(
//       { ...projectsData, 
//         project_name:data.project_name, domains:data.domains, 
//         project_id: data.id, status:data.status,
//       created_by: 1
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

  //  Open Modal
  const onOpenModal = () => {
    setOpen(true)
  }

  //  AddHoliday Modal
//   const onAddHoliday = () => {
//     setOpen(true)
//     setEditable(true);
//   }

  //  Close Modal
  const onCloseModal = () => {
    setOpen(false)
    setUpdating(false);
    setEditable(false);
    setProjectsData({});
  }


  return (
    <div>
        <span onClick={() => { setOpen(true) }}>
            <Add />
        </span>
        <CustomForm
            modalDetail={modalDetail}
            open={open}
            onOpen={onOpenModal}
            onClose={onCloseModal}
            // onCancel={onCancel}
            onSubmit={onSubmit}
            hideBackdrop
            fullWidth
            maxWidth
            updating={false}
            editData={projectsData}
            editable={true}
            formLoading={formLoading}
            setFormLoading={setFormLoading}
            additionalActions={modalDetail.additionalActions}
            // onAdditionalAction={() => {return;}} 
        />
    </div>
  )
}

export default ResumeForm