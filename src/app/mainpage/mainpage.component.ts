import { Component, OnInit } from '@angular/core';

type User = {
  id: string;
  pw: string;
};

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['../../../css/materialize.css']
})
export class MainpageComponent implements OnInit {

  title : string = '환영합니다!';

  visible_UP : boolean = false;
  visible_IN : boolean = false;

  visible_INFO : boolean = false;
  
  user_id: string = '';
  user_pw: string = '';

  user_info: User = {id: '', pw: ''};
  

  public clickSignUp () : void{   // 회원가입 버튼 클릭시 동작
    this.user_info = { id: this.user_id, pw: this.user_pw}; // user_info에 id와 pw값을 저장.
    console.log('회원가입 했습니다.\n' + "id : " + this.user_info.id +  "\npw : " + this.user_info.pw)
    this.visible_UP = true;
    this.visible_IN = false;
    this.visible_INFO = true;
  }

  public clickSignIn () : void{   // 로그인 버튼 클릭시 동작
    console.log('로그인 했습니다.\n' + "id : " + this.user_id + "\npw : " + this.user_pw)
    this.visible_UP = false;
    this.visible_IN = true;
    this.visible_INFO = false;
  }

  constructor ( ){
  }

  ngOnInit(): void {
    
    throw new Error('Method not implemented.');
  }

}
