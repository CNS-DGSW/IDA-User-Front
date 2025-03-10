import styled, { css } from "styled-components"
import type {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from "styled-components"
import type { ThemeType } from "@dgswcns/design-token"

import type { ButtonProps } from "./types"

type SizeType = "xs" | "sm" | "md" | "lg"
type ButtonColorType = "primary" | "second" | "third"

const getSize: Record<SizeType, FlattenSimpleInterpolation> = {
  xs: css`
    width: 32px;
    height: 32px;
    font-size: 14px;
  `,
  sm: css`
    width: 78px;
    height: 48px;

    @media screen and (max-width: 500px) {
      width: 18.3vw;
    }
  `,
  md: css`
    width: 240px;
    height: 58px;
  `,
  lg: css`
    width: 288px;
    height: 58px;

    @media screen and (max-width: 500px) {
      width: 83vw;
      height: 48px;
    }
  `,
}

/**
 * @todo design token 수정 후 theme 적용
 */
const getColor: Record<
  ButtonColorType,
  FlattenInterpolation<ThemeProps<ThemeType>>
> = {
  primary: css`
    background-color: ${({ theme: { colors } }: ThemeProps<ThemeType>) =>
      colors.blue400};
    color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.white};
  `,
  second: css`
    background-color: #e8f4ff;
    color: #1485ee;
  `,
  third: css`
    background-color: #1e2f44;
    color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.gray400};
    border: ${({ theme: { colors } }: ThemeProps<ThemeType>) =>
      `1px solid ${colors.gray400} !important`};
  `,
}

export const ButtonStyle = styled.button<ButtonProps>`
  ${({ size }) => size && getSize[size]}
  ${({ color }) => color && getColor[color]};
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${({
    border,
    theme: { colors },
  }: ButtonProps & ThemeProps<ThemeType>) =>
    border ? `${border}px solid ${colors.blue400}` : "none"};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : "0px")};
  box-shadow: ${({ shadow }) =>
    shadow && "0px 4px 30px rgba(0, 0, 0, 0.25); border-radius: 30px;"};

  &:hover {
    ${({ hover }) => hover && `background: ${hover}`}
  }
  cursor: ${({ disable }) => (disable === true ? "not-allowed" : "pointer")};
`
