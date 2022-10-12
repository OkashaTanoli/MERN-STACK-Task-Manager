import React, { createContext, useReducer } from 'react'
import Reducer from './reducer'


const Obj = [

]

export const Context = createContext(Obj)

const ContextReducer = ({ children }) => {
    const [state, dispach] = useReducer(Reducer, Obj)
    return (
        <Context.Provider value={{ state:state, dispatch:dispach }}>
            {children}
        </Context.Provider>
    )
}


export default ContextReducer