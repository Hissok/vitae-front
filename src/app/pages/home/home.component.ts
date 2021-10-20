import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TextfieldComponent } from 'src/app/components/form-controls/textfield/textfield.component';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{

  submitMod = false; // Mode de submit (false = connexion, true = inscription)

  loginFormGroup: FormGroup; // Formulaire de connexion
  registerFormGroup: FormGroup; // Formulaire d'inscription

  @ViewChild("loginUsername") loginUsernameInput! : TextfieldComponent; // L'input du login côté connexion
  @ViewChild("registerUsername") registerUsernameInput! : TextfieldComponent; // L'input du login côté inscription
  @ViewChild("side") side! : ElementRef<HTMLElement>; // Le côté du formulaire qui permet de toggle entre connexion et inscription

  constructor(private fb: FormBuilder, private http: HttpClient, private auth: AuthService) {
    this.loginFormGroup = this.fb.group({
      username: "",
      password: ""
    });

    this.registerFormGroup = this.fb.group({
      username: "",
      password: "",
      confirmPassword: ""
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Focus de l'input de login dès que la vue est prête pour le confort de l'utilisateur
    this.loginUsernameInput.focus();
  }

  // Passer du mode connexion à inscription et vice versa
  toggleSubmit(){
    this.submitMod = !this.submitMod;

    // Le timeout rajoute un effet smoothy
    setTimeout(() => {
      if(this.submitMod)
        this.registerUsernameInput.focus()
      else
        this.loginUsernameInput.focus();
    }, 200)


  }

  // connexion
  onLoginSubmit(){

    this.http.post("/login", this.loginFormGroup.value).toPromise().then((result: any) => {
      this.auth.setToken(result.token);
    }).catch((error) => {
      if(error.status === 401){
        console.log("Identifiants erronés, erreur 401 catchée")
      }
    }).finally(() => {
      // Temporaire le temps de trouver une solution pour catcher l'erreur 401
      console.clear();
    })
  }

}
