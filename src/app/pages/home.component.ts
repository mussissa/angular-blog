import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component'; 
import {MainCardComponent} from '../components/main-card/main-card.component';
import { RecentCardComponent } from '../components/recent-card/recent-card.component';
import { TopsCardComponent } from '../components/tops-card/tops-card.component';


import { data, dataStories } from '../dados/DadosReceiver'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent,MainCardComponent, RecentCardComponent, TopsCardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class PagesComponent implements OnInit{


  top_photo:string=""
  top_title:string=""
  top_id:string=""

  dados_top:string="";
  data_top: any;
  data_recent:any;


  ngOnInit(): void {
    
    if(data){
      this.data_recent = data
    }
   
    if(dataStories){

      this.data_top = dataStories

   }
  
  }

}
