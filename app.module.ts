import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {RatingModule} from 'ng-starrating'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SerchComponent } from './serch/serch.component';
import { TagComponent } from './tag/tag.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TitleComponent } from './title/title.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './input-container/input-container.component';
import { RegisterComponent } from './register/register.component';
import { LoadingComponent } from './loading/loading.component'
import { LoadingInterceptor } from './modal/interceptors/loading.interceptor';
import { CheckoutComponent } from './checkout/checkout.component';
import { TextInputComponent } from './text-input/text-input.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { OrderItemListComponent } from './order-item-list/order-item-list.component';
import { MapComponent } from './map/map.component';
import { AuthInterceptor } from './modal/interceptors/auth.interceptor';
import { PaymentComponent } from './payment/payment.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';
import { OrderTrackPageComponent } from './order-track-page/order-track-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SerchComponent,
    TagComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    TitleComponent,
    InputContainerComponent,
    RegisterComponent,
    LoadingComponent,
    CheckoutComponent,
    TextInputComponent,
    InputValidationComponent,
    OrderItemListComponent,
    MapComponent,
    PaymentComponent,
    PaypalButtonComponent,
    OrderTrackPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut:3000, positionClass: 'toast-bottom-right',newestOnTop:false}),
    AppRoutingModule,
    FormsModule,
    RatingModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},

    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
