import { createContext, useState } from "react";


export const AuthContext = createContext() // tạo ra 1 context mới


export const AuthProvider = ({ children }) => {


    // call api login success => call api get user dựa trên token => set user vào context

    const [count, setCount] = useState(0) // state count, setCount là hàm để cập nhật lại giá trị của count 

    const handleCount = () => {
        setCount(count + 1) // cập nhật lại giá trị của count
    }
    return (
        <AuthContext.Provider value={{ count, handleCount }}>
            {children}
        </AuthContext.Provider>
    )

}