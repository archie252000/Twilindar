import React, {useState} from 'react'

export const TextArea = ({text, changeTweetTextAtindex, index}) => {
    const [displayValue, setDisplayValue] = useState(text);
  return (
    <textarea value={displayValue} maxLength="280" onChange={(e)=>{changeTweetTextAtindex(index, e.target.value); setDisplayValue(e.target.value)}} className= "tweet-text" />
  )
}
