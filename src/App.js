import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar';
import ButtonWithAction from './components/ButtonWithAction';
import ResumeCard from './ResumeCard';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <div className="p-3 bg-blue-500">
      {/* <h2 className="bg-red-400"> Resume Creater </h2> */}
      {/* <TitleBar title={"Resume Creater"} /> */}
     
     <ResumeForm />
     
      <ResumeCard>

        
      <ButtonWithAction title={"Create Resume"} />
      </ResumeCard>
    </div>
  );
}

export default App;
