import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  logged = "";
  private cacheSubscription!: Subscription;
  
  constructor(private cacheService: CacheService, public router: Router) {
  }
  
  ngOnInit(): void {
      this.cacheSubscription = this.cacheService.cache$.subscribe(data => {
        this.logged = data;
      });
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() : void {

    this.logged = "LOGGED";
    this.cacheService.set("logged", this.logged);


    this.router.navigate(['/nav']);
  }

  ngOnDestroy(): void {
    // Nos desuscribimos de la caché y borramos los datos de la caché cuando se destruye el componente.
    this.cacheSubscription.unsubscribe();
    this.cacheService.clear(""); // puedes adaptar esto según tu lógica para limpiar el caché
  }

}
