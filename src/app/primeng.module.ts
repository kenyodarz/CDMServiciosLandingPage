// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// PrimeNg
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

const myModule = [ButtonModule, MenubarModule, CardModule, InputTextModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports: [myModule],
})
export class PrimengModule {}
