import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

export const routes: Routes = [
    {
        path: '',
        component: SplashscreenComponent,
        title: 'Welcome page',
      },
      {
        path: 'chat',
        component: ChatComponent,
        title: "Let's chat!",
      },
];
