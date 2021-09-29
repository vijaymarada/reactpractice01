import './App.css';
import Counter from './02-Counter/Counter';
import InputEvent from './01-InputEvent/InputEvent';
import RestDataFromJson from "./03-RestData/ImportRest";
import GetRestData from './04-Axios/GetRestData';
import PureCompEx from './05-PureComponentEx/PurCompEx';
import FormControlex from './06-ControlledComp/FormControls'
import UncontrolledForm from './07-UnControlledComp/UnControlForm'
import FormikEx from './08-Formik/FormikForm'
import DataToRest from './08-Formik/DataToRest';
import DataToPosRest from './08-Formik/DataToConditionalRest';
import FormikFormError from './09-Yup/FormikFormError'
import DisplayMatUI from './10-MaterialUI/DisplayMatUI'
import SelectUI from './10-MaterialUI/SelectUI'
import ContextEx from './11-Context/ContextEx'
import HCounter from './13-Hooks/HCounter'
import HFormPost from './13-Hooks/HFormPost'
import HFormPostUnControlled from './13-Hooks/HFormPostUnControlled'
import HFormikFormPost from './13-Hooks/HFormikFormPost'
import HUseEffect from './13-Hooks/HUseEffect'
import HUseEffectDynamicData from './13-Hooks/HUseEffectDynamicData'
import ClippyEx from './14-Clippy/ClippyEx'
import NetworkDetails from './15-NetworkHook/NetworkDetails'
import TextToSpeech from './16-Text2Speech/TextToSpeech'
import FContext from './17-FunctionContext/FContext'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label>----------------- Counter -----------------------</label>
        <Counter /> {/* ex: Increase decrese Counter numbers  */} <br />
        <label>-------------- Input Data Events ----------------</label>
        <InputEvent />  {/* ex: Input data events  */} <br />
        <label>--------------- Get Rest data -------------------</label>
        <RestDataFromJson /><br />
        <label>--------------- Axios----------------------------</label>
        <GetRestData></GetRestData><br />
        <label>-------------- Pure Component--------------------</label>
        <PureCompEx></PureCompEx><br />
        <label>--------------------------------------- Day 2 -----------------------------------------</label> <br />

        <label>--------------- Contolled Componenets -----------</label>
        <FormControlex></FormControlex><br />
        <label>--------------- UnContolled Componenets ---------</label>
        <UncontrolledForm></UncontrolledForm><br />
        <label>--------------- Formik lib example --------------</label>
        <FormikEx></FormikEx><br />
        <label>--------------- Formik lib Data To Rest ---------</label>
        <DataToRest></DataToRest><br />
        <label>--------------- Formik lib Data To Rest ---------</label>
        <DataToPosRest></DataToPosRest>
        <label>--------------- Yup Formik form Error ---------</label>
        <FormikFormError></FormikFormError>
        <label>--------------- Material UI grid ---------</label>
        <DisplayMatUI></DisplayMatUI>

        <SelectUI></SelectUI>
        <label>--------------------------------------- Day 3 -----------------------------------------</label> <br />
        <label>--------------- Hooks Counter ---------</label> <br />
        <HCounter></HCounter>
        <label>--------------- Hooks Form post axios Controlled ---------</label> <br />
        <HFormPost></HFormPost>
        <label>--------------- Hooks Form post axios Uncontrolled ---------</label><br />
        <HFormPostUnControlled></HFormPostUnControlled>
        <label>--------------- Hooks Formik Form post axios --------------------</label><br />

        <HFormikFormPost></HFormikFormPost>
        <label>----------------------- Hooks useEffect ---------------------</label><br />

        <HUseEffect></HUseEffect>
        <label>----------------------- Hooks useEffect dynamic content ---------------------</label><br />

        <HUseEffectDynamicData />
        <label>----------------------- Hooks Cippy for copying data ---------------------</label><br />

        <ClippyEx></ClippyEx><br />
        <label>----------------------- Hooks for network details ---------------------</label><br />
        <NetworkDetails></NetworkDetails>
        <br />
        <label>----------------------- Text to speech ---------------------</label><br />
        <TextToSpeech></TextToSpeech>
<FContext></FContext>
        {/* <ContextEx></ContextEx> */}
      </header>
    </div>
  );
}

export default App;
