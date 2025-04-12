import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    // path: 'company',
    // component: CompanyComponent,
    path: '',
    component: CompanyComponent,
    children: [{ path: 'company-list', component: CompanyListComponent }],
  },
];

@NgModule({
  imports: [RouterLink, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
