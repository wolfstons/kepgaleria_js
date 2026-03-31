export default class Kep{
    
    #src
    #cim
    #index
    #leiras
    constructor(adat,index,szuloElem,kepElem){
        this.#src=adat.src
        this.#cim=adat.cim
        this.#index=index
        this.#leiras=adat.leiras
        this.szuloElem=szuloElem
        this.kepElem=kepElem
        this.megjelenit()
        this.esemeny()
    }

    megjelenit(){

        let kod=`
            <div class="kep">
        <img src="${this.#src}" alt="${this.#cim}">
        <h3>${this.#cim}</h3>
        <p>${this.#leiras}</p>
    </div>
        `
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
        this.kepElem=this.szuloElem.lastElementChild
    }
    esemeny(){
        this.kepElem.addEventListener("click",()=>{
            const e=new CustomEvent("kivalaszt",{detail:this.#index})
            console.log("kattintas",this.#index)
            window.dispatchEvent(e)
            


        })
    }

    

}