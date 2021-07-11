import React from "react";
import { Container, StyledInput, InputIconContainer } from "./styles";
import Image, { ImageProps } from "next/image";

type Props = React.ComponentProps<typeof StyledInput> & {
  icon?: ImageProps["src"];
};

function Input({ icon, ...props }: Props) {
  return (
    <Container hasIcon={icon}>
      {icon && (
        <InputIconContainer>
          {/* @ts-ignore */}
          <Image src={icon} width={15} height={15} />
        </InputIconContainer>
      )}
      <StyledInput {...props} />
    </Container>
  );
}

export default Input;
