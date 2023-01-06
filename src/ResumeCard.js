import { Button, Card } from '@mui/material'
import React, {useState, useEffect, useRef, Fragment} from 'react'
import { useReactToPrint } from 'react-to-print';
import DynamicForm from './components/DynamicForm';
import SubTitle from './components/SubTitle';
import TitleBar from './components/TitleBar'
import apiServices from './services/apiServices'

const ResumeCard = () => {

    // const candidateInfo={
    //     name:"Ajay Ranjan",
    //     dob:"14/04/1990",
    //     sex:"male",
    //     phone:"88979787",
    //     email:"ajay@test.com",
    //     alternateContactNo:"6565765765",
    //     permanentAddress:"House No-101, New Residencial Society, Gurgaon-122001",
    //     mailingAddress:"#1435 Sector-37, Noida 201301",
    //     profilePic:"",
    //     profile:{
    //         objective:"This is my Carreer Objective to be achived during my Job Tenure Carreer Objective to be achived during my Job Tenure Carreer Objective to be achived during my Job Tenure",
    //         description:"During my Job Tenure Carreer Objective to be achived during my Job Tenure Carreer Objective to be achived during my Job Tenure",
    //         expertise:["ReactJs"]
    //     },
    //     skillSet:["REACT JS", "NodeJS", "Angular", "React-Native"],
    //     strengths:["hardworking", "honest", "quickLearner", "innovator"],
    //     languages:["Hindi", "English", "Spanish"],
    //     experiences:[
    //         {id:"1", company:"Infosys Limited", fromDate:"10/2021", toDate:"09/2022", reference:"Mr. Ram",
    //          role:"Full Stack Developer", achievements:["3 times Employee of the month"]},
    //         {id:"1", company:"Wipro", fromDate:"05/2018", toDate:"04/2020", reference:"Mr. Shyam",
    //          role:"React Developer", achievements:["Best programmer of the year"]},
    //         {id:"1", company:"Accenture", fromDate:"05/2016", toDate:"04/2018", reference:"Ms. Rashmi",
    //          role:"LARAVEL Developer"}
    //     ],
    //     certifications:["Full Stack Developement Certificate","MERN Stack", "MEAN Stack"],
    //     education:["BE(CSE)", "Intermediate(Mathematics)", "Matriculation(Science)"],
    // }

    const [candidateInfo, setCandidateInfo] = useState({})

    const loadData=async () => { 
        const res=await apiServices.get("/resumes/"+1);
        // console.log("res.data>>", res.data);
        res && res.data && setCandidateInfo(res.data)
     }

    const printCompRef=useRef();
    const handlePrint = useReactToPrint({
        content: () => printCompRef.current,
      });

      useEffect(() => {
       loadData();
      }, [])
      
    return (
        <div className='bg-white'>
            <div className='bg-blue-500'>
                <TitleBar titleCenter={"Add Resume"} />
                <DynamicForm />

            </div>

            { candidateInfo && candidateInfo.id ?
                            <Card ref={printCompRef} varient="outlined" className="bg-gray-500" style={{width:"794px", minHeight:"1123px"}} >
                            <div className="flex bg-gray-300 " style={{width:"794px", minHeight:"1123px"}} >
                                <div className="bg-slate-500 w-1/3 font-semibold p-4 px-8">
                                    <img src={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
                                    className={"w-32 h-32 rounded-full p-2 mx-auto"} />
                                    {/* <h2 className=""> {candidateInfo.name} </h2> */}
                                    <h2 className=" font-bold mt-2 border-b-2 "> {"Contact"} </h2>
                                    <div className="p-2">
                                        <ul>
                                            <li className='font-bold'> Phone: <span className='font-semibold' > {candidateInfo.phone} </span>  </li>
                                            <li className='font-bold'> Email: <span className='font-semibold' > {candidateInfo.email} </span>  </li>
                                            <li className='font-bold'> Mailing Address: <span className='font-semibold' > {candidateInfo.mailingAddress} </span>  </li>
                                            {/* <li> Phone: {candidateInfo.phone} </li> */}
                                        </ul>
                                    </div>
                                    <h2 className=" font-bold mt-1 border-b-2"> {"Skills"} </h2>
                                    <div className="p-2">
                                        <ul className="list-inside list-disc divide-sky-900">
                                            { candidateInfo.skillSet && 
                                                candidateInfo.skillSet.map((skill, i)=> <li key={i} className={"capitalize"} > {skill} </li> )
                                            }
                                        </ul>
                                    </div>
                                    <h2 className=" font-bold mt-1 border-b-2"> {"Strength"} </h2>
                                    <div className="p-2">
                                        <ul className="list-inside list-disc divide-sky-900">
                                            { candidateInfo && candidateInfo.strengths &&
                                                candidateInfo.strengths.map((strength, i)=> <li key={i} className={"capitalize"} > {strength} </li> )
                                            }
                                        </ul>
                                    </div>
                                    <h2 className=" font-bold mt-1 border-b-2"> {"Languages"} </h2>
                                    <div className="p-2">
                                        <ul>
                                            {
                                                candidateInfo.languages.map((language,i)=>{
                                                    return(
                                                        <li key={i}> {language} </li>
                                                        )
                                                    })
                                                }
                                        </ul>
                                    </div>
            
                                </div>
                                <div className="bg-white w-2/3 p-4">
                                                <TitleBar titleCenter={"AJAY RANJAN"} />
                                                <SubTitle titleCenter={"MERN Stack Developer"} />
                                    {/* <TitleBar titleLeft={candidateInfo.name} titleRight={"Software Engineer"} /> */}
                                    <h2 className=" font-bold mt-1 border-b-2 bg-gray-200 px-1"> {"Professional Profile"} </h2>
                                    <div className="p-2 font-semibold">
                                            <h5>
                                                I am a Full Stack Developer of MEARN Stack, having 3 years of Developement experiences.
                                                Along with the Stack I have some exposure of working with Laravel as well as AWS.
                                                I have 1 year of experience in Angular also.
                                            </h5>
                                    
            
                                    </div>
                                    <h2 className=" font-bold mt-1 border-b-2 bg-gray-200 px-1"> {"Experiences"} </h2>
                                    <div className="p-2">
                                        <div className='font-semibold'>
                                            {
                                                candidateInfo.experiences.map((experience,i)=>{
                                                    return(
                                                        <Fragment key={i}>
                                                            <h4 className='font-bold'> {experience.company} ( {experience.fromDate} to {experience.toDate} ) </h4>
                                                            {/* <h3 className='p-2'> Period : {experience.fromDate} to {experience.toDate} </h3> */}
                                                            <div className='px-2'>
                                                                <h3 className='font-bold'> Role </h3>
                                                                <p className='p-2'>
                                                                    {experience.role}
                                                                </p>
                                                            </div>
                                                            <div className='px-2'>
                                                                <h3 className='font-bold'> Achievements </h3>
                                                                <div className='p-2'>
                                                                    {
                                                                    //  console.log(experience.achievements)
            
                                                                    experience.achievements &&
                                                                        experience.achievements.map((achievement, i)=>{
                                                                            return(
                                                                                <p key={i}>
                                                                                    {achievement}
                                                                                </p>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className='px-2'>
                                                                <h3 className='font-bold'> Reference </h3>
                                                                <p className='p-2'>
                                                                    {experience.reference}
                                                                </p>
                                                            </div>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
            
                                    <h2 className=" font-bold mt-1 border-b-2 bg-gray-200 px-1"> {"Education"} </h2>
                                    <div className="p-2">
                                        <ul>
                                            {
                                                candidateInfo.education.map((education,i)=>{
                                                    return(
                                                        <li key={i}> {education} </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
            
            
            
            
                                    
                                    <h2 className=" font-bold mt-1 border-b-2 bg-gray-200 px-1"> {"Education"} </h2>
                                    <div className="p-2">
                                        <ul>
                                            {
                                                candidateInfo.education.map((education,i)=>{
                                                    return(
                                                        <li key={i}> {education} </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    
                                    <h2 className=" font-bold mt-1 border-b-2 bg-gray-200 px-1"> {"Education"} </h2>
                                    <div className="p-2">
                                        <ul>
                                            {
                                                candidateInfo.education.map((education,i)=>{
                                                    return(
                                                        <li  key={i}> {education} </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div> 
            
                                </div>
                            </div>
                        </Card>
                        :
                        <h3> Resume not found! </h3>
            }
            <Button onClick={handlePrint} className="" >Print</Button>
        </div>
    )
}

export default ResumeCard
