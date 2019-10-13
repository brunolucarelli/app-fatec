import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pesquisa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pesquisa/pesquisa.module').then(m => m.PesquisaPageModule)
          }
        ]
      },
      {
        path: 'destaques',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../destaques/destaques.module').then(m => m.DestaquesPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'inscricoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../inscricoes/inscricoes.module').then(m => m.InscricoesPageModule)
          }
        ]
      },
      {
        path: 'opcoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../opcoes/opcoes.module').then(m => m.OpcoesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}