function GET() {
  return {
    message: "Hello, world!",
  };
}

interface POSTParams {
  name: string;
  value: number;
}

function POST(params: POSTParams) {
  return {
    message: `Hello, ${params.name}! Your value is ${params.value}.`,
  };
}

export { GET, POST };
export type { POSTParams };