import React, { useState } from 'react';

function CombinedSequence(length, y = 1, z = 2, fizz = 'Fizz', buzz = 'Buzz', a = 3, b = 5) {
  if (length === 0) {
      return [ ];
  } else if (length === 1) {
      return [ 1 ];
  }
  let seq = [1, 1];
  let seq2 = [1, 1];
  while (seq.length < length) {
      let last = seq2[seq.length - y] || 1;
      let secondLast = seq2[seq.length - z] || 1;
      let next = last + secondLast;
      if(next % a === 0 && next % b === 0){seq.push(`${fizz}${buzz}`); seq2.push(next)}
      else if(next % b === 0){seq.push(`${buzz}`); seq2.push(next)}
      else if(next % a === 0){seq.push(`${fizz}`); seq2.push(next)}
      else{seq.push(next); seq2.push(next)}
}
  return seq;
};


export default function Combined(){
  const [num, setNum] = useState(0)
  const [result, setResult] = useState([])
  const [fizz, setFizz] = useState('Fizz')
  const [buzz, setBuzz] = useState('Buzz')
  const [a, setA] = useState(3)
  const [b, setB] = useState(5)
  const [y, setY] = useState(1);
  const [z, setZ] = useState(2);

  const handleSubmit = async () => {
    console.log(num)
    const arr = await CombinedSequence(num, y, z, fizz, buzz, a, b)
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
  const setAFunc = (e) => {
    if(e > 20){setA(20)}
    else if(e < 2){setA(2)}
    else{setA(e)}
  }
  const setBFunc = (e) => {
    if(e > 20){setB(20)}
    else if(e < 2){setB(2)}
    else{setB(e)}
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
          className="input"
          placeholder="y"
          type="number"
          min={1}
          max={5}
          value={y}
          onChange={(e) => setYFunc(e.target.value)}
          required
          />
        </label>
        <label> Z:
        <input
          className="input"
          placeholder="z"
          type="number"
          min={1}
          max={5}
          value={z}
          onChange={(e) => setZFunc(e.target.value)}
          required
          />
        </label>
        <label> Fizz:
        <input
          className="input"
          placeholder="Fizz"
          type="text"
          value={fizz}
          onChange={(e) => setFizz(e.target.value)}
          required
          />
        </label>
        <label> Buzz:
        <input
          className="input"
          placeholder="Buzz"
          type="text"
          value={buzz}
          onChange={(e) => setBuzz(e.target.value)}
          required
          />
        </label>
        <label> A:
        <input
          className="input"
          placeholder="a"
          type="number"
          min={2}
          max={20}
          value={a}
          onChange={(e) => setAFunc(e.target.value)}
          required
          />
          </label>
          <label> B:
          <input
          className="input"
          placeholder="b"
          type="number"
          min={2}
          max={20}
          value={b}
          onChange={(e) => setBFunc(e.target.value)}
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
