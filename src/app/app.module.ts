import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClassesGroupComponent } from './class-group/class-group.component';
import { ClassesGroupListComponent } from './class-group-list/class-group-list.component';
import { ClassesBucketDetailsComponent } from './course-bucket-details/course-bucket-details.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // <-- NgModel lives here
import { CourseService } from './course.service';
import { ClassesGroupService } from './class-group.service';

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
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    ClassesGroupService,
    {
      provide: APP_INITIALIZER,
      useFactory: (cgs: ClassesGroupService) => () => cgs.init().then(),
      deps: [ClassesGroupService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
