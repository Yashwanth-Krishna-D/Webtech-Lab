import React from "react";
import { Container } from "react-bootstrap";
import PostGrid from "./PostGrid";

function Dashboard() {
  const posts = [
    { id: 1, title: "Intro to React", description: "Learn React basics including components and props." },
    { id: 2, title: "React Bootstrap Guide", description: "Build UIs quickly using React Bootstrap components." },
    { id: 3, title: "Passing Props", description: "Understand data flow using props in React." },
    { id: 4, title: "Reusable Components", description: "Make your UI modular and reusable." }
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Posts</h2>
      <PostGrid posts={posts} />
    </Container>
  );
}

export default Dashboard;
