import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function ExamplePage() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['example-route'],
    queryFn: async () => {
      const response = await fetch(
        '/api/example-route', {
          method: 'POST',
          body: JSON.stringify({ name: 'John', value: 50 }),
        }
      )
      return await response.json()
    },
  })
  if (isPending) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }
  if (isFetching) {
    return <div>Fetching...</div>
  }
  if (data) {
    return <div>Data: {JSON.stringify(data)}</div>
  }
  return <div>No data</div>
}