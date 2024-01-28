import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const [isModalVisible, setModalVisibility] = useState(false);
    const [status, setStatus] = useState("loading");

    const openModal = () => {
        setStatus("loading");
        setModalVisibility(true);
    }

    const closeModal = () => {
        setStatus("loading");
        setModalVisibility(false);
    }

    const updateStatus = (_status) => {
        setStatus(_status);
    }

    return (
    <ModalContext.Provider value={{isModalVisible, status, openModal, closeModal, updateStatus}}>
        {children}
    </ModalContext.Provider>)


}

export {ModalContext, ModalProvider}