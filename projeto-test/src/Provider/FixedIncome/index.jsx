import {createContext, useContext, useState} from 'react';
import api from '../../Services';

const FixedContext = createContext();


const FixedProvider = ({children})=>{

    const [fixeds,setFixeds] = useState([]);

    const getFixeds = ()=>{
        api.get()
        .then(resp=>setFixeds(resp))
        .catch((err)=>console.log(err))
    }

    return (
        <FixedContext.Provider value={{getFixeds, fixeds}}>
            {children}
        </FixedContext.Provider>
    )
}

export default FixedProvider;

export const useFixed = ()=> useContext(FixedContext);


