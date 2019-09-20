import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSolicitacaoDependenciasComponent } from './form-solicitacao-dependencias.component';

describe('FormSolicitacaoDependenciasComponent', () => {
  let component: FormSolicitacaoDependenciasComponent;
  let fixture: ComponentFixture<FormSolicitacaoDependenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSolicitacaoDependenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSolicitacaoDependenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
