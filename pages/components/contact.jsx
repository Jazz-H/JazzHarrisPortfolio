import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({ mode: "all" });

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_7c7vejj",
        "template_dosbz1d",
        form.current,
        "EeJ_zgoP_X2vxEM7X"
      )
      .then(
        (result) => {
          reset({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
          alert("SUCCESS! your message has been submitted"),
        
        (error) => {
          console.log("errors");
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <label>Name </label>
        <input
          {...register("user_name", {
            required: "First and Last Name are required",
            minLength: {
              value: 4,
              message: "Name field requires 4 characters or more ",
            },
            maxLength: {
              value: 30,
              message: "Name field cannot exceed 30 characters long ",
            },
          })}
          type="text"
          placeholder="Please include your first and last name"
          name="user_name"
        />

        <p class="text-red-700">{errors.user_name?.message}</p>

        <label>Email</label>
        <input
          {...register("user_email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email must be valid",
            },
          })}
          type="email"
          placeholder="john.doe@gmail.com"
          name="user_email"
        />

        <p class="text-red-700">{errors.user_email?.message}</p>

        <label>Write me a message 👇</label>
        <textarea
          {...register("message", {
            required: "A message is required to submit form",
            minLength: {
              value: 2,
              message: "Message field cannot be blank",
            },
            maxLength: {
              value: 250,
              message: "message field cannot exceed more than 250 characters ",
            },
          })}
          name="message"
          placeholder="Hello World!"
        />

        <p class="text-red-700">{errors.message?.message}</p>
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;

    font-size: 16px;

    input {
      width: 100%;
      height: 50px;
      padding: 7px;
      outline: none;

      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(233, 0, 0, 0.8);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(233, 0, 0, 0.8);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(34 211 238);
      color: white;
      border: none;
    }

    input[type="submit"]:hover {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(6 182 212);
      color: white;
      border: none;
    }
  }
`;
