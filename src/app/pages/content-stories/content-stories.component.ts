import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataStories } from '../../dados/DadosReceiver';

@Component({
  selector: 'app-content-stories',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content-stories.component.html',
  styleUrl: './content-stories.component.css'
})
export class ContentStoriesComponent implements OnInit{

      @Input()
      id:string|null= "0";

      @Input()
      photoDescriptionTopStories:string=""

      @Input()
      photoTopStories:string=""

      constructor(private route:ActivatedRoute){

      }
      
      ngOnInit(): void {
        

        this.route.paramMap.subscribe(value => {
          this.id = value.get("id")
         
    
          this.setIdComponent(this.id)
        
        })
      }


      setIdComponent(id:string| null){
   

        const resul = dataStories.filter(news => news.id == id)[0]
     
         this.photoDescriptionTopStories = resul.description;
         this.photoTopStories = resul.photo;
        
       }  




}



