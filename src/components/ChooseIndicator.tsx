import React from 'react'

const ChooseIndicator = () => {
  return (
    <div className='flex'>
      <label>
        <input type="radio" name="weather" />
        C
      </label>
      <label>
        <input type="radio" name="weather" />
        F
      </label>
    </div>
  )
}

export default ChooseIndicator;
