import React from "react";
import { Card, Button } from "react-bootstrap";

function PostCard({ title, description }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => alert(`Read more about: ${title}`)}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
