import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions] = useState(data)
  return <main className="container">
    <h4>questions and answers about login</h4>
    <section className="info">
      {questions.map((question)=>{
        return <SingleQuestion 
          key={question.id} 
          {...question} 
        />
      })}
    </section>
    </main>;
}

export default App;
