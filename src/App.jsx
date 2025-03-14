import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://mainpy-news.onrender.com')
      .then((res) => res.text())
      .then((text) => setData(text))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>HaveYourSay</h1>
      <p>Backend Response: {data}</p>
    </div>
  );
}

export default App;