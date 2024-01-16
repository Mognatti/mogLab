import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { normalizePhone } from "../../functions/normalizePhone";
import { InputType } from "./types/types";
import bookReadingImg from "/img/book_reading.png";
import scientistGirlImg from "/img/scientist_girl.png";
import useSendEmail from "../../hooks/useSendEmail";
import { Spinner } from "react-bootstrap";

export default function ContactMe() {
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const errorDivRef = useRef<HTMLDivElement | null>(null);
  const [{ isSending, sendEmail }] = useSendEmail();

  const inputData = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Nome...",
      value: name,
      valueSet: setName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "e-mail...",
      value: email,
      valueSet: setEmail,
    },
    {
      id: 3,
      name: "tel",
      type: "tel",
      placeholder: "Telefone...",
      value: phone,
      valueSet: setPhone,
    },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, input: InputType) {
    if (input.name === "tel") {
      const formattedPhone = normalizePhone(e.target.value);
      input.valueSet(formattedPhone);
    } else {
      input.valueSet(e.target.value);
    }
  }

  function buttonControl() {
    if (!name || name.length < 3 || name.length > 15 || !email || !phone || phone.length !== 15 || !message) {
      return true;
    }
  }

  useEffect(() => {
    if (name && errorDivRef.current && name.length > 15) {
      errorDivRef.current.innerHTML = "<p>O nome deve ter até 15 caracteres!</p>";
    } else if (errorDivRef.current) {
      errorDivRef.current.innerHTML = "";
    }
  }, [name]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await sendEmail(name, email, phone, message, e);
  }

  return (
    <S.Container>
      <h3>Entre em contato!</h3>
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        {inputData.map((input) => (
          <S.Input
            required
            key={input.id}
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            onChange={(e) => handleChange(e, input)}
          />
        ))}
        <S.TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="user-message"
          placeholder="Digite sua Mensagem..."
        />
        <div ref={errorDivRef}></div>
        <S.Button disabled={buttonControl()} type="submit">
          {isSending ? <Spinner size="sm" /> : "Enviar!"}
        </S.Button>
      </S.Form>
      <S.BookImage src={bookReadingImg} alt="book_reading_image" />
      <S.ScientisImg src={scientistGirlImg} alt="book_reading_image" />
    </S.Container>
  );
}
