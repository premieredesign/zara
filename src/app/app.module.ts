import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ClothsComponent } from './departments/cloths/cloths.component';
import { ShoesComponent } from './departments/shoes/shoes.component';
import { AccessoriesComponent } from './departments/accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    ClothsComponent,
    ShoesComponent,
    AccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
