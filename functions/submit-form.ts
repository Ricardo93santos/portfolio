import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  const data = JSON.parse(event.body || '{}');
  console.log("Form data received:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Formulário enviado com sucesso!" }),
  };
};

export { handler };
