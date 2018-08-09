import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pessoas = [
      { id: 11, nome: 'Um' },
      { id: 12, nome: 'Dois' },
      { id: 13, nome: 'Tres' },
      { id: 14, nome: 'Quatro' },
      { id: 15, nome: 'Cinco' },
      { id: 16, nome: 'Seis' },
      { id: 17, nome: 'Sete' },
      { id: 18, nome: 'Oito' },
      { id: 19, nome: 'Nove' },
      { id: 20, nome: 'Dez' }
    ];
    return {pessoas};
  }
}
