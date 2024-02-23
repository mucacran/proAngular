import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  botnProgramado() {
    // Navegar a la página de detalles del elemento con el ID proporcionado
    this.router.navigate(['/server']); // esta funcion solo buscaras rutas dentro de la palicación
  }

  ngOnInit() {
  }

}
