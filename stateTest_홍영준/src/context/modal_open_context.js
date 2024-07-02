import { createContext, useState } from "react";

export const IsModalOpenContext = createContext();

const IsModalOpenProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <IsModalOpenContext.Provider value={[isModalOpen, setIsModalOpen]}>
            {children}
        </IsModalOpenContext.Provider>
    );
};

export default IsModalOpenProvider;
