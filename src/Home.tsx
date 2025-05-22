import { useQuery } from "@tanstack/react-query";
import React from "react";


function Home() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['example-route'],
    queryFn: async () => {
      const response = await fetch(
        '/api/example-route',
      )
      return await response.json()
    },
  })

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
      {isFetching && <div>Fetching...</div>}
    </>
  )
}

export { Home }
