import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloSecaoComponent } from './titulo-secao.component';

describe('TituloSecaoComponent', () => {
  let component: TituloSecaoComponent;
  let fixture: ComponentFixture<TituloSecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloSecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloSecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
