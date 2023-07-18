import styled from "styled-components";

import { intentBgColors, intentColors, intentIcons } from "./constants";
import { Close } from "./icons";
import { ContainerProps, ToastProps } from "./types";

const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${(props) => intentBgColors[props.intent]};
  border-radius: 6px;
  color: ${(props) => intentColors[props.intent]};
  display: flex;
  width: 100%;
  padding: 12px;
  position: relative;
  max-width: 550px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Message = styled.div``;

const StyledClose = styled(Close)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export function Toast({
  autoCloseDuration = 6,
  intent,
  message,
  title = intent,
}: ToastProps) {
  const Icon = intentIcons[intent];

  return (
    <Container intent={intent}>
      <Icon />
      <Content>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <StyledClose />
    </Container>
  );
}
