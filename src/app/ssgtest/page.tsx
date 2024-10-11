import React from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const SsgTestPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/10");
  const post: Post = await res.json();

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default SsgTestPage;
