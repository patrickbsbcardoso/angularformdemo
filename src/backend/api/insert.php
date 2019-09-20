<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  header("Access-Control-Allow-Headers: *");

  require 'database.php';

  //Pega os dados via POST
  $dadosPost = file_get_contents("php://input");

  if(isset($dadosPost) && !empty($dadosPost)) {
    //Extrai os dados
    $requisicao = json_decode($dadosPost);

    //Validação
    //Dados do Solicitante
    if(trim($requisicao->dadosSolicitante->nome) === '' ||
      $requisicao->dadosSolicitante->idFuncional == null ||
      trim($requisicao->dadosSolicitante->telefone) === '' ||
      trim($requisicao->dadosSolicitante->email) === '' ||
      trim($requisicao->dadosSolicitante->orgao) === ''
    ) {
        return http_response_code(400);
    }

    //Descrição do evento
    if(trim($requisicao->descricaoEvento->evento) === '' ||
      trim($requisicao->descricaoEvento->dataEvento) === '' ||
      trim($requisicao->descricaoEvento->horarioEvento) === '' ||
      trim($requisicao->descricaoEvento->duracaoEvento) === '' ||
      trim($requisicao->descricaoEvento->publicoAlvo) === '' ||
      trim($requisicao->descricaoEvento->pauta) === '' ||
      $requisicao->descricaoEvento->numeroParticipantes == null ||
      trim($requisicao->descricaoEvento->responsavel) === ''||
      trim($requisicao->descricaoEvento->responsavelFuncaoCargo) === ''||
      trim($requisicao->descricaoEvento->responsavelTelefone) === '' ||
      trim($requisicao->descricaoEvento->responsavelEmail) === ''
    ) {
      return http_response_code(400);
    }

    //Limpando possíveis injections
    //Dados do Solicitante
    $nome = mysqli_real_escape_string($con, trim($requisicao->dadosSolicitante->nome));
    $idFuncional = mysqli_real_escape_string($con, trim($requisicao->dadosSolicitante->idFuncional));
    $telefone = mysqli_real_escape_string($con, trim($requisicao->dadosSolicitante->telefone));
    $email = mysqli_real_escape_string($con, trim($requisicao->dadosSolicitante->email));
    $orgao = mysqli_real_escape_string($con, trim($requisicao->dadosSolicitante->orgao));

    //Descrição do Evento
    $evento = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->evento));
    $dataEvento = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->dataEvento));
    $horarioEvento = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->horarioEvento));
    $duracaoEvento = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->duracaoEvento));
    $publicoAlvo = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->publicoAlvo));
    $pauta = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->pauta));
    $numeroParticipantes = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->numeroParticipantes));
    $vagas = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->vagas));
    $responsavel = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->responsavel));
    $datashow = (int) mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->datashow));
    $laptop = (int) mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->laptop));
    $videoConferencia = (int) mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->videoConferencia));
    $lousaInterativa = (int) mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->lousaInterativa));
    $responsavelFuncaoCargo = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->responsavelFuncaoCargo));
    $responsavelTelefone = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->responsavelTelefone));
    $responsavelEmail = mysqli_real_escape_string($con, trim($requisicao->descricaoEvento->responsavelEmail));

    //Observações
    $observacao = mysqli_real_escape_string($con, trim($requisicao->observacoes->observacao));

    //Insere no banco de dados
    $sql = "INSERT INTO `solicitacoes`(".
    "`nome`,".
    "`idFuncional`,".
    "`telefone`,".
    "`email`,".
    "`orgao`,".
    "`evento`,".
    "`dataEvento`,".
    "`horarioEvento`,".
    "`duracaoEvento`,".
    "`publicoAlvo`,".
    "`pauta`,".
    "`numeroParticipantes`,".
    "`vagas`,".
    "`responsavel`,".
    "`datashow`,".
    "`laptop`,".
    "`videoConferencia`,".
    "`lousaInterativa`,".
    "`responsavelFuncaoCargo`,".
    "`responsavelTelefone`,".
    "`responsavelEmail`,".
    "`observacao`)".
    "VALUES (".
    "'{$nome}',".
    "'{$idFuncional}',".
    "'{$telefone}',".
    "'{$email}',".
    "'{$orgao}',".
    "'{$evento}',".
    "'{$dataEvento}',".
    "'{$horarioEvento}',".
    "'{$duracaoEvento}',".
    "'{$publicoAlvo}',".
    "'{$pauta}',".
    "'{$numeroParticipantes}',".
    "'{$vagas}',".
    "'{$responsavel}',".
    "{$datashow},".
    "{$laptop},".
    "{$videoConferencia},".
    "{$lousaInterativa},".
    "'{$responsavelFuncaoCargo}',".
    "'{$responsavelTelefone}',".
    "'{$responsavelEmail}',".
    "'{$observacao}')";


      if(mysqli_query($con,$sql)) {
        http_response_code(201);
      } else {
        http_response_code(422);
      }
  }
?>
