import { createContext, useState } from "react";


export const TodoContext = createContext({
    data: '',
    setData: () => { },
    name: '',
    setName: () => { },
    deadline: '',
    setDeadline: () => { }
});
const initData =  [
    {
        "id": 4,
        "name": "FastAPI Basic",
        "isCompleted": false,
        "deadline": "9-10-2021"
    },    
]
    

export const TodoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('')
    return (
        <TodoContext.Provider value={{
            data: myData,
            setData: setMyData,
            name: taskName,
            setName: setTaskName,
            deadline: taskDeadline,
            setDeadline: setTaskDeadline

        }}>
            {children}
        </TodoContext.Provider>
    )
};