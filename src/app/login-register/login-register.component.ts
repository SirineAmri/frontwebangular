import { Component } from '@angular/core';
import { AfterViewInit, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent  implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef){}
  
  ngAfterViewInit() {
    const signUpButton = this.el.nativeElement.querySelector('#signUp');
    const signInButton = this.el.nativeElement.querySelector('#signIn');

    if (signUpButton && signInButton) {
      this.renderer.listen(signUpButton, 'click', () => {
        this.el.nativeElement.querySelector('#container').classList.add("right-panel-active");
      });

      this.renderer.listen(signInButton, 'click', () => {
        this.el.nativeElement.querySelector('#container').classList.remove("right-panel-active");
      });
    }
  }
}
