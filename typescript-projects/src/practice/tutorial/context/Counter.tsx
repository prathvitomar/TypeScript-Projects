import React, {createContext, useContext,  useState} from 'react'

interface CounterContextProps {
    children : React.ReactNode;
}

interface CounterContextValue {
    value : number;
    setCount : (num : number) =>  void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

export default function useCounter(){
    return useContext(CounterContext);
}

export const CounterContextProvider : React.FC<CounterContextProps> = (props) =>{
    const [count, setCount] = useState<number>(0);
    return (
        <CounterContext.Provider value={{value : count, setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}