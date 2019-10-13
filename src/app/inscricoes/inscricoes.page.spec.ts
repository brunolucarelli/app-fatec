import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricoesPage } from './inscricoes.page';

describe('InscricoesPage', () => {
  let component: InscricoesPage;
  let fixture: ComponentFixture<InscricoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscricoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscricoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
