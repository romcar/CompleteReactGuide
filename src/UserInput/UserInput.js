import React from 'react'

export default (props) => {
  return (
    <div>
      <input name="username" value={props.username} onChange={(e) => props.onChange(e)} placeholder="User input..."/>
    </div>
  )
}
