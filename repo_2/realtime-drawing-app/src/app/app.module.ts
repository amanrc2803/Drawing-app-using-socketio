import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module'; // Import the module
import { PagesModule } from './pages/pages.module'; // Import the module

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule, // Include the module
    PagesModule,  // Include the module,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
