import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Import your components

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]) // No routes needed here
  ],
  exports: [NavbarComponent],
})
export class LayoutModule {}
