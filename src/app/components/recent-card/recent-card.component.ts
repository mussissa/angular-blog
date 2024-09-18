import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recent-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recent-card.component.html',
  styleUrl: './recent-card.component.css'
})
export class RecentCardComponent implements OnInit{
      
       @Input()
       id:string ='';
       
       @Input()
       photo_recent:string='';

       @Input()
       description_recent:string='';

       constructor(){

       }

       ngOnInit(): void {
    
       }

       data: Date = new Date();

      dataformatada:string = this.data.toLocaleDateString('en-US',{ year: 'numeric', month: 'short', day: 'numeric'})


    

}
