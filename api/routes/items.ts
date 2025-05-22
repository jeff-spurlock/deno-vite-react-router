function GET() {
  const data = {
    items: [
      { id: 1, name: "Item From Route 1" },
      { id: 2, name: "Item From Route 2" },
    ],
  };
  return data
}

export { GET };