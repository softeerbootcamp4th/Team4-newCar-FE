declare const colors: {
    skyblue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    orange: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    khaki: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    yellow: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    cream: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    neutral: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    primary: string;
    background: string;
    foreground: string;
};

declare const spacing: {
    1: string;
    2: string;
    2.5: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    15: string;
};

declare const fontFamily: {
    extrabold: string[];
    bold: string[];
    medium: string[];
    normal: string[];
};
type FontSize = {
    [key: string]: [
        fontSize: string,
        configuration: Partial<{
            lineHeight: string;
            letterSpacing: string;
            fontWeight: string | number;
        }>
    ];
};
declare const fontSize: FontSize;
declare const fontWeight: {
    extrabold: string;
    bold: string;
    medium: string;
    regular: string;
};

export { colors, fontFamily, fontSize, fontWeight, spacing };
