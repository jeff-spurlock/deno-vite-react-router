import React, { useEffect, useState } from "react";

export default function ExamplePage() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/example-route', {
      method: 'POST',
      body: JSON.stringify({ name: 'John', value: 50 }),
    })
      .then(response => response.json())
      .then(data => setData(data))
  }, []);
  return (
    <div>
      <h1>Login</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}