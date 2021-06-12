<?php
require "conecta.php";

function inserir($conexao, $nome, $primeiro, $segundo){

    $sql = "INSERT INTO alunos VALUES('$nome')";
    $sql = "INSERT INTO alunos VALUES('$primeiro')";
    $sql = "INSERT INTO alunos VALUES('$segundo')";

    mysqli_query($conexao, $sql) or die(mysqli_error($conexao));
}


function atualizar($conexao, $id, $nome, $primeiro, $segundo){
    $sql = "UPDATE alunos SET nome = '$nome' WHERE id = $id";
    mysqli_query($conexao, $sql) or die(mysqli_error($conexao));
}

function excluir($conexao, $id){
    $sql = "DELETE FROM alunos WHERE id = $id";
    mysqli_query($conexao, $sql) or die(mysqli_error($conexao));
}
