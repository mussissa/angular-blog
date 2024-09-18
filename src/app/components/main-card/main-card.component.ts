import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {
  @Input()
  titulo_main:string = "";
  @Input()
  photo_main:string ="";
  @Input()
  description_main ="";

  @Input()
   redirect_main:string="";

  @Input()
  id:string= "";

}
