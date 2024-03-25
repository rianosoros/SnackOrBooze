import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Card, CardTitle, CardBody, CardText } from "reactstrap";
import "./Menu.css";

function GenericList({ items, baseUrl }) {
  return (
    <Card>
      <CardBody>
        <CardTitle className="font-weight-bold text-center">
          {baseUrl.split("/")[1]}
        </CardTitle>
        <CardText className="font-italic">Select an item to view details</CardText>
      </CardBody>
        <div>
          <ListGroup>
          {items.map((item) => (
            <Link to={`${baseUrl}/${item.id}`} key={item.id}>
              <ListGroupItem>{item.name}</ListGroupItem>
            </Link>
          ))}
        </ListGroup>
      
    </div>
    </Card>
    
  );
}

export default GenericList;
