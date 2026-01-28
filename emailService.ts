export const sendEmail = async (
  data: { id: string; email: string; magnitude: string },
  lang: "ES" | "EN"
) => {
  const isSpanish = lang === "ES";

  const subject = isSpanish
    ? "Nueva Solicitud de Registro DXOF+"
    : "New DXOF+ Registration Request";

  const emailBody = isSpanish
    ? `
Nueva solicitud de registro DXOF+:

Decisor Principal: ${data.id}
Canal Corporativo: ${data.email}
Exposición Estimada: ${data.magnitude}

Enviado desde el formulario de registro.
    `
    : `
New DXOF+ registration request:

Principal Decisor: ${data.id}
Corporate Channel: ${data.email}
Estimated Exposure: ${data.magnitude}

Sent from registration form.
    `;

  const mailtoLink = `mailto:acuba0103@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(emailBody)}`;
  window.open(mailtoLink, "_blank");

  return Promise.resolve();
};
