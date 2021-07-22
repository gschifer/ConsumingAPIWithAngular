import { Validators, FormControl } from '@angular/forms';

import { AssociadoService } from './../../services/associado.service';
import { Associado } from 'src/app/models/associado';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  associado: Associado = {
    nome: "",
    email: "",
    cpf: ""
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private router: Router, private service: AssociadoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.associado)
    this.associado.id = this.route.snapshot.paramMap.get("id")!;
    this.getAssociadoById(this.associado.id);
  }

  getAssociadoById(id: any): void {
    this.service.getAssociadoById(id).subscribe((response) => {
      this.associado = response;
    }), (erro: any) => {
      console.log(erro)
      this.service.message("Falha ao tentar buscar associado.");
      this.router.navigate(['']);
    };
  }

  updateAssociado(): void {
    console.log(this.associado)
    this.service.updateAssociado(this.associado).subscribe((response) => {
      this.service.message('Associado atualizado com sucesso!');
      this.router.navigate(['']);
    }), (erro: any) => {
      console.log(erro)
      this.service.message("Falha ao tentar atualizar associado.");
      this.router.navigate(['']);
    };

  }

  cancel(): void {
    this.router.navigate([""]);
  }
}
