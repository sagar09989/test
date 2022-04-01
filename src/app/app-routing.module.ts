import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { ChildComponent } from './child/child.component';
import { DataComponent } from './data/data.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ParentComponent } from './parent/parent.component';
import { SlideComponent } from './slide/slide.component';
import { LoginComponent } from './user-auth/login/login.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UservalueComponent } from './uservalue/uservalue.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent,
    children :[
      {
        path:'company',
        component:AboutCompanyComponent
      },
      {
        path:'company',
        component:AboutCompanyComponent
      },
      {
        path:'me',
        component:AboutMeComponent
      },
      {
        path:'header',
        component:HeaderComponent
      }
    ]
    },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'image-slider',
    component:ImageSliderComponent
  },
  {
    path:'slide',
    component:SlideComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'data',
    component:DataComponent
  },
  {
    path:'userdetails',
    component:UserdetailsComponent
  },
  {
    path:'uservalue',
    component:UservalueComponent
  },
  {
    path:'child',
    component:ChildComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
