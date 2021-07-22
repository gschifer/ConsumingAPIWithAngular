import { AssociadoService } from './../../services/associado.service';
import { Associado } from 'src/app/models/associado';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  associados: Associado[] = [];

  constructor(private service: AssociadoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll().subscribe((response) => {
      this.associados = response;
    })
  }

  deleteAssociado(id: any): void {
    this.service.deleteAssociado(id).subscribe((response) => {
      this.service.message( "Associado removido.");
      this.associados = this.associados.filter( associado => associado.id !== id);
    })
  }
}
