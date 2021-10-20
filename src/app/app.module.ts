import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextfieldComponent } from './components/form-controls/textfield/textfield.component';
import { ButtonComponent } from './components/form-controls/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/page-components/header/header.component';
import { LoginPopupComponent } from './components/popups/login-popup/login-popup.component';
import { SocialNetworkComponent } from './components/form-controls/social-network/social-network.component';
import { FontAwesomeDialogComponent } from './components/dialogs/font-awesome-dialog/font-awesome-dialog.component';
import { DialogsManagerComponent } from './components/dialogs/dialogs-manager/dialogs-manager.component';
import { APIInterceptor } from './interceptor/api-interceptor';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { CvListComponent } from './components/page-components/cv-list/cv-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    ButtonComponent,
    HeaderComponent,
    LoginPopupComponent,
    SocialNetworkComponent,
    FontAwesomeDialogComponent,
    DialogsManagerComponent,
    HomeComponent,
    CvListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
    },

    {
      provide: "BASE_API_URL", useValue: environment.apiUrl
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
