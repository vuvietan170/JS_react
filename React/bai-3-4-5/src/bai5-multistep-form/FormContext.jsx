import { useState, useContext, createContext } from "react";

const FormContext = createContext();
const initialData = { name: "", email: "", address: "" };

export function FormProvider({ children }) {
    const [formData, setFormData] = useState(initialData);

    //cap nhat 1 field trong object
    const updateField = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value })); // [field] js se lay gia tri cua bien key
    };
    return (
        <FormContext.Provider value={{ formData, updateField }}>
            {children}
        </FormContext.Provider>
    );
}

export function useFormData() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormdata phai di kem voi FormProvider");
    }
    return context;
}
