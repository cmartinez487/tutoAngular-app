import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutoAngular-app';
  city = 'Ccs'
}
