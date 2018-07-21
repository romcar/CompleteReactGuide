import React from 'react'
import Char from '../Char/Char';
export default (props) => {
  return (
    <div>
    <h3>{props.username.split('').map((char, ind) => {
      return <Char click={props.click} char={char} key={ind} ind={ind} />
    })}</h3>
      <p onClick={() => console.log('ho')}> Laboris commodo culpa eiusmod aute ipsum.</p>
      <p>Est reprehenderit esse qui nostrud mollit et sit amet quis ipsum.</p>
    </div>
  )
}
