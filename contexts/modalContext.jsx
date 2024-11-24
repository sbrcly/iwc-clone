"use client"

import { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
    const [state, setState] = useState('Inital State')

    const updateState = (newState) => {
        setState(newState)
    }

    return (
        <ModalContext.Provider value={{ state, updateState }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext)
}