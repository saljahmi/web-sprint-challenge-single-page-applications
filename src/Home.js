import React from 'react'

export default function Home() {

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80'
        alt='pizza'
      />
      <button
        // onClick={routeToForm}
        className='pizza-button'
      >
        Pizza?
      </button>
    </div>
  )
}