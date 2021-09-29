import React, { useContext } from 'react'

import ColorContext from "./FColorContext";

export default function FGrandChild() {
    const color = useContext(ColorContext)

    return (
        <div>Color from App is {JSON.stringify(color)}
        </div>
    )
}