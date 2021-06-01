import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showinfo, setShowinfo] = useState(false)
  return <article className="question">
    <header className="">
      <h4>{title}</h4>
      <button onClick={() => {setShowinfo(!showinfo)}} className="btn">
        {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </header>
    {showinfo && <p>{info}</p>}
  </article>;
};

export default Question;
