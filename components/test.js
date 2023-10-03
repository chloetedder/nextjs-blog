import React from 'react';

export default function Test() {

  function handleSubmit(e) {
    e.preventDefault();
    const hitBtn = async () => {
      const res = await fetch('/api/hello', {
        method: 'POST',
        body: JSON.stringify({ test: 'chloe'})
      })
      return res.json();
    }
    hitBtn().then(data => console.log('chloe data', data))
  }
  return <div>Chloe component
    <button onClick={handleSubmit}>Click</button>
  </div>;
}
