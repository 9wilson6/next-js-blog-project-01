import PostCard from "@/components/PostCard";
import Image from "next/image";
import { db } from "./db/db";

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.map((posts) => (
        <PostCard key={posts.id} post={posts}></PostCard>
      ))}
    </main>
  );
}
