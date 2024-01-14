import { useState } from "react";

export default function useSendEmail() {
  const [isSending, setIsSending] = useState(false);

  async function sendEmail(
    name: string,
    email: string,
    phone: string,
    message: string,
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    const form: HTMLFormElement = e.currentTarget;
    const URL = `${import.meta.env.VITE_API_BASE_URL}/email`;

    if (form.checkValidity()) {
      try {
        setIsSending(true);
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            message: message,
          }),
        });
        if (response.ok) {
          setIsSending(false);
          alert("E-mail enviado com sucesso!");
          window.location.reload();
        } else {
          setIsSending(false);
          throw new Error("Erro ao enviar o e-mail!");
        }
      } catch (error) {
        setIsSending(false);
        console.log(error);
      }
    }
  }
  return [{ isSending, sendEmail }];
}
