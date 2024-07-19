import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationComponent } from './features/operation/operation.component'
import { RecordComponent } from './features/record/record.component'
import { LoginComponent } from './features/login/login.component';
import { NavigationComponent } from './features/navigation/navigation.component';

export const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {
    path: 'nav', 
    component: NavigationComponent,
    children: [
      {path: 'operation', component: OperationComponent},
      {path: 'record', component: RecordComponent}
    ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
