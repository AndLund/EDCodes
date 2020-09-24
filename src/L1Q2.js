import Pilha from "./Pilha";

export default function invertePilha(pilha) {
	let pilhaInvertida = new Pilha(pilha.maxSize);

	while (pilha.size() > 0) {
		pilhaInvertida.push(pilha.pop());
	}

	return pilhaInvertida;
}
