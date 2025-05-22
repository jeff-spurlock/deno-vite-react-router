import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => setData(data.items))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  )
}

export default App
