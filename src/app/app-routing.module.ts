import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnboardingGuard } from './guards/onboarding.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [OnboardingGuard] },
  { path: 'pesquisa', loadChildren: './pesquisa/pesquisa.module#PesquisaPageModule' },
  { path: 'destaques', loadChildren: './destaques/destaques.module#DestaquesPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'inscricoes', loadChildren: './inscricoes/inscricoes.module#InscricoesPageModule' },
  { path: 'opcoes', loadChildren: './opcoes/opcoes.module#OpcoesPageModule' },
  { path: 'minhasacoes', loadChildren: './opcoes/minhasacoes/minhasacoes.module#MinhasacoesPageModule' },
  { path: 'meuperfil', loadChildren: './opcoes/meuperfil/meuperfil.module#MeuperfilPageModule' },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingPageModule' },
  { path: 'criaracao', loadChildren: './opcoes/minhasacoes/criaracao/criaracao.module#CriaracaoPageModule' },
  { path: 'acao/:id', loadChildren: './acao/acao.module#AcaoPageModule' },
  { path: 'sobre', loadChildren: './opcoes/sobre/sobre.module#SobrePageModule' },
  { path: 'img', loadChildren: './img/img.module#ImgPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}