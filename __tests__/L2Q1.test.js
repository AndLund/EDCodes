import Pilha from "../src/Pilha";

let p;

beforeEach(() => {
	p = new Pilha(5);
});

test("Teste de inversão", () => {
	p.push(1);
	p.push(2);
	p.push(3);
	p.push(4);
	p.push(5);
	p.pop();
	expect(p.toString()).toBe("[ 1  2  3  4 ]");
});
