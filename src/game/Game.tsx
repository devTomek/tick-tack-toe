import React, { MouseEvent, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

type Mark = "X" | "O" | "";

const Cell = styled(Col)`
  min-height: 200px;
  min-width: 200px;
  font-size: 8rem;
  text-align: center;
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

function Game() {
  const [cell1, setCell1] = useState<Mark>("");
  const [cell2, setCell2] = useState<Mark>("");
  const [cell3, setCell3] = useState<Mark>("");
  const [cell4, setCell4] = useState<Mark>("");
  const [cell5, setCell5] = useState<Mark>("");
  const [cell6, setCell6] = useState<Mark>("");
  const [cell7, setCell7] = useState<Mark>("");
  const [cell8, setCell8] = useState<Mark>("");
  const [cell9, setCell9] = useState<Mark>("");

  // TODO rather choose player, not toggle sign
  const getMark = (mark: Mark) => (mark === "X" ? "O" : "X");

  return (
    <Container className="h-100 d-flex flex-column justify-content-center">
      <Row>
        <Cell1 onClick={() => setCell1(getMark)}>{cell1}</Cell1>
        <Cell2 onClick={() => setCell2(getMark)}>{cell2}</Cell2>
        <Cell3 onClick={() => setCell3(getMark)}>{cell3}</Cell3>
      </Row>
      <Row>
        <Cell4 onClick={() => setCell4(getMark)}>{cell4}</Cell4>
        <Cell5 onClick={() => setCell5(getMark)}>{cell5}</Cell5>
        <Cell6 onClick={() => setCell6(getMark)}>{cell6}</Cell6>
      </Row>
      <Row>
        <Cell7 onClick={() => setCell7(getMark)}>{cell7}</Cell7>
        <Cell8 onClick={() => setCell8(getMark)}>{cell8}</Cell8>
        <Cell9 onClick={() => setCell9(getMark)}>{cell9}</Cell9>
      </Row>
    </Container>
  );
}

export default Game;
