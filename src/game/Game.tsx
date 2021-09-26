import React, { useEffect, useState } from "react";
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
  const [mark, setMark] = useState<Mark>("O");
  const winCondition =
    /**
     * XXX OOO
     * ... ...
     * ... ...
     */
    (cell1 === "X" && cell2 === "X" && cell3 === "X") ||
    (cell1 === "O" && cell2 === "O" && cell3 === "O") ||
    /**
     * ... ...
     * XXX OOO
     * ... ...
     */
    (cell4 === "X" && cell5 === "X" && cell6 === "X") ||
    (cell4 === "O" && cell5 === "O" && cell6 === "O") ||
    /**
     * ... ...
     * ... ...
     * XXX OOO
     */
    (cell7 === "X" && cell8 === "X" && cell9 === "X") ||
    (cell7 === "O" && cell8 === "O" && cell9 === "O") ||
    /**
     * X.. O..
     * X.. O..
     * X.. O..
     */
    (cell1 === "X" && cell4 === "X" && cell7 === "X") ||
    (cell1 === "O" && cell4 === "O" && cell7 === "O") ||
    /**
     * .X. .O.
     * .X. .O.
     * .X. .O.
     */
    (cell2 === "X" && cell5 === "X" && cell8 === "X") ||
    (cell2 === "O" && cell5 === "O" && cell8 === "O") ||
    /**
     * ..X ..O
     * ..X ..O
     * ..X ..O
     */
    (cell3 === "X" && cell6 === "X" && cell9 === "X") ||
    (cell3 === "O" && cell6 === "O" && cell9 === "O") ||
    /**
     * X.. O..
     * .X. .O.
     * ..X ..O
     */
    (cell1 === "X" && cell5 === "X" && cell9 === "X") ||
    (cell1 === "O" && cell5 === "O" && cell9 === "O") ||
    /**
     * ..X ..O
     * .X. .O.
     * X.. O..
     */
    (cell3 === "X" && cell5 === "X" && cell7 === "X") ||
    (cell3 === "O" && cell5 === "O" && cell7 === "O");

  useEffect(() => {
    if (winCondition) {
      window.alert(JSON.stringify(mark));
    }
  }, [winCondition]);

  const getMark = () => (mark === "X" ? "O" : "X");

  const handleMark = (prevMark: Mark) => {
    if (prevMark) return prevMark;
    const mark = getMark();
    setMark(mark);
    return mark;
  };

  return (
    <Container className="h-100 d-flex flex-column justify-content-center">
      <Row>
        <Cell1 onClick={() => setCell1(handleMark)}>{cell1}</Cell1>
        <Cell2 onClick={() => setCell2(handleMark)}>{cell2}</Cell2>
        <Cell3 onClick={() => setCell3(handleMark)}>{cell3}</Cell3>
      </Row>
      <Row>
        <Cell4 onClick={() => setCell4(handleMark)}>{cell4}</Cell4>
        <Cell5 onClick={() => setCell5(handleMark)}>{cell5}</Cell5>
        <Cell6 onClick={() => setCell6(handleMark)}>{cell6}</Cell6>
      </Row>
      <Row>
        <Cell7 onClick={() => setCell7(handleMark)}>{cell7}</Cell7>
        <Cell8 onClick={() => setCell8(handleMark)}>{cell8}</Cell8>
        <Cell9 onClick={() => setCell9(handleMark)}>{cell9}</Cell9>
      </Row>
    </Container>
  );
}

export default Game;
