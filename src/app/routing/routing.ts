import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from 'app/user-data/user-data.component';
import { UserListComponent } from 'app/user-list/user-list.component';


const routes: Routes = [
   {path:'',redirectTo:'/login', pathMatch:'full'},
{path:'login', component:UserDataComponent},
{path:'list', component:UserListComponent},
];


export const routedComponents = RouterModule.forRoot(routes)