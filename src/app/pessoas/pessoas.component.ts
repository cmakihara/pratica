import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';


@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.getPessoas();
  }
  public getPessoas(): void {
    this.pessoaService.getPessoas()
    .subscribe(pessoas => this.pessoas = pessoas);
  }

}
