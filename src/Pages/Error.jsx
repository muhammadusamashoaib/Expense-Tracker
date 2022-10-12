import React, { useEffect } from 'react'

export const Error = () => {

  useEffect(() => {
    document.title = 'Expense Tracker | 404'
  }, [])

  return (
    <div className='error'>
      <h1>404</h1>
      <p>
        <span>OOPS!</span> PAGE NOT FOUND
      </p>
    </div>
  )
}
