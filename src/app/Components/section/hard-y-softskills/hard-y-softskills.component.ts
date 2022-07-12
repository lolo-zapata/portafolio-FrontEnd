import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-hard-y-softskills',
  templateUrl: './hard-y-softskills.component.html',
  styleUrls: ['./hard-y-softskills.component.css']
})
export class HardYSoftskillsComponent implements OnInit {
    skillsList:any;
    constructor(private datosPortfolio:PortfolioService) { }

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.skillsList=data.circleSkills;
      })
  }
}
