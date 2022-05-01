import FixedProvider from './FixedIncome';


const Providers = ({children})=>{
    return (
        <FixedProvider>
            {children}
        </FixedProvider>
    )
}

export default Providers;
