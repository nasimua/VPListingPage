import React from 'react'
import PriceFilter from './PriceFilter'
import StyleFilter from './StyleFilter'
import TypeFilter from './TypeFilter'

function Filters() {
  return (
    <div>
        <PriceFilter />
        <StyleFilter />
        <TypeFilter />
    </div>
    
  )
}

export default Filters