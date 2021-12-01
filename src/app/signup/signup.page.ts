import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = 'eye-outline';

  togglePassword(): void {
    this.showPassword = !this.showPassword

    if (this.passwordToggleIcon == 'eye-outline') {
      this.passwordToggleIcon = 'eye-off-outline';
    } else {
      this.passwordToggleIcon = 'eye-outline';
    }
  }

  private selectedSegment: string = 'login'
  constructor() { }

  ngOnInit() {
  }

  segmentChange(event: any) {
    // console.log(event.target.value)
    this.selectedSegment = event.target.value
  }
}
