import React from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ items, baseUrl, cantFind }) {
  const { id } = useParams();

  // Find the item by ID
  const item = items.find((item) => item.id === id);

  // If item not found, redirect to cantFind page
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          {/* Additional item details rendering */}
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
          {/* Link back to the list page */}
          <Link to={baseUrl}>Back to List</Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
