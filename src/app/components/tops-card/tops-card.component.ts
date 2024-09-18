import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tops-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tops-card.component.html',
  styleUrl: './tops-card.component.css'
})
export class TopsCardComponent {

  @Input()
  id:string= "";
  
  @Input()
  photo_tops_card:string ="";

  @Input()
  title_tops_card:string= "";

}
