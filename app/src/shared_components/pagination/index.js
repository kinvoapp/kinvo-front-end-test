import React, { useState, useEffect } from 'react'
import {StyledPagination} from './styles'

export default function PAGINATION(props) {
    
    const { activeNumber, setActiveNumber, numberOfButtons = 2,
        dataLength = 1, itemsPerPage = 5 } = props
    const numberOfPages = Math.ceil(dataLength / itemsPerPage)
    const [buttonArray, setButtonArray] = useState([])
    const [lastNumber, setLastNumber] = useState(0)

    //Works like componentDidMount
    useEffect(() => {
        let auxArray = []
        if(numberOfButtons < numberOfPages){
            let j = parseInt(activeNumber) - 1
            for (let i = 0; i < numberOfButtons; i++) {
                if (j + 1 <= numberOfPages) {
                    auxArray[i] = j + 1
                    setLastNumber(j + 1)
                }
                j = j + 1
            }
        } else {
            for(let i = 0; i < numberOfButtons; i++){
                if(i+1 <= numberOfPages){
                    auxArray[i] = i + 1
                    setLastNumber(i+1)
                }
            }
        }
        setButtonArray(auxArray)
    }, [numberOfButtons, numberOfPages, activeNumber])


    useEffect(() => {
        const oldActive = Array.from(document.getElementsByClassName('pageNumberActive'))[0]
        if (oldActive) {
            oldActive.classList.remove('pageNumberActive')
            oldActive.classList.add('pageNumber')
        }

        const pageButtons = Array.from(document.getElementsByClassName('pageNumber'))
        const activeButton = pageButtons.filter((b) => b.innerHTML === activeNumber)[0]
        
        if (activeButton) {
            activeButton.classList.remove('pageNumber')
            activeButton.classList.add('pageNumberActive')
        }

    })

    return (
        <StyledPagination>
            <button disabled={buttonArray[0] === 1}
                onClick={() => GoBack(buttonArray, numberOfButtons,
                    setButtonArray, setLastNumber, setActiveNumber)}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            {buttonArray.map((number) =>
                <button
                    onClick={(e) => setActiveNumber(e.target.value)}
                    key={number}
                    value={number}
                    className='pageNumber'>
                    {number}
                </button>
            )}

            <button onClick={() => Next(lastNumber, numberOfButtons, numberOfPages,
                setButtonArray, setLastNumber,
                setActiveNumber)}
                disabled={lastNumber === numberOfPages} >
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </StyledPagination>
    )
}

function Next(lastNumber, numberOfButtons, numberOfPages, setButtonArray,
    setLastNumber, setActiveNumber) {
       
    let auxArray = []
    const difference = (numberOfPages - lastNumber)
    for (let i = 0; i < difference; i++) {
        if (i < numberOfButtons) {
            auxArray[i] = lastNumber + i + 1
        } else {break}
    }
    
    setButtonArray(auxArray)
    setLastNumber(auxArray[auxArray.length - 1])
    setActiveNumber(auxArray[0].toString())
}

function GoBack(buttonArray, numberOfButtons, setButtonArray,
    setLastNumber, setActiveNumber) {
    const firstNumber = buttonArray[0]
    let controller = firstNumber - numberOfButtons - 1
    if(controller < 0){ controller = 0}
    const newLastNumber = controller + numberOfButtons
    let auxArray = []
    for (let i = 0; i < numberOfButtons; i++) {
        auxArray[i] = controller + 1
        controller++
    }

    setButtonArray(auxArray)
    setLastNumber(newLastNumber)
    setActiveNumber(auxArray[0].toString())
}
