<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  header("Access-Control-Allow-Headers: *");

  define('HOST_BD', 'localhost');
  define('USER_BD', 'root');
  define('PASSWORD_BD', 'root');
  define('DB_NAME', 'solicitacao_bd');

  function conecta() {
    $conexao = mysqli_connect(HOST_BD, USER_BD, PASSWORD_BD, DB_NAME);

    if(mysqli_connect_errno($conexao)){
      die("Erro na conexão:" . mysqli_connect_error());
    }

    mysqli_set_charset($conexao, "utf8");

    return $conexao;
  }

  $con = conecta();
?>
