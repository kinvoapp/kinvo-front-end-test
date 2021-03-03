import React from 'react'

import { Number, Footer } from './styles';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const itemNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        itemNumbers.push(i);
    }

    return (
        <Footer>
            <Number>
                {itemNumbers.map(number =>(
                    <a onClick={() => paginate(number)} href='#' className='page-link'>
                        {number}
                    </a>
                ))}
            </Number>
        </Footer>
    )
}

export default Pagination
