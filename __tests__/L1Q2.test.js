import Pilha from "../src/Pilha";
import invertePilha from "../src/Q2";

let p;

beforeEach(() => {
	p = new Pilha(7);
});

test("Teste de inversão", () => {
	p.push("A");
	p.push("B");
	p.push("A");
	p.push("C");
	p.push("A");
	p.push("X");
	p.push("I");
	expect(p.toString()).toBe("[ A  B  A  C  A  X  I ]");
	expect(invertePilha(p).toString()).toBe("[ I  X  A  C  A  B  A ]");
});
