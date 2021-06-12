<?php
require "funcoes.php";
$id = $_GET['id'];
excluir($conexao, $id);
header("location:index.php");