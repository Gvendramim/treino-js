function Contar(){
    const ini = document.getElementById("txt1")
    const fim = document.getElementById("txt2")
    const passo = document.getElementById("txt3")
    const res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert("[ERRO] Faltam Dados.")
    } else{
        res.innerHTML = "Contando:"

            // Contagem Inicio
        const i = Number(ini.value)
        const f = Number(fim.value)
        const p = Number(passo.value)
        if ( i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c}, `
            }       
        } else {
            //Contagem regressiva
            for(let c = i; c>= f; c -= p)
            res.innerHTML += `${c}, `    
        } 
        res.innerHTML += `.` 
    }
}