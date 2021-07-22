import { AssociadoService } from './../../services/associado.service';
import { Associado } from 'src/app/models/associado';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  associado: Associado = {
    nome: "",
    email: "",
    cpf: ""
  }

  constructor(private router: Router, private service: AssociadoService) { }

  ngOnInit(): void {
  }

  createAssociado(): void {
    this.service.createAssociado(this.associado).subscribe((resposta) => {
      this.service.message('To-do criado com sucesso!');
      this.router.navigate(['']);
    }), (erro: any) => {
      console.log(erro)
      this.service.message("Falha ao tentar criar novo associado.");
      this.router.navigate(['']);
    };

  }

  cancel(): void {
    this.router.navigate([""]);
  }
}
