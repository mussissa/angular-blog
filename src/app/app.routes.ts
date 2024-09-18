import { Routes } from '@angular/router';
import { PagesComponent } from './pages/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ContentStoriesComponent } from './pages/content-stories/content-stories.component';

export const routes: Routes = [
    {
        path:'', component:PagesComponent
    },
    {
        path:'content/:id', component:ContentComponent
    },

    {
        path:'contentStories/:id', component:ContentStoriesComponent
    }

];
