import React, {
  useEffect,
  useState,
  MouseEvent,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

type Mark = "X" | "O" | "";

interface State {
  cell1: Mark;
  cell2: Mark;
  cell3: Mark;
  cell4: Mark;
  cell5: Mark;
  cell6: Mark;
  cell7: Mark;
  cell8: Mark;
  cell9: Mark;
}

const Cell = styled(Col)`
  min-height: 200px;
  min-width: 200px;
  font-size: 8rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
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

const MarkPicker = styled(Row)`
  font-size: 4rem;
`;

const GameButton = styled(Button)`
  font-size: inherit;
`;

function Game() {
  const initialState = useRef<State>({
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
    cell5: "",
    cell6: "",
    cell7: "",
    cell8: "",
    cell9: "",
  });
  const [state, setState] = useState<State>(initialState.current);
  const [mark, setMark] = useState<Mark>("");
  const winCondition = useMemo(
    () =>
      /**
       * XXX OOO
       * ... ...
       * ... ...
       */
      (state.cell1 === "X" && state.cell2 === "X" && state.cell3 === "X") ||
      (state.cell1 === "O" && state.cell2 === "O" && state.cell3 === "O") ||
      /**
       * ... ...
       * XXX OOO
       * ... ...
       */
      (state.cell4 === "X" && state.cell5 === "X" && state.cell6 === "X") ||
      (state.cell4 === "O" && state.cell5 === "O" && state.cell6 === "O") ||
      /**
       * ... ...
       * ... ...
       * XXX OOO
       */
      (state.cell7 === "X" && state.cell8 === "X" && state.cell9 === "X") ||
      (state.cell7 === "O" && state.cell8 === "O" && state.cell9 === "O") ||
      /**
       * X.. O..
       * X.. O..
       * X.. O..
       */
      (state.cell1 === "X" && state.cell4 === "X" && state.cell7 === "X") ||
      (state.cell1 === "O" && state.cell4 === "O" && state.cell7 === "O") ||
      /**
       * .X. .O.
       * .X. .O.
       * .X. .O.
       */
      (state.cell2 === "X" && state.cell5 === "X" && state.cell8 === "X") ||
      (state.cell2 === "O" && state.cell5 === "O" && state.cell8 === "O") ||
      /**
       * ..X ..O
       * ..X ..O
       * ..X ..O
       */
      (state.cell3 === "X" && state.cell6 === "X" && state.cell9 === "X") ||
      (state.cell3 === "O" && state.cell6 === "O" && state.cell9 === "O") ||
      /**
       * X.. O..
       * .X. .O.
       * ..X ..O
       */
      (state.cell1 === "X" && state.cell5 === "X" && state.cell9 === "X") ||
      (state.cell1 === "O" && state.cell5 === "O" && state.cell9 === "O") ||
      /**
       * ..X ..O
       * .X. .O.
       * X.. O..
       */
      (state.cell3 === "X" && state.cell5 === "X" && state.cell7 === "X") ||
      (state.cell3 === "O" && state.cell5 === "O" && state.cell7 === "O"),
    [state]
  );

  const toggleMark = (mark: Mark) => (mark === "X" ? "O" : "X");

  const reset = () => {
    setState(initialState.current);
    setMark("");
  };

  useEffect(() => {
    if (winCondition) {
      // get previous mark because winCondition is checked after toggleMark
      const winner = toggleMark(mark);
      alert(winner);
      reset();
    }
  }, [mark]);

  const isCell = (id: string) => id.includes("cell");

  const handleBoardClick = (e: MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLDivElement).id;
    const value = (e.target as HTMLDivElement).textContent;
    if (!id || !mark || value) return;

    if (isCell(id)) {
      setState((prevState) => ({
        ...prevState,
        [id]: mark,
      }));
      setMark(toggleMark);
    }
  };

  return (
    <Container className="h-100 d-flex flex-column justify-content-center">
      <MarkPicker className="text-center p-4">
        {mark ? (
          <p className="fixed-top p-4">{mark}'s turn</p>
        ) : (
          <p>Choose Mark</p>
        )}
        {mark ? (
          <Row className="d-flex justify-content-center m-4">
            <GameButton
              className="w-50"
              variant="light"
              size="lg"
              onClick={reset}
            >
              Reset
            </GameButton>
          </Row>
        ) : (
          <Row>
            <Col>
              <GameButton
                variant="light"
                size="lg"
                className="w-100"
                onClick={() => setMark("O")}
              >
                O
              </GameButton>
            </Col>
            <Col>
              <GameButton
                variant="light"
                size="lg"
                className="w-100"
                onClick={() => setMark("X")}
              >
                X
              </GameButton>
            </Col>
          </Row>
        )}
      </MarkPicker>
      <Row onClick={handleBoardClick}>
        <Row>
          <Cell1 id="cell1">{state.cell1}</Cell1>
          <Cell2 id="cell2">{state.cell2}</Cell2>
          <Cell3 id="cell3">{state.cell3}</Cell3>
        </Row>
        <Row>
          <Cell4 id="cell4">{state.cell4}</Cell4>
          <Cell5 id="cell5">{state.cell5}</Cell5>
          <Cell6 id="cell6">{state.cell6}</Cell6>
        </Row>
        <Row>
          <Cell7 id="cell7">{state.cell7}</Cell7>
          <Cell8 id="cell8">{state.cell8}</Cell8>
          <Cell9 id="cell9">{state.cell9}</Cell9>
        </Row>
      </Row>
    </Container>
  );
}

export default Game;
