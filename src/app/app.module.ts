import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { OperationComponent } from './features/operation/operation.component';
import { RecordComponent } from './features/record/record.component';
import { FilterPipe } from './services/filter.pipe'
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './features/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OperationComponent,
    RecordComponent,
    FilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
