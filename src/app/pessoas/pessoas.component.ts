import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';




@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'nome'];

  public dataSource: Pessoa[];
  public dataFiltrado: Pessoa[];
  public pessoaSelecionada: Pessoa;
  public afterSelect = false;
  public isMouseOver = false;
  public idx = -1;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.getPessoas();
  }

  public getPessoas(): void {
    this.pessoaService.getPessoas().subscribe(res => {
      this.dataSource = res;
      this.dataFiltrado = res;
    });
  }

  public onKeyUp(evento: KeyboardEvent ) {
    console.log(evento);
    this.dataFiltrado = this.dataSource.filter((r) => r.nome.toLowerCase() === evento.toLowerCase());
    console.log(this.dataFiltrado);
  }
  public selecionado(userSelecionado: Pessoa): void {
    this.pessoaSelecionada = userSelecionado;
    this.afterSelect = true;
    console.log('click');
  }
  public onOutMouse(): void {
    this.isMouseOver = !this.isMouseOver;
  }
  public on(evento) {
    console.log(evento);
  }

}
