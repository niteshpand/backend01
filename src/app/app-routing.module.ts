import { NgModule } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { CustompreloadService } from './custompreload.service';
import { delay } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'company',
    loadChildren: () =>
      import('../app/company/company.module').then((m) => m.CompanyModule),
    data: { preload: true ,delay:true},
  },
  {
    path: 'person',
    loadChildren: () =>
      import('../app/person/person.module').then((m) => m.PersonModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: CustompreloadService }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
