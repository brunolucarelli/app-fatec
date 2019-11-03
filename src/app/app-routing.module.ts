import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnboardingGuard } from './guards/onboarding.guard';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [OnboardingGuard] },
  { path: 'pesquisa', loadChildren: './pesquisa/pesquisa.module#PesquisaPageModule', canActivate: [AuthGuard] },
  { path: 'destaques', loadChildren: './destaques/destaques.module#DestaquesPageModule', canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'inscricoes', loadChildren: './inscricoes/inscricoes.module#InscricoesPageModule', canActivate: [AuthGuard] },
  { path: 'opcoes', loadChildren: './opcoes/opcoes.module#OpcoesPageModule', canActivate: [AuthGuard] },
  { path: 'minhasacoes', loadChildren: './opcoes/minhasacoes/minhasacoes.module#MinhasacoesPageModule', canActivate: [AuthGuard] },
  { path: 'meuperfil', loadChildren: './opcoes/meuperfil/meuperfil.module#MeuperfilPageModule', canActivate: [AuthGuard] },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingPageModule' },
  { path: 'criaracao', loadChildren: './opcoes/minhasacoes/criaracao/criaracao.module#CriaracaoPageModule', canActivate: [AuthGuard] },
  { path: 'acao/:id', loadChildren: './acao/acao.module#AcaoPageModule', canActivate: [AuthGuard] },
  { path: 'sobre', loadChildren: './opcoes/sobre/sobre.module#SobrePageModule', canActivate: [AuthGuard] },
  { path: 'resetarsenha', loadChildren: './resetarsenha/resetarsenha.module#ResetarsenhaPageModule' },
  { path: 'perfil/:id', loadChildren: './perfil/perfil.module#PerfilPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}