<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "guilhermesouza_crud_senac";

$conexao = mysqli_connect(
    $servidor, $usuario, $senha, $banco
);

mysqli_set_charset($conexao, "utf8");

if($conexao){
    echo "conexão ok!";
}
