import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './footer/terms-conditions/terms-conditions.component';
import { DisclaimerComponent } from './footer/disclaimer/disclaimer.component';
import { RefundPolicyComponent } from './footer/refund-policy/refund-policy.component';
import { CancellationPolicyComponent } from './footer/cancellation-policy/cancellation-policy.component';
import { ChatWidgetComponent } from './chat-widget/chat-widget.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SolutionsComponent,
    ContactComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    DisclaimerComponent,
    RefundPolicyComponent,
    CancellationPolicyComponent,
    ChatWidgetComponent,
    QuoteFormComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(NoopAnimationsModule),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  bootstrap = bootstrapApplication(AppComponent, {
    providers: [
      provideAnimationsAsync(),
      importProvidersFrom(NoopAnimationsModule), // or BrowserAnimationsModule
    ]
  });
}