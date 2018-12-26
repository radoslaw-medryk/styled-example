import styled from "styled-components";
import { ColorBox } from "./ColorBox";

export type BorderedColorBoxProps = {
    borderColor: string;
};

export const BorderedColorBox = styled(ColorBox)`
    border: 1px dotted ${(props: BorderedColorBoxProps) => props.borderColor};
`;
