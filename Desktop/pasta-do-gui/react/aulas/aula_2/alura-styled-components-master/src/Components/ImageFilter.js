import React from "react";
import alimentacao from "../assets/images/alimentacao.svg"
import outros from "../assets/images/outros.svg"
import saude from "../assets/images/saude.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/utilidades.svg"
import { Icon, IconTheme } from "./UI";

// Função de filtro que ele decide qual tipo de imagem ele vai redenizar usando um objeto

export default (type) => {
    const Images = {
        Restaurante: <IconTheme src={alimentacao} alt="restaurante"/>,
        Utilidades: <IconTheme src={utilidades} alt="utilidades"/>,
        Saude: <IconTheme src={saude} alt="saude"/>,
        Transporte: <IconTheme src={transporte} alt="transporte"/>,
        default: <IconTheme src={outros} alt="outros"/>
    }

    return Images[type] || Images.default
}