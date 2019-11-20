import React from 'react'

const Frame = ({ frame }) => {
  const { rolls, score } = frame
  const { first, second } = rolls

  const styleFirstRoll = () => {
    if (score === null) return '.'
    if (first === 10) return ''
    return first
  }

  const styleSecondRoll = () => {
    if (first === 10) return 'X'
    if (score === null) return '.'
    if (first + second === 10) return '\\'
    return second
  }

  return (
    <div className="frame">
      <div  className="rolls">
        <div className="roll">
          {styleFirstRoll()}
        </div>
        <div className="roll">
          {styleSecondRoll()}
        </div>
      </div>
      <div>{score}</div>
    </div>
)}

export default Frame