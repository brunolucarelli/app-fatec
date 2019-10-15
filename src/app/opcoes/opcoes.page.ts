import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.page.html',
  styleUrls: ['./opcoes.page.scss'],
})
export class OpcoesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public disabled = false;

  public change() {
    this.disabled = !this.disabled;
  }

}
