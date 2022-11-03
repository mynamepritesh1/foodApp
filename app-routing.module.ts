import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderTrackPageComponent } from './order-track-page/order-track-page.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search/:searchTerm' , component: HomeComponent
  },
  {
    path: 'tag/:tag' , component: HomeComponent
  },
  {
    path: 'food/:id' ,component: FoodpageComponent
  },
  {
    path: 'cart-page', component: CartPageComponent
  },
  {
    path: 'login', component: LoginComponent

  },
  {
    path: 'register' , component: RegisterComponent
  },
  {
    path: 'checkout' , component: CheckoutComponent, canActivate:[AuthGuard]
  },
  {
    path: 'payment' , component: PaymentComponent
  },
  {
    path: 'track/:orderId' , component: OrderTrackPageComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
