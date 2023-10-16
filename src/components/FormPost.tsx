"use client";
import { FormInputPost } from "@/types";
import { Tag } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}
const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  //fetch list tags
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });

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
      {isLoadingTags ? (
        <span className="loading loading-ring loading-md"></span>
      ) : (
        <select
          className="select select-bordered w-full max-w-lg"
          {...register("tagId", { required: true })}
          defaultValue={""}
        >
          <option value={""}>select tags</option>
          {}
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update Post" : " Create Post"}
      </button>
    </form>
  );
};

export default FormPost;
