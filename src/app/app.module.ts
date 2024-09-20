import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsHighlightDirective } from './basics-highlight/basics-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-hightlight.directive';
import { DirectivesComponent } from './directives/directives.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsHighlightDirective,
    BetterHighlightDirective,
    DirectivesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
