import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'cd',
        data: { pageTitle: 'jhipsterMonolitApplicationApp.cd.home.title' },
        loadChildren: () => import('./cd/cd.module').then(m => m.CdModule),
      },
      {
        path: 'dvd',
        data: { pageTitle: 'jhipsterMonolitApplicationApp.dvd.home.title' },
        loadChildren: () => import('./dvd/dvd.module').then(m => m.DvdModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
