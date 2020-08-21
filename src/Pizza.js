import React from 'react'

function Pizza({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza&apos;s details...</h3>
  }

  return (
    <div className='pizza container'>
      <h2>{details.name}</h2>
      <p>Size: {details.size}</p>      

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
          </ul>
        </div>
      }

      <p>Special Instructions: {details.special}</p>

    </div>
  )
}

export default Pizza;