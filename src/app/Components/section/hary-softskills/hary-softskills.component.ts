import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-hary-softskills',
  templateUrl: './hary-softskills.component.html',
  styleUrls: ['./hary-softskills.component.css']
})
export class HarySoftskillsComponent implements OnInit {
    skillsList:any;
    constructor(private datosPortfolio:PortfolioService) { }

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.skillsList=data.circleSkills;
      })
  }
}
