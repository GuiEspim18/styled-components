<?php 
require "funcoes.php";
$alunos = ler($conexao);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lista de alunos - Exercício CRUD com PHP e MySQL</title>
<link href="css/style.css" rel="stylesheet">
</head>
<body>
<div id="container">
    <h1>Lista de alunos</h1>
    <hr>

    <?php foreach( $alunos as $leitura ) { ?>
    <div>
        <p> <b>ID:</b> <?=$leitura['id']?> </p>
        <p> <b>Nome:</b> <?=$leitura['aluno']?> </p>
        <p> <b>Primeira nota:</b> <?=$leitura['primeira']?> </p>
        <p> <b>Segunda Nota:</b> <?=$leitura['segunda']?> </p>
        <p>
            <a href="atualizar.php?id=<?=$leitura['id']?>">Atualizar</a> - 
            <a href="excluir.php?id=<?=$leitura['id']?>">Excluir</a>
        </p>
    </div>
    

    <hr> 
    <?php } ?> 

    <p><a href="index.php">Voltar ao início</a></p>
</div>

</body>
</html>
