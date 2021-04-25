import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {

  validUsername: string = "erhan.erdogan"

  validPassword: string = "123"

  username: any = null;

  password: any = null;

  errorMessage: string = "";

  displayError: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.validUsername == this.username && this.validPassword == this.password) {
      this.authService.login()
      this.router.navigateByUrl('/attendant')
    }
    else {
      this.displayError = true;
      this.errorMessage = "Kullanıcı adı veya parola hatalı"
    }
  }

}
