import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.page.html',
  styleUrls: ['./destaques.page.scss'],
})
export class DestaquesPage implements OnInit {

  constructor() { }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 1000);
  }  

  ngOnInit() {
  }

}
