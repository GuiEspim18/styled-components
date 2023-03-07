import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icon } from "../UI";

const light = <Icon src={ThemeOn} alt="tema claro"/>

const dark = <Icon src={ThemeOff} alt="tema escuro"/>

export default (({theme}) => (theme ? dark : light))