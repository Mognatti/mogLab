import { useState } from "react";
import * as S from "./styles";
import { normalizePhone } from "../../functions/normalizePhone";
import { InputType } from "./types/types";
import bookReadingImg from "/img/book_reading.png";
import scientistGirlImg from "/img/scientist_girl.png";

export default function ContactMe() {
  const [phone, setPhone] = useState<string>();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    input: InputType
  ) {
    if (input.name === "tel") {
      const formattedPhone = normalizePhone(e.target.value);
      input.valueSet(formattedPhone);
    } else {
      input.valueSet(e.target.value);
    }
  }

  console.log(phone);

  return (
    <S.Container>
      <h3>Entre em contato!</h3>
      <S.Form>
        {inputData.map((input) => (
          <S.Input
            message={input.name === "message"}
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
        <button>Enviar!</button>
      </S.Form>
      <S.BookImage src={bookReadingImg} alt="book_reading_image" />
      <S.ScientisImg src={scientistGirlImg} alt="book_reading_image" />
    </S.Container>
  );
}
