import Cliente from '../../core/Cliente';
import ClienteRepository from "../../core/ClienteRepository";
import firebase from '../config';

export default class ClienteCollection implements ClienteRepository {

    #conversor = {
        toFirestore(cliente: Cliente) {
            return { nome: cliente.nome, idade: cliente.idade }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const data = snapshot?.data(options)
            return new Cliente(data.nome, data.idade, snapshot?.id)
        }
    }

    async save(cliente: Cliente): Promise<Cliente> {
        if(cliente.id) {
            await this.collection().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const documentReference = await this.collection().add(cliente)
            const document = await documentReference.get()
            return document.data()
        }
    }

    async remove(cliente: Cliente): Promise<void> {
        return this.collection().doc(cliente.id).delete();
    }
    
    async getAll(): Promise<Cliente[]> {
        const query = await this.collection().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private collection() {
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)
    }
}