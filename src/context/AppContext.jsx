// src/AppContext.js
import { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <AppContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
        </AppContext.Provider>
    );
};
