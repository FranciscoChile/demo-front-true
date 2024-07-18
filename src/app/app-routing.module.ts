import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationComponent } from './features/operation/operation.component'
import { RecordComponent } from './features/record/record.component'

export const routes: Routes = [
  {path: 'operation', component: OperationComponent},
  {path: 'record', component: RecordComponent},
  {path: '', redirectTo: '/record', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
