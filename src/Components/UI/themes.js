import { lightBackground, lightContent, textLightBackground, darkBackground, darkContent, darkBackgroundText } from "./variables";

export const lightTheme = {
    body: lightBackground,
    inside: lightContent,
    text: textLightBackground
}

export const darkTheme = {
    body: darkBackground,
    inside: darkContent,
    text: darkBackgroundText,
    filter: "invert(100%)"
}