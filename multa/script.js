const velo = document.getElementById('km')
        const res = document.getElementById('velocidade')
        
        function clicar() {
            const valor = Number(velo.value)
            res.innerHTML = `Sua Velocidade é ${valor}Km/h`

            if (valor > 60){
                res.innerHTML += `<p>VOCE FOI MULTADO!!!!<p>`
                window.alert (`ATENÇÃO!!!`)
            }
        }