import { Component, OnInit } from '@angular/core';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {

  constructor(private cacheService: CacheService, public router: Router) { }

  ngOnInit(): void {
    this.isLogged();
  }


  isLogged(): void {
    const cachedData = this.cacheService.get("logged");

    // Si los datos no están en caché, los recuperamos del servidor y los almacenamos en la caché.
    if (cachedData !== undefined) {
      console.log("logeado");
    } 
    else {
      this.router.navigate(['/login']);
      console.log("no logeado");
    }
  }

  logout(): void {
    console.log("logout");
    this.cacheService.clear("logged");
    this.router.navigate(['/login']);

  }

}
