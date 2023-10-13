"use client";
import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

function CreatePage() {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <>
      <BackButton></BackButton>
      <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </>
  );
}

export default CreatePage;
