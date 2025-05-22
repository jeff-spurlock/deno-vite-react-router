import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/example-route')
      .then(response => response.json())
      .then(data => setData(data.items))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  )
}

export default Home
