import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const itemNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        itemNumbers.push(i);
    }

    return (
        <footer style={{width: '100%', display: 'flex', justifyContent: 'center', position: 'sticky', bottom: 0, left: "50"}}>
            <div className="pagination" style={{width: '5%', display: 'flex', justifyContent: 'space-evenly'}}>
                {itemNumbers.map(number =>(
                    <a onClick={() => paginate(number)} href='#' className='page-link'>
                        {number}
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Pagination
