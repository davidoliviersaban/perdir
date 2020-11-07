import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClassesGroupComponent } from './class-group/class-group.component';
import { ClassesGroupListComponent } from './class-group-list/class-group-list.component';
import { ClassesBucketDetailsComponent } from './course-bucket-details/course-bucket-details.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ClassesGroupComponent,
    ClassesGroupListComponent,
    ClassesBucketDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
