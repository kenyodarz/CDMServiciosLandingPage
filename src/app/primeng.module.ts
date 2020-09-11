// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// PrimeNg
import { ButtonModule } from 'primeng/button';

const myModule = [ButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports: [myModule],
})
export class PrimengModule {}
