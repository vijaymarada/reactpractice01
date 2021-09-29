import '../App.css';
import ColorContext from './FColorContext';
import FChild from './FChild';

export default function FContext() {
    return (<ColorContext.Provider value="red">
        <div className="App">
            <FChild></FChild>
        </div>
    </ColorContext.Provider>);
}