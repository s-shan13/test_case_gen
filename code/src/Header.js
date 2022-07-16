import React from 'react'
import './header.css'
import GenerateIntCase from './GenerateIntCase'
import GenerateStrCase from './GenerateStrCase'

export default function Header() {

  const [showIntGen, setShowIntGen] = React.useState(true)
  const [showStrGen, setShowStrGen] = React.useState(false)

  function intClick(){
    setShowIntGen(true)
    setShowStrGen(false)
  }

  function strClick(){
    setShowIntGen(false)
    setShowStrGen(true)
  }

  return (
    <div >
      <header className='header'>
        <p onClick={intClick}>Generate Integer Cases</p>
        <div>|</div>
        <p onClick={strClick}>Generate String Cases</p>
      </header>
      <div className='mainPage'>
        {showIntGen? <GenerateIntCase />: showStrGen? <GenerateStrCase />: null}
      </div>
        
    </div> 
  )
}
