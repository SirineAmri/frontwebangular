import { Component } from '@angular/core';
import { AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent  implements AfterViewInit {
  newUser: User = {
    userName: '',
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    role : [],
  };
  registrationSuccess = false;
  registrationError = false;

  userRole = '';

  constructor(private renderer: Renderer2, private el: ElementRef, 
    private userService: UserService, private router: Router, private userAuthService: UserAuthService,
    ){}
  
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

  registerUser() {
    this.userService.registerNewUser(this.newUser).subscribe(
      (response) => {
        this.showSuccessAlert('Matricule valide Compte créé avec succès.');
        this.router.navigate(['/login']);
      },
      (error) => {
          this.showErrorAlert(' Erreur lors de la création du compte Matricule invalide. Veuillez saisir un matricule existant.');
        }
    );
  }
   // tslint:disable-next-line:typedef
   showSuccessAlert(message: string) {
    alert('Succès: ' + message);
  }

  // tslint:disable-next-line:typedef
  showErrorAlert(error: string) {
    alert('Erreur: ' + error);
  }

    // tslint:disable-next-line:typedef
    login(loginForm: NgForm) {
      this.userService.login(loginForm.value).subscribe(
        (response: any) => {
          this.userAuthService.setRoles(response.user.role);
          this.userAuthService.setToken(response.jwtToken);
  
          const role = response.user.role[0].roleName;
          if (role === 'undefined') {
            this.router.navigate(['']);
          }
          if (role === 'Admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/match']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }

}
