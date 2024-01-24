"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "./FormInput";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skaterFirstName: string;
  skaterLastName: string;
  skaterAge: string;
  skaterSkillLevel: string;
  moreInformation: string;
};

const Form = () => {
  const [isSending, setIsSending] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSending(false);
        console.log("Email sent:", result);
        toast.success("Email sent!");
        reset();
      } else {
        setIsSending(false);
        console.error("Email failed to send:", result);
        toast.error("Email failed to send");
      }
    } catch (error) {
      setIsSending(false);
      console.log("Network error:", error);
      toast.error("Network error");
    }
  };

  return (
    <>
      <p
        className={`${
          isSending ? "block" : "hidden"
        } fixed z-10 top-1/2 font-bold left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        Sending...
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full space-y-4 mt-4 ${
          isSending ? "opacity-20" : "opacity-100"
        }`}
      >
        {/* General Information */}
        <div className="space-y-4">
          <div className="flex gap-4 w-full">
            <FormInput
              title="First Name"
              name="firstName"
              register={register}
              errors={errors}
              validation={{
                required: "Please enter a first name",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Please only use letters",
                },
              }}
            />
            <FormInput
              title="Last Name"
              name="lastName"
              register={register}
              errors={errors}
              validation={{
                required: "Please enter a last name",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Please only use letters",
                },
              }}
            />
          </div>
          <div className="flex gap-4 w-full">
            <FormInput
              title="Email"
              name="email"
              register={register}
              errors={errors}
              validation={{
                required: "Please enter an email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              }}
            />
            <FormInput
              title="Phone"
              name="phone"
              register={register}
              errors={errors}
              validation={{
                required: "Please enter a phone number",
                pattern: {
                  value: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i,
                  message: "Please enter a valid phone number",
                },
              }}
            />
          </div>
        </div>

        <hr />

        {/* Skater Information */}
        <div className="space-y-4">
          <div className="flex gap-4 w-full">
            <FormInput
              title="Skater First Name"
              name="skaterFirstName"
              register={register}
              errors={errors}
              validation={{
                required: "Please enter a first name",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Please only use letters",
                },
              }}
            />
            <FormInput
              title="Skater Last Name"
              name="skaterLastName"
              register={register}
              errors={errors}
              validation={{
                required: "Please enter a last name",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Please only use letters",
                },
              }}
            />
          </div>
          <div className="flex gap-4 w-full">
            <FormInput
              title="Skater Age"
              name="skaterAge"
              register={register}
              errors={errors}
              validation={{
                required: "Please enter an age",
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "Please enter a valid age",
                },
                max: {
                  value: 100,
                  message: "Please enter a valid age",
                },
              }}
            />
            <FormInput
              title="Skater Skill Level"
              name="skaterSkillLevel"
              register={register}
              errors={errors}
              validation={{
                required: "Please enter a skill level",
              }}
            />
          </div>
        </div>

        <hr />

        {/* More Information */}
        <div className="flex flex-col flex-1">
          <label
            htmlFor="moreInformation"
            className="text-xs mb-1 text-slate-600"
          >
            More Information
          </label>
          <textarea
            {...register("moreInformation", { required: false })}
            className="w-full resize-none rounded shadow p-3 h-32"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="flex justify-end ">
          <Button>
            Send <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
