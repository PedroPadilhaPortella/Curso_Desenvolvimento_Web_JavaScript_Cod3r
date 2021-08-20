export default class Cliente {
    #id: string;
    #nome: string;
    #idade: number;

    constructor(nome: string = '', idade: number = 0, id: string = null) {
        this.#nome = nome;
        this.#idade = idade;
        this.#id = id;
    }

    // static vazio() {
    //     return new Cliente('', 0, null)
    // }

    get id() { return this.#id }

    get nome() { return this.#nome }

    get idade() { return this.#idade }
}