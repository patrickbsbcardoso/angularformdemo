export class ModeloFormulario {
  dadosSolicitante: {
    nome: string,
    idFuncional: number,
    telefone: string,
    email: string,
    orgao: string,
  };
  descricaoEvento: {
    evento: string,
    dataEvento: string,
    horarioEvento: string,
    duracaoEvento: string,
    publicoAlvo: string,
    pauta: string,
    numeroParticipantes: number,
    vagas: number,
    responsavel: string,
    datashow: boolean,
    laptop: boolean,
    videoConferencia: boolean,
    lousaInterativa: boolean,
    responsavelFuncaoCargo: string,
    responsavelTelefone: string,
    responsavelEmail: string,
  };
  observacoes: {
    observacao: string
  };
}
