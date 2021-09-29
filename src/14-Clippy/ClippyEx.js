import '../App.css'
import useClippy from 'use-clippy'
import { useState } from 'react'

export default function ClippyEx (){
    const [name, setName] = useState('')
    const [clipboard, setClipboard] = useClippy()
    const captureName=(event)=>{
      setName(event.target.value)
      setClipboard(name)
    }
   const CaptureName=(event)=> setName(event.target.value)
    return (
      <div className="App">
        <label>Enter name </label>
        <input type="text" name="username" onChange={CaptureName}/><br/>
        <button type="button" onClick={captureName}>Click to Copy</button>
      </div>
    );
  }