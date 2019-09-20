import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ModeloFormulario } from 'src/app/modelo-formulario';


@Component({
  selector: 'app-form-solicitacao-dependencias',
  templateUrl: './form-solicitacao-dependencias.component.html',
  styleUrls: ['./form-solicitacao-dependencias.component.css']
})
export class FormSolicitacaoDependenciasComponent implements OnInit {

  formularioSolicitacao: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const fb = this.formBuilder;

    this.formularioSolicitacao = fb.group({
      dadosSolicitante: fb.group({
        nome: [null, [Validators.required]],
        idFuncional: [null, [Validators.required, Validators.pattern('[0-9]+')]],
        telefone: [null, [Validators.required, Validators.pattern('[0-9]+')]],
        email: [null, [Validators.required, Validators.email]],
        orgao: [null, [Validators.required]]
      }),
      descricaoEvento: fb.group({
        evento: [null, [Validators.required]],
        dataEvento: [null, [Validators.required]],
        horarioEvento: [null, [Validators.required]],
        duracaoEvento: [null, [Validators.required]],
        publicoAlvo: [null, [Validators.required]],
        pauta: [null, [Validators.required]],
        numeroParticipantes: [null, [Validators.required, Validators.pattern('[0-9]+')]],
        vagas: [null, [Validators.pattern('[0-9]+')]],
        responsavel: [null, [Validators.required]],
        datashow: [false],
        laptop: [false],
        videoConferencia: [false],
        lousaInterativa: [false],
        responsavelFuncaoCargo: [null, [Validators.required]],
        responsavelTelefone: [null, [Validators.required, Validators.pattern('[0-9]+')]],
        responsavelEmail: [null, [Validators.required, Validators.email]]
      }),
      observacoes: fb.group({
        observacao: [null],
      })
    });
  }

  onSubmit() {
    if (!this.formularioSolicitacao.valid) {
      alert('Preencha todos os campos corretamente');
    } else {
        if (this.formularioSolicitacao.get('descricaoEvento').get('vagas').value == null) {
          this.formularioSolicitacao.get('descricaoEvento').get('vagas').setValue(0);
        }
        this.apiService.cadastraFormulario(this.formularioSolicitacao.value).subscribe(
          (formulario: ModeloFormulario) => {
          console.log(formulario);
          alert('Formulário cadastrado com sucesso!');
      });
    }

  }
}
