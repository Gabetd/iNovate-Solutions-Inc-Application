import React, { useState } from 'react';

  function fibonacciSequence(length, y = 1, z = 2) {
    if (length === 0) {
        return [ ];
    } else if (length === 1) {
        return [ 1 ];
    }

    let seq = [1, 1];
    while (seq.length < length) {
        let last = seq[seq.length - y] || 1;
        let secondLast = seq[seq.length - z] || 1;
        let next = last + secondLast;
        seq.push(next);
    }
    return seq;
};


export default function FibonacciLength(){
  const [num, setNum] = useState(0)
  const [result, setResult] = useState([])
  const [y, setY] = useState(1);
  const [z, setZ] = useState(2);

  const handleSubmit = async () => {
    console.log(num)
    const arr = await fibonacciSequence(num, y, z)
    await setResult(arr)

  }
  const setNumFunc = (e) =>{
    if(e > 40){setNum(40)}
    else if(e < 0){setNum(0)}
    else{setNum(e)}
  }
  const setZFunc = (e) => {
    if(e > 5){setZ(5)}
    else if(e < 1){setZ(1)}
    else{setZ(e)}
  }
  const setYFunc = (e) => {
    if(e > 5){setY(5)}
    else if(e < 1){setY(1)}
    else{setY(e)}
  }
  return (
    <div>
    <div className='center'>
      <label> Length:
        <input
          className="input"
          placeholder="fibonacci Length ..."
          type="number"
          min={0}
          max={20}
          value={num}
          onChange={(e) => setNumFunc(e.target.value)}
          required
          />
        </label>
        <label> Y:
        <input
          className="inputY"
          placeholder="y"
          type="number"
          min={1}
          max={5}
          value={y}
          onChange={(a) => setYFunc(a.target.value)}
          required
          />
        </label>
        <label> Z:
        <input
          className="inputZ"
          placeholder="z"
          type="number"
          min={1}
          max={5}
          value={z}
          onChange={(b) => setZFunc(b.target.value)}
          required
          />
        </label>
        <button className="submit" onClick={() => handleSubmit()} type="submit" disabled={num === 0}>submit</button>
        </div>
      <div className='AnswerHolder'>
      {result.map(el => ( <p className='answers'>{el}</p>))}
      </div>
    </div>
  )

  }
