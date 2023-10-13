"use client";
import { FormInputPost } from "@/types";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}
const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        placeholder="Post title...."
        {...register("title", { required: true })}
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        className="textarea textarea-bordered w-full max-w-lg "
        placeholder="Post content  ..."
        {...register("content", { required: true })}
      ></textarea>
      <select
        className="select select-bordered w-full max-w-lg"
        {...register("tags", { required: true })}
        defaultValue={""}
      >
        <option value={""}>select tags</option>
        <option>javaScript</option>
        <option>PHP</option>
        <option>Python</option>
      </select>

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update Post" : " Create Post"}
      </button>
    </form>
  );
};

export default FormPost;
