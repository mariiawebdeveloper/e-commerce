import React, { useState } from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0060cb;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  font-size: 24px;
`;

export const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // implement form submission logic here

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");

    // Show success message
    setShowSuccessMessage(true);

    // Reset success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
      <ContactWrapper>
        <Title>Зв'язатись з нами</Title>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Ваше ім'я:</label>
          <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          />
          <label htmlFor="email">Пошта еmail:</label>
          <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
          <label htmlFor="message">Ваше повідомлення:</label>
          <TextArea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
          ></TextArea>
          <Button type="submit">Відправити</Button>
          {showSuccessMessage && (
              <SuccessMessage>Відгук надіслано!!</SuccessMessage>
          )}
        </Form>
      </ContactWrapper>
  );
};
