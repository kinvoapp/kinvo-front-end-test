import {createContext, useContext, useEffect, useState} from 'react';
import api from '../../Services';

const FixedContext = createContext();


const FixedProvider = ({children})=>{

    const [snapshotByPortfolio,setSnapshotByPortfolio] = useState([]);

    const [snapshotByProduct, setSnapshotByProduct] = useState()

    const getFixeds = ()=>{
        api.get()
        .then(resp=>{
            setSnapshotByPortfolio(resp.data.data.snapshotByPortfolio)
            setSnapshotByProduct(resp.data.data.snapshotByProduct)
        })
        .catch((err)=>console.log(err))
    }

    useEffect(()=>getFixeds(),[])

    return (
        <FixedContext.Provider value={{getFixeds, snapshotByPortfolio, snapshotByProduct}}>
            {children}
        </FixedContext.Provider>
    )
}

export default FixedProvider;

export const useFixed = ()=> useContext(FixedContext);


