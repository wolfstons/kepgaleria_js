import Kep from "./Kep.js";
export default class Kepek {
  #lista;

  constructor(lista, szuloElem,fokep) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.fokep=fokep
    this.megjelenit()
    this.esemeny()
    this.nagykep(0)
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
        const adat=this.#lista[index]
        let kod=`<div class="hattalmaskep">
        <img src="${adat.src}" alt="${adat.cim}">
        <h3>${adat.cim}</h3>
        <p>${adat.leiras}</p>
    </div>`

        this.fokep.innerHTML=kod
    }
}
