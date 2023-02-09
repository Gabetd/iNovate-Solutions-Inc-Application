import React, { useState } from 'react';

  function FizzBuzz(num) {
  const arr = []
  for(let i = 1; i <= num ; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr.push(`FizzBuzz`)
    }else if(i % 5 === 0){
      arr.push(`Buzz`)
    }else if(i % 3 === 0){
      arr.push(`Fizz`)
    }else{
      arr.push(i)
    }
  }
  return arr
}

export default function InputValue (){
const [num, setNum] = useState(0)
const [result, setResult] = useState([])
const handleSubmit = async () => {
  console.log(num)
  const arr = await FizzBuzz(num)
  await setResult(arr)

}
const setNumFunc = (e) =>{
  if(e > 100){setNum(100)}
  else if(e < 0){setNum(0)}
  else{setNum(e)}
}
return (
  <div>
  <div className='center'>
    <label> Length:
      <input
        className="input"
        placeholder="FizzBuzz up to ..."
        type="number"
        min={0}
        max={100}
        value={num}
        onChange={(e) => setNumFunc(e.target.value)}
        required
        />
      </label>
      <button className="submit" onClick={() => handleSubmit()} type="submit" disabled={num === 0}>Submit</button>
      </div>
    <div className='AnswerHolder'>
    {result.map(el => ( <p className='answers'>{el}</p>))}
    </div>
  </div>
)

}
