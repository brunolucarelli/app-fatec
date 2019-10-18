import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  useremail: string = ""
  userpassword: string = ""

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  async register() {
    const { useremail, userpassword } = this
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(useremail, userpassword)
      this.router.navigateByUrl('/');
    } catch(error) {
      console.dir(error)
    }
    
  }

}
