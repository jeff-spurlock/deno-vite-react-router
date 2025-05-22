import { useEffect, useState } from "react";

export default function Login() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/test-data', {
      method: 'POST',
      body: JSON.stringify({ name: 'John', value: 48 }),
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