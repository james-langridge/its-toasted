import { useCallback, useEffect } from "react";
import styled from "styled-components";

import { intentBgColors, intentColors, intentIcons } from "./constants";
import { Close } from "./icons";
import { limitStringLength } from "./lib";
import { useToastsDispatch } from "./ToastsContext";
import { ContainerProps, ToastProps } from "./types";

const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${(props) => intentBgColors[props.intent]};
  border-radius: 6px;
  color: ${(props) => intentColors[props.intent]};
  display: flex;
  margin-bottom: 10px;
  max-width: 550px;
  padding: 12px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
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

export function Toast({
  toast: { id, intent, autoCloseDuration = 6000, title = intent, message },
}: ToastProps) {
  const dispatch = useToastsDispatch();
  const Icon = intentIcons[intent];

  const deleteToast = useCallback(() => {
    dispatch({ type: "deleted", id });
  }, [dispatch, id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      deleteToast();
    }, autoCloseDuration);

    return () => clearTimeout(timer);
  }, [autoCloseDuration, deleteToast]);

  return (
    <Container intent={intent}>
      <Icon />
      <Content>
        <Title>{limitStringLength(title)}</Title>
        <Message>{message}</Message>
      </Content>
      <div
        onClick={deleteToast}
        onKeyDown={deleteToast}
        role="button"
        tabIndex={0}
      >
        <StyledClose />
      </div>
    </Container>
  );
}
