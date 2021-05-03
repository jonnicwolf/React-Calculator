import React from 'react'
// import '../styles/Values.css'

const Values = () => {
       const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.','=']
       const valueMap = values.map((value,i) => {
              return  <button key={i}>{value}</button>
              
       })
       return (
              <div className='values'>      
                     {valueMap}
              </div>
    )
}

export default Values

