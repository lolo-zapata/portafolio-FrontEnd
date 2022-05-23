import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-proyects-section',
  templateUrl: './proyects-section.component.html',
  styleUrls: ['./proyects-section.component.css']
})
export class ProyectsSectionComponent implements OnInit {
    proyectsList:any;

    constructor(private datosPortfolio:PortfolioService) { }

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data=>{
        console.log(data);
        this.proyectsList=data.proyects;
      })
    }
  

}
