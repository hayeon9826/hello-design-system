export enum TextType {
  TITLE_LARGE = "TITLE_LARGE",
  TITLE = "TITLE",
  SUBTITLE = "SUBTITLE",
  DESC = "DESC",
  GRAY_DESC = "GRAY_DESC",
  PRIMARY_DESC = "PRIMARY_DESC",
  SMALL = "SMALL",
  GRAY_SMALL = "GRAY_SMALL",
  PRIMARY_SMALL = "PRIMARY_SMALL",
}

export const TextTypeStyle: { [key in TextType]: string } = {
  [TextType.TITLE_LARGE]: "text-2xl md:text-3xl font-semibold",
  [TextType.TITLE]: "text-xl md:text-2xl font-semibold",
  [TextType.SUBTITLE]: "text-lg font-semibold md:text-xl",
  [TextType.DESC]: "text-sm md:text-base",
  [TextType.GRAY_DESC]: "text-sm md:text-base text-gray-500",
  [TextType.PRIMARY_DESC]: "text-sm md:text-base text-rose-500",
  [TextType.SMALL]: "text-xs",
  [TextType.GRAY_SMALL]: "text-xs text-gray-500",
  [TextType.PRIMARY_SMALL]: "text-xs text-rose-500",
};
