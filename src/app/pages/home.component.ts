import { Component } from '@angular/core';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component'; 
import {MainCardComponent} from '../components/main-card/main-card.component';
import { RecentCardComponent } from '../components/recent-card/recent-card.component';
import { TopsCardComponent } from '../components/tops-card/tops-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent,MainCardComponent, RecentCardComponent, TopsCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PagesComponent {

}
