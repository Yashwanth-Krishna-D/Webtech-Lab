import React from "react";
import { Row, Col } from "react-bootstrap";
import PostCard from "./PostCard";

function PostGrid({ posts }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {posts.map(post => (
        <Col key={post.id}>
          <PostCard title={post.title} description={post.description} />
        </Col>
      ))}
    </Row>
  );
}

export default PostGrid;
