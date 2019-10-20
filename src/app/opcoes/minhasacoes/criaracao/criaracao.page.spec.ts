import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaracaoPage } from './criaracao.page';

describe('CriaracaoPage', () => {
  let component: CriaracaoPage;
  let fixture: ComponentFixture<CriaracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaracaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
