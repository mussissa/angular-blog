import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { data } from '../../dados/DadosReceiver';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  private id:string | null="0"

  @Input()
  photoCover:string = ""
  @Input()
  photoDescription:string= ""




  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id")
     

      this.setIdComponent(this.id)
    
    })
   
  }

  setIdComponent(id:string| null){
   

   const resul = data.filter(news => news.id == id)[0]

    this.photoCover = resul.photo;
    this.photoDescription = resul.description;
   
  }  



}
