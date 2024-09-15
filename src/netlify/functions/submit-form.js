// netlify/functions/submit-form.js
exports.handler = async (event, context) => {
  const formData = JSON.parse(event.body);
  console.log("Form data received:", formData);

  // Aqui você pode adicionar a lógica para processar os dados do formulário,
  // como enviar um email, salvar em um banco de dados, etc.

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submission successful" }),
  };
};
