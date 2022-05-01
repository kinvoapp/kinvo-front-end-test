import {CardSideMenu} from './style';

export const BasicCardSideMenu = ({values,iconArrow})=> {
    console.log(values)
    return (
        <CardSideMenu>
            <div className='icon'><img src={values.icon} className='icon' alt=''/></div>
            <div className='text'><p>{values.text}</p></div>
            <div className='iconArrow'><img src={iconArrow} alt=''/></div>
        </CardSideMenu>
    )
};
