import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { SlideComponent } from './slide/slide.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { DataComponent } from './data/data.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UservalueComponent } from './uservalue/uservalue.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    ImageSliderComponent,
    SlideComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    HeaderComponent,
    FormComponent,
    DataComponent,
    UserdetailsComponent,
    UservalueComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
