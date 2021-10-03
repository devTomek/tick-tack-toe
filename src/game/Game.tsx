import React, { useEffect, useState, MouseEvent, useRef, useMemo } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled, { css } from "styled-components";

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

const Cell = styled("div")`
  min-height: 200px;
  min-width: 200px;
  font-size: 8rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const MarkPicker = styled(Row)`
  font-size: 4rem;
`;

const GameButton = styled(Button)`
  font-size: inherit;
`;

const animatedGradient = css`
  background: linear-gradient(
    rgba(255, 0, 251, 1) 0%,
    rgba(162, 41, 225, 1) 51%,
    rgba(71, 197, 255, 1) 100%
  );
  background-size: 400% 400%;
  animation: gradient 3s ease-in-out infinite;

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

const VerticalDivider = styled("div")`
  width: 1px;
  border-radius: 25px;
  ${animatedGradient}
`;

const HorizontalDivider = styled("div")`
  height: 20px;
  border-radius: 25px;
  ${animatedGradient}
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
        <Col>
          <Cell id="cell1">{state.cell1}</Cell>
          <HorizontalDivider />
          <Cell id="cell2">{state.cell2}</Cell>
          <HorizontalDivider />
          <Cell id="cell3">{state.cell3}</Cell>
        </Col>
        <VerticalDivider />
        <Col>
          <Cell id="cell4">{state.cell4}</Cell>
          <HorizontalDivider />
          <Cell id="cell5">{state.cell5}</Cell>
          <HorizontalDivider />
          <Cell id="cell6">{state.cell6}</Cell>
        </Col>
        <VerticalDivider />
        <Col>
          <Cell id="cell7">{state.cell7}</Cell>
          <HorizontalDivider />
          <Cell id="cell8">{state.cell8}</Cell>
          <HorizontalDivider />
          <Cell id="cell9">{state.cell9}</Cell>
        </Col>
      </Row>
    </Container>
  );
}

export default Game;
