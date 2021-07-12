import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styleUrls: ['../../css/materialize.css']
})



export class AppComponent {

  title = '환영합니다!';
  url = 'https://localhost:4401/mainpage';

  constructor (){}


  loginForm = new FormGroup({
    id: new FormControl('')
    , password: new FormControl('')
  })

/*
  login(){

    this.authService.login(this.loginForm.value).subscribe((data:any) => {
      if(data.status == 500){
        alert(data.err.message)
      }else{
        this.router.navigateByUrl('')
      }
    })
  }*/

}
