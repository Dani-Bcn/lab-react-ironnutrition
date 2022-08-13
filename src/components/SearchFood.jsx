import React from 'react'

export default function SearchFood({onFood}) {
  return (
    <div>
        <input type="text"   placeholder="Search food" onChange={(e)=>onFood(e.target.value)}/>
    </div>
  )
}
