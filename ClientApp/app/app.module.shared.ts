import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component'
import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component'
import { MainBodyComponent } from './components/mainbody/mainbody.component'
import { FormComponent } from './components/form/form.component'
import { HeadComponent } from './components/head/head.component'

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HeaderComponent,
        MainBodyComponent,
        HomeComponent,
        FormComponent,
        HeadComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
