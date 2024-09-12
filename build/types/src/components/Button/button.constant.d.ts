export declare enum ButtonType {
    PRIMARY_LARGE = "PRIMARY_LARGE",
    PRIMARY_SMALL = "PRIMARY_SMALL",
    PRIMARY_LARGE_OUTLINE = "PRIMARY_LARGE_OUTLINE",
    PRIMARY_SMALL_OUTLINE = "PRIMARY_SMALL_OUTLINE",
    PRIMARY_LARGE_ROUNDED = "PRIMARY_LARGE_ROUNDED",
    PRIMARY_SMALL_ROUNDED = "PRIMARY_SMALL_ROUNDED",
    BLACK_LARGE = "BLACK_LARGE",
    BLACK_LARGE_OUTLINE = "BLACK_LARGE_OUTLINE",
    BLACK_SMALL_ROUNDED = "BLACK_SMALL_ROUNDED",
    GRAY_LARGE = "GRAY_LARGE"
}
export declare const ButtonVariable: {
    Large: string;
    Small: string;
    Rounded: string;
    RoundedMd: string;
    Primay: string;
    PrimaryOutline: string;
    Black: string;
    BlackOutline: string;
    Gray: string;
};
export declare const ButtonTypeStyle: {
    [key in ButtonType]: string;
};
