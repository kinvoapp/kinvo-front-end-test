import { ListMyFixedAnuities } from './style';
import Lupa from '../../assets/ClassesDeAtivos-RendaFixa/Path 3845.svg';
import ArrowRight from '../../assets/ClassesDeAtivos-RendaFixa/Group 10933.svg';
import ArrowLeft from '../../assets/ClassesDeAtivos-RendaFixa/Group 11071.svg';
import { FixedAnnuity } from '../FixedAnnuities';
import { useFixed } from '../../Provider/FixedIncome';
import { useEffect } from 'react';

export const MyFixedAnuities = ()=> {

    const {snapshotByProduct, getFixeds} = useFixed();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>getFixeds(),[]);
    
    return (
        <ListMyFixedAnuities>
            <div id='HeaderFixedAuities'>
                <h2>minhas rendas fixas</h2>
                <div id='inputs'>
                    <select>
                        <option>Ordenar por</option>
                        <option>Data de Venc</option>
                    </select>
                    <div className='searchFix'>
                        <img src={Lupa} alt=''/>
                        <input></input>
                    </div>
                </div>
            </div>
            <ul className='listFixedAnuities'>
                {!!snapshotByProduct && snapshotByProduct.map((e,i)=><FixedAnnuity values={e}/>)}                
            </ul>
            <div id='FooterFixedanuities'>
                <div className='bottomListFixed'><img src={ArrowLeft} alt=''/></div>
                <div className='bottomListFixed nowPage'>1</div>
                <div className='bottomListFixed'>2</div>
                <div className='bottomListFixed'><img src={ArrowRight} alt=''/></div>
            </div>
        </ListMyFixedAnuities>
    )
}