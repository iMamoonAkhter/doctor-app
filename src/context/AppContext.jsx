// src/AppContext.js
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [setting, setSetting] = useState([]);
    const fetchSetting = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/settings/");
          setSetting(response.data);
          console.log(setting)
        } catch (error) {
          console.error("Error fetching bio:", error);
        }
      };

    useEffect(() => {
        fetchSetting();
    }, [])
    

    return (
        <AppContext.Provider value={{ isModalOpen, openModal, closeModal, email, setEmail, password, setPassword, setting }}>
            {children}
        </AppContext.Provider>
    );
};
