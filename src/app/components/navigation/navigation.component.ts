// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// PrimeNg
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        command: () => this.router.navigateByUrl('/home'),
      },
      {
        label: 'Certificaciones',
        icon: 'pi pi-fw pi-file',
        command: () => this.router.navigateByUrl('/documentacion'),
      },
      {
        label: 'Servicios',
        icon: 'pi pi-fw pi-briefcase',
        command: () => this.router.navigateByUrl('/servicios'),
      },
      {
        label: 'Nosotros',
        icon: 'pi pi-fw pi-clone',
        command: () => this.router.navigateByUrl('/nosotros'),
      },
      // {
      //   label: 'Quit',
      //   icon: 'pi pi-fw pi-power-off',
      // },
    ];
  }
}
