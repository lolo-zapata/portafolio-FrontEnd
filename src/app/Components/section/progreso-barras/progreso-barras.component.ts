import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-progreso-barras',
  templateUrl: './progreso-barras.component.html',
  styleUrls: ['./progreso-barras.component.css']
})
export class ProgresoBarrasComponent implements OnInit {
    progresoList:any;
    constructor(private datosPortfolio:PortfolioService) { }

 
 ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.progresoList=data.progreso;
      })

  }
}
