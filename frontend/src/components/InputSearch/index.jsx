import lupa from '../../assets/icones/lupa.svg'
import { Img, Input } from './styles'

export function InputSearch({
    onChange
}){
    return (
        <>
            <Img src={lupa} alt="" />
            <Input
                type='search'
                name='search'
                onChange={onChange}
            />
        </>
    )
}