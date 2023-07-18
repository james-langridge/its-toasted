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
  max-width: 550px;
  padding: 12px;
  position: relative;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Message = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const StyledClose = styled(Close)`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

const Wrapper = styled.div`
  bottom: 10px;
  position: fixed;
`;

export function Toast({
  autoCloseDuration = 6,
  intent,
  message,
  title = intent,
}: ToastProps) {
  const Icon = intentIcons[intent];

  return (
    <Wrapper>
      <Container intent={intent}>
        <Icon />
        <Content>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Content>
        <StyledClose />
      </Container>
    </Wrapper>
  );
}
