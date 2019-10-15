import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasacoesPage } from './minhasacoes.page';

describe('MinhasacoesPage', () => {
  let component: MinhasacoesPage;
  let fixture: ComponentFixture<MinhasacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasacoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
