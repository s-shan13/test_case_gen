import React from 'react'
import './genLayout.css'

/** takes long time after input size > 10^5
*   Refactor code move common states to header and pass them as props
*/

export default function GenerateIntCase() {

  const [constraints, setConstraints] = React.useState({size: 10, minVal: 0, maxVal: 10})
  const [commaSep, setCommaSep] = React.useState(false)
  const [res, setRes] = React.useState([])

  function handleInput(event){ 
    setConstraints(prevCons => {
      return {...prevCons, [event.target.name]: event.target.value}
    })
  }

  function handleCheckbox(){
    setCommaSep(!commaSep)
  }
  
  function generate(){
    let tempArr = ['invalid constraints']
    if(constraints.maxSize < constraints.minSize){
      ;
    }else{
      
      tempArr = []
      
      let arrSize = parseInt(constraints.size)
      let randomRange = parseInt(constraints.maxVal) - parseInt(constraints.minVal)

      for(let i = 0; i< arrSize; i++){
        tempArr.push(parseInt(Math.random()*randomRange)+ parseInt(constraints.minVal))
      }
      
    }
    
    if(commaSep){
      setRes( tempArr.map(val => <span> {val},</span>))
    }else{
      setRes( tempArr.map(val => <span> {val}</span>))
    }
    
  }


  return (
    <div className='caseBody'>
      <div className='inputSection'>
        <div className='eachInput'>
          <label htmlFor='size'>Enter number of integers to generate</label>
          <input type='number' placeholder='Min number of values' name='size' onChange={handleInput}/>
        </div>
        <div className='eachInput'>
          <label htmlFor='minVal'>Enter minimum value of an integer</label>
          <input type='number' placeholder='Min integer value' name='minVal' onChange={handleInput} />
        </div>
        <div className='eachInput'>
          <label htmlFor='maxVal'>Enter maximum value an integer</label>
          <input type='number' placeholder='Max integer value' name='maxVal' onChange={handleInput} />
        </div>
        <div className='eachInput'>
          <label hmtlFor='comma'>Comma separate values?</label>
          <input type='checkbox' checked={commaSep} onChange={handleCheckbox}/>
        </div>
        <button onClick={generate}>Generate</button>
      </div>
    
      <div className='outputSection'>
        <div className='resBody'>
          {res}
        </div>
      </div>
    </div>
  )
}
