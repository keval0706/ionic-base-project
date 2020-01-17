import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, RegistrationComponent } from '.';
import { NgModule } from '@angular/core';
import { SlidesComponent } from './slides/slides.component';

const accountRoutes: Routes = [
    {
        path: '',
        component: SlidesComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(accountRoutes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
