import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TituloSecaoComponent } from './componentes/titulo-secao/titulo-secao.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormSolicitacaoDependenciasComponent } from './componentes/form-solicitacao-dependencias/form-solicitacao-dependencias.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloSecaoComponent,
    FormSolicitacaoDependenciasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
