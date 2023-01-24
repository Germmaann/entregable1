import React from 'react'

export const QuoteButton = ({newQuote, color}) => {
  return (
    <button className='qouteBox_button' onClick={newQuote} style={{backgroundColor: color}}>
        <i className='bx bx-chevron-right'></i>
    </button>
  )
}

export default QuoteButton