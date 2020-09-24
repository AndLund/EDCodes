import Fila from "./Fila";

class Pilha2 {

	push(dado) {
    this.q1.enqueue(dado);
	}

	pop() {
		while(this.q1.size > 0){
      if(this.q1.size != 1) this.q2.enqueue(this.q1.dequeue());
      else {
        this.q1.dequeue();
    }
    while(this.q2.size > 0){
      this.q1.enqueue(this.q2.dequeue());
    }
	}

}

export default Pilha2;