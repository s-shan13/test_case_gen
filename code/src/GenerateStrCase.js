import React from 'react'
import './genLayout.css'

// Add uppercase/lowercase option
// Could add extra characters like numbers and symbols
// and allow users to specify character constraints
// Add media queries for mobile


export default function GenerateStrCase() {

  const chars = 'abcdefghijklmnopqrstuvwxyz'
  const charsLen = chars.length

  const [constraints, setConstraints] = React.useState({size:10, minLen:2, maxLen:4})
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
    let tempArr = ['Invalid constraints']
    if(!(constraints.maxLen < constraints.minLen)){
      tempArr = []

      let arrSize = parseInt(constraints.size)
      for(let i=0; i<arrSize; i++){
        let randomRange = parseInt(constraints.maxLen) - parseInt(constraints.minLen)
        let strLen = parseInt(Math.random()*randomRange) + parseInt(constraints.minLen)
        let tmpStr = ''

        for(let j = 0; j<strLen; j++){
          tmpStr += chars.charAt(Math.floor(Math.random()*charsLen))
        }

        tempArr.push(tmpStr)

      }
    }
    if(commaSep){
      setRes(tempArr.map(val => <span> "{val}",</span>))
    }else{
      setRes(tempArr.map(val => <span> "{val}"</span>))
    }
  }

  return (
    <div className='caseBody'>
      
      <div className='inputSection'>
        <div className='eachInput'>
          <label htmlFor='minSize'>Enter number of strings to generate</label>
          <input type='number' placeholder='Min number of values' name='size' onChange={handleInput} />
        </div>
        <div className='eachInput'>
          <label htmlFor='minLen'>Enter minimum length of string</label>
          <input type='number' placeholder='Min integer value' name='minLen' onChange={handleInput}/>
        </div>
        <div className='eachInput'>
          <label htmlFor='maxLen'>Enter maximum length of string</label>
          <input type='number' placeholder='Max integer value' name='maxLen' onChange={handleInput}/>
        </div>
        <div className='eachInput'>
          <label htmlFor='comma'>Comma separate values?</label>
          <input type='checkbox' checked={commaSep} onChange={handleCheckbox} />
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
