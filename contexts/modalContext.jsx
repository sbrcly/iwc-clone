"use client"

import { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        current: ''
    })

    const updateState = (newState) => {
        setModalState(newState)
    }

    return (
        <ModalContext.Provider value={{ modalState, updateState }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext)
}