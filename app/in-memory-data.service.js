"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Fulanod de tal', email: 'fulano@email.com', telefone: '(00)0000-0000' },
            { id: 2, nome: 'Ciclano', email: 'ciclano@email.com', telefone: '(00)0000-0000' },
            { id: 3, nome: 'Maconheiro', email: 'maconheiro@email.com', telefone: '(00)0000-0000' },
            { id: 4, nome: 'Bob Esponja', email: 'bob@email.com', telefone: '(00)0000-0000' },
            { id: 5, nome: 'Chaves', email: 'chaves@email.com', telefone: '(00)0000-0000' },
        ];
        return { contatos };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map