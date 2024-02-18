import cn from "classnames";

export enum ButtonType {
  PRIMARY_LARGE = "PRIMARY_LARGE",
  PRIMARY_SMALL = "PRIMARY_SMALL",
  PRIMARY_LARGE_OUTLINE = "PRIMARY_LARGE_OUTLINE",
  PRIMARY_SMALL_OUTLINE = "PRIMARY_SMALL_OUTLINE",
  PRIMARY_LARGE_ROUNDED = "PRIMARY_LARGE_ROUNDED",
  PRIMARY_SMALL_ROUNDED = "PRIMARY_SMALL_ROUNDED",
  BLACK_LARGE = "BLACK_LARGE",
  BLACK_LARGE_OUTLINE = "BLACK_LARGE_OUTLINE",
  BLACK_SMALL_ROUNDED = "BLACK_SMALL_ROUNDED",
  GRAY_LARGE = "GRAY_LARGE",
}

export const ButtonVariable = {
  Large: "w-full py-2.5",
  Small: "py-2 px-3 text-sm",
  Rounded: "rounded-full",
  RoundedMd: "rounded-md",
  Primay: "bg-rose-500 hover:bg-rose-600 text-white disabled:bg-gray-300",
  PrimaryOutline:
    "bg-white border-rose-500 border hover:bg-rose-500/5 text-rose-500 disabled:bg-gray-300",
  Black: "bg-black hover:bg-black/60 text-white disabled:bg-gray-300",
  BlackOutline:
    "bg-white border border-black hover:bg-black/5 text-black disabled:bg-gray-300",
  Gray: "bg-gray-400 hover:bg-gray-500 text-white disabled:bg-gray-200",
};

export const ButtonTypeStyle: { [key in ButtonType]: string } = {
  [ButtonType.PRIMARY_LARGE]: cn(
    ButtonVariable.Primay,
    ButtonVariable.Large,
    ButtonVariable.RoundedMd
  ),
  [ButtonType.PRIMARY_SMALL]: cn(
    ButtonVariable.Primay,
    ButtonVariable.Small,
    ButtonVariable.RoundedMd
  ),
  [ButtonType.PRIMARY_LARGE_OUTLINE]: cn(
    ButtonVariable.PrimaryOutline,
    ButtonVariable.Large,
    ButtonVariable.RoundedMd
  ),
  [ButtonType.PRIMARY_SMALL_OUTLINE]: cn(
    ButtonVariable.PrimaryOutline,
    ButtonVariable.Small,
    ButtonVariable.RoundedMd
  ),
  [ButtonType.PRIMARY_LARGE_ROUNDED]: cn(
    ButtonVariable.Primay,
    ButtonVariable.Large,
    ButtonVariable.Rounded
  ),
  [ButtonType.PRIMARY_SMALL_ROUNDED]: cn(
    ButtonVariable.Primay,
    ButtonVariable.Small,
    ButtonVariable.Rounded
  ),
  [ButtonType.BLACK_LARGE]: cn(
    ButtonVariable.Black,
    ButtonVariable.Large,
    ButtonVariable.RoundedMd
  ),
  [ButtonType.BLACK_LARGE_OUTLINE]: cn(
    ButtonVariable.BlackOutline,
    ButtonVariable.Large,
    ButtonVariable.RoundedMd
  ),
  [ButtonType.BLACK_SMALL_ROUNDED]: cn(
    ButtonVariable.Black,
    ButtonVariable.Small,
    ButtonVariable.Rounded
  ),
  [ButtonType.GRAY_LARGE]: cn(
    ButtonVariable.Gray,
    ButtonVariable.Large,
    ButtonVariable.RoundedMd
  ),
};
