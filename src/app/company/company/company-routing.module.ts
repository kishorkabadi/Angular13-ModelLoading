import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from '../company-list/company-list.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
    {
        path:'company',
        component:CompanyComponent,
        children :[
            {
                path:'CompanyList',
                component:CompanyListComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
