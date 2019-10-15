import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'pesquisa', loadChildren: './pesquisa/pesquisa.module#PesquisaPageModule' },
  { path: 'destaques', loadChildren: './destaques/destaques.module#DestaquesPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'inscricoes', loadChildren: './inscricoes/inscricoes.module#InscricoesPageModule' },
  { path: 'opcoes', loadChildren: './opcoes/opcoes.module#OpcoesPageModule' },
  { path: 'minhasacoes', loadChildren: './opcoes/minhasacoes/minhasacoes.module#MinhasacoesPageModule' },
  { path: 'meuperfil', loadChildren: './opcoes/meuperfil/meuperfil.module#MeuperfilPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
