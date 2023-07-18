import { useEffect } from "react";
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
  min-width: 550px;
  padding: 12px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    min-width: 300px;
  }
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
  autoCloseDuration = 6000,
  intent,
  message,
  setShowToast,
  showToast,
  title = intent,
}: ToastProps) {
  const Icon = intentIcons[intent];

  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timer = setTimeout(() => {
      setShowToast(false);
    }, autoCloseDuration);

    return () => clearTimeout(timer);
  }, [autoCloseDuration, setShowToast, showToast]);

  if (!showToast) {
    return null;
  }

  return (
    <Wrapper>
      <Container intent={intent}>
        <Icon />
        <Content>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Content>
        <div
          onClick={() => setShowToast(false)}
          onKeyDown={() => setShowToast(false)}
          role="button"
          tabIndex={0}
        >
          <StyledClose />
        </div>
      </Container>
    </Wrapper>
  );
}
