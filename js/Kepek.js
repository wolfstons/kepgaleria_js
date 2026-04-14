import Kep from "./Kep.js";
export default class Kepek {
  #lista;
  #currentIndex;

  constructor(lista, szuloElem,fokep) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.fokep=fokep
    this.elozoGomb = document.querySelector(".elozo");
    this.kovetkezoGomb = document.querySelector(".kovetkezo");
    this.megjelenit()
    this.esemeny()
    this.nagykep(0)
    this.elozoGomb.addEventListener("click", () => this.elozo());
    this.kovetkezoGomb.addEventListener("click", () => this.kovetkezo());
  }
  megjelenit() {
    this.szuloElem.innerHTML = "";
    for (let index = 0; index < this.#lista.length; index++) {
      const adat=this.#lista[index]
      new Kep(adat,index,this.szuloElem)
    }
  }
  esemeny(){
        window.addEventListener("kivalaszt",(event)=>{
            let index=event.detail
            this.nagykep(index)
        })
        
  }

  nagykep(index){
        this.#currentIndex=index
        const adat=this.#lista[index]
        let kod=`<div class="hattalmaskep">
        <img src="${adat.src}" alt="${adat.cim}">
        <h3>${adat.cim}</h3>
        <p>${adat.leiras}</p>
    </div>`

        this.fokep.innerHTML=kod
    }

    kovetkezo() {
    let uj = this.#currentIndex + 1;
    if (uj >= this.#lista.length) uj = 0;
    this.nagykep(uj);
  }

  elozo() {
    let uj = this.#currentIndex - 1;
    if (uj < 0) uj = this.#lista.length - 1;
    this.nagykep(uj);
  }
}
