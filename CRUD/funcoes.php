<?php
require "conecta.php";

function inserir($conexao, $aluno, $primeira, $segunda){

    $sql = "INSERT INTO alunos VALUES('$aluno','$primeira','$segunda')";

    mysqli_query($conexao, $sql) or die(mysqli_error($conexao));
}


function atualizar($conexao, $id, $aluno, $primeira, $segunda){
    $sql = "UPDATE alunos SET nome = '$aluno' WHERE id = $id";
    mysqli_query($conexao, $sql) or die(mysqli_error($conexao));
}

function excluir($conexao, $id){
    $sql = "DELETE FROM alunos WHERE id = $id";
    mysqli_query($conexao, $sql) or die(mysqli_error($conexao));
}


function ler($conexao){

    $sql = "SELECT * FROM alunos ORDER BY nome";

    $resultado = mysqli_query($conexao, $sql) 
                or die(mysqli_error($conexao));

    $alunos = [];

    while( $leitura = mysqli_fetch_assoc($resultado) ){
        array_push($alunos, $leitura);
    }

    return $alunos;
}

function pesquisa($conexao, $id){
    $sql = "SELECT * FROM alunos WHERE id = $id";
    $resultado = mysqli_query($conexao, $sql) or die(mysqli_error($conexao));
    return mysqli_fetch_assoc($resultado);
}