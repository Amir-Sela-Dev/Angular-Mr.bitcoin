import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'LoginSignup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required], []],  // [initialVal, validators, asyncValidators]
      email: '',
      phone: '',
    })
  }

  form!: FormGroup
  formTitle = "Log in"

  async onSubmit() {
    let user = this.userService.getEmptyUser()
    user.name = this.form.value.name
    console.log(user);
    if (this.formTitle === 'Log in') await this.userService.login(user)
    else await this.userService.signup(user)

    this.router.navigateByUrl('/contact')
  }
}
