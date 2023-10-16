import { db } from "@/app/db/db";
import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import { Tag } from "lucide-react";
import React, { FC } from "react";

interface BlogDetailPageParams {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },

    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return response;
}

const BlogDetailPage: FC<BlogDetailPageParams> = async ({ params }) => {
  const post = await getPost(params.id);
  return (
    <>
      <BackButton></BackButton>
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction id={params.id} />
      </div>
      <span className="badge badge-neutral">{post?.tag.name}</span>
      <p className="text-slate-300">{post?.content}</p>
    </>
  );
};

export default BlogDetailPage;
