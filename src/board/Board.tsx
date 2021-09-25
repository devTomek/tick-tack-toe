import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Cell = styled(Col)`
  min-height: 200px;
  min-width: 200px;
`;

// ----------------------------------

const Cell1 = styled(Cell)`
  border-bottom: 1px solid #000000;
`;

const Cell2 = styled(Cell)`
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
`;

const Cell3 = styled(Cell)`
  border-bottom: 1px solid #000000;
`;

// ----------------------------------

const Cell4 = styled(Cell)``;

const Cell5 = styled(Cell)`
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
`;

const Cell6 = styled(Cell)``;

// ----------------------------------

const Cell7 = styled(Cell)`
  border-top: 1px solid #000000;
`;

const Cell8 = styled(Cell)`
  border-left: 1px solid #000000;
  border-top: 1px solid #000000;
  border-right: 1px solid #000000;
`;

const Cell9 = styled(Cell)`
  border-top: 1px solid #000000;
`;

function Board() {
  return (
    <Container className="h-100 d-flex flex-column justify-content-center">
      <Row>
        <Cell1 />
        <Cell2 />
        <Cell3 />
      </Row>
      <Row>
        <Cell4 />
        <Cell5 />
        <Cell6 />
      </Row>
      <Row>
        <Cell7 />
        <Cell8 />
        <Cell9 />
      </Row>
    </Container>
  );
}

export default Board;
