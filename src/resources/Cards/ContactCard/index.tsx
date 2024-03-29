import React, { useState } from 'react';
import { Card, Input, Loading, Textarea } from '@nextui-org/react';
import { ButtonStyled, CardStyled, Form, GradientDiv, QuestionTitle, Title } from './styled';
import { Controller, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const { control, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    setIsLoading(true);

    try {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
          { name: data.name, email: data.email, message: data.message },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
          setMessageSent(true);
          reset();
          toast.success(
            <p>
              Your message was send! <br /> Thank you!
            </p>,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );
          setIsLoading(false);
        })
        .catch(() => {
          toast.error(
            <p>
              Something went wrong! 😔 <br /> Try again!
            </p>,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              progress: undefined,
              theme: 'light',
            },
          );
          setIsLoading(false);
        });
    } catch (error) {
      toast.error(
        <p>
          Something went wrong! 😔 <br /> Try again!
        </p>,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: 'light',
        },
      );
      setIsLoading(false);
    }
  };

  return (
    <GradientDiv>
      <CardStyled>
        <Card.Body style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Title>Contact Me</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <QuestionTitle>Your Name</QuestionTitle>
            <Controller
              control={control}
              name="name"
              defaultValue=""
              rules={{ required: 'Name is required' }}
              render={({ field, fieldState }) => (
                <Input
                  disabled={messageSent}
                  type="text"
                  placeholder="Whats your name?"
                  aria-label="name"
                  onChange={field.onChange}
                  value={field.value}
                  helperColor={fieldState.error && 'error'}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <QuestionTitle>Your Email</QuestionTitle>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email',
                },
              }}
              render={({ field, fieldState }) => (
                <Input
                  disabled={messageSent}
                  type="text"
                  placeholder="Whats your email?"
                  aria-label="email"
                  onChange={field.onChange}
                  value={field.value}
                  helperColor={fieldState.error && 'error'}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <QuestionTitle>Your Message</QuestionTitle>
            <Controller
              control={control}
              name="message"
              defaultValue=""
              rules={{
                required: 'Message is required',
                minLength: { value: 20, message: "Message didn't reach min length" },
              }}
              render={({ field, fieldState }) => (
                <Textarea
                  disabled={messageSent}
                  placeholder="What's your message?"
                  minRows={10}
                  aria-label="message"
                  onChange={field.onChange}
                  value={field.value}
                  helperColor={fieldState.error && 'error'}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <ButtonStyled auto disabled={messageSent} type="submit">
              {isLoading ? (
                <Loading size="md" type="spinner" color="white" />
              ) : messageSent ? (
                'Thank you for your message!'
              ) : (
                'Send Your Message'
              )}
            </ButtonStyled>
          </Form>
        </Card.Body>
      </CardStyled>
    </GradientDiv>
  );
}
