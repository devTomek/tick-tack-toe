import React from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";
import { Mark } from "./Game";
import Text from "../presentational/Text";
import styled from "styled-components";

const WinnerText = styled(Text)`
  font-size: 6rem;
`;

const ResetButton = styled(Button)`
  font-size: 2rem;
`;

interface Props {
  onClick: () => void;
  winner: Mark;
}

function Win({ onClick, winner }: Props) {
  return (
    <Modal
      show={!!winner}
      onHide={onClick}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <ModalBody>
        <WinnerText className="text-center">{winner} won!</WinnerText>
      </ModalBody>
      <ResetButton variant="light" onClick={onClick}>
        <Text>Reset</Text>
      </ResetButton>
    </Modal>
  );
}

export default Win;
