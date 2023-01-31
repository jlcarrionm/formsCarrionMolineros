import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {
formularioRegistro: FormGroup;

constructor(){
  let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
  let controles: any = {
    nombres: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    ciudad: new FormControl('',[Validators.required]),
    edad:new FormControl('',[Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.pattern(regexCorreo)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(5)]),
      recordarCredenciales: new FormControl(true)
  }
this.formularioRegistro = new FormGroup(controles);
}

registro(){
  console.log('hola');
  console.log(this.formularioRegistro);
  if(this.formularioRegistro.controls['edad'].value === 0){
    console.log("Edad no puede ser igual a 0");
  }

 /*  if(this.formularioRegistro.controls['correo'].errors?.['required']){
    console.log("El correo es obligatorio");
  } */
}

}
