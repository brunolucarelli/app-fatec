import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})

export class OnboardingPage {

  constructor(private storage: Storage, private router: Router) {}

  async finish() {
    await this.storage.set('onboardingComplete', true);
    this.router.navigateByUrl('/');
  }

}