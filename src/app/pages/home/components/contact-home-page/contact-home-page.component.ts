import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-home-page',
  templateUrl: './contact-home-page.component.html',
  styleUrls: ['./contact-home-page.component.scss']
})
export class ContactHomePageComponent implements OnInit {

  contact!: FormGroup;
  showSuccessMessage = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contact = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/\S+@\S+\.\S+/)
      ])],
      message: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  habilitarBotao(){
    if(this.contact.valid){
      return 'button'
    }
    return 'button-disabled'
  }

  sendEmail(){
    if (this.contact.valid) {
      const templateParams = {
        name: this.contact.value.name,
        email: this.contact.value.email,
        message: this.contact.value.message,
      };

      emailjs
        .send(environment.YOUR_SERVICE_ID, environment.YOUR_TEMPLATE_ID, templateParams, {
          publicKey: environment.YOUR_PUBLIC_KEY,
        })
        .then(
          (response: EmailJSResponseStatus) => {
            console.log('E-mail enviado com sucesso:', response);
            this.showSuccessMessage = true;
            setTimeout(() => {
              this.showSuccessMessage = false;
              this.contact.reset();
            }, 5000);
          },
          (error) => {
            console.log('Erro ao enviar o e-mail:', error);
          }
        );
    }
  }
}
