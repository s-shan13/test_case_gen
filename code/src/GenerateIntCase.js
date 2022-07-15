import React from 'react'
import './genLayout.css'

export default function GenerateIntCase() {
  return (
    <div className='caseBody'>
      
      <div className='inputSection'>
        <div className='eachInput'>
          <label for='minSize'>Enter minimum number of integers to generate</label>
          <input type='text' placeholder='Min number of values' name='minSize' />
        </div>
        <div className='eachInput'>
          <label for='maxSize'>Enter maximum number of integers to generate</label>
          <input type='text' placeholder='Max number of values' name='maxSize' />
        </div>
        <div className='eachInput'>
          <label for='minVal'>Enter minimum value of an integer</label>
          <input type='text' placeholder='Min integer value' name='minVal' />
        </div>
        <div className='eachInput'>
          <label for='maxVal'>Enter maximum value an integer</label>
          <input type='text' placeholder='Max integer value' name='maxVal' />
        </div>
        <div className='eachInput'>
          <label for='comma'>Comma separate values?</label>
          <input type='checkbox' />
        </div>
        <button>Generate</button>
      </div>
      

      <div className='outputSection'>
        <div className='resBody'>

        </div>
      </div>
      
    </div>
  )
}
