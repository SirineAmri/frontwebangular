import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  constructor(){}
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const signUpButton: HTMLElement | null = document.getElementById('signUp');
      const signInButton: HTMLElement | null = document.getElementById('signIn');
      const container: HTMLElement | null = document.getElementById('container');
  
      if (signUpButton && signInButton && container) {
          signUpButton.addEventListener('click', () => {
              container.classList.add("right-panel-active");
          });
  
          signInButton.addEventListener('click', () => {
              container.classList.remove("right-panel-active");
          });
      }
  });  
}
}
