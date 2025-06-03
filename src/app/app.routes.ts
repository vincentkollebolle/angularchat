import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { UsernameGuard } from './username.guard';

export const routes: Routes = [
    {
        path: '',
        component: SplashscreenComponent,
        title: 'Welcome page',
      },
      {
        path: 'chat',
        component: ChatComponent,
        canActivate: [UsernameGuard],
        title: "Let's chat!",
      },
];
