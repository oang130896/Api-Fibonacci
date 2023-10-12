

exports.obtenerIndex = (req, res) => {
    const { n } = req.params

    //saber si se mando el parametro
    if(!n) return res.status(400).json({error: 'No se mando parametro n para buscar en fibonacci'})

    let identificarNumero = Number(n)

    //identificar si el parametro enviado es un numero
    if(isNaN(identificarNumero)) return res.status(400).json({error: 'El parametro enviado no es un numero como tal'})

    //saber si el numero enviado es un entero
    if(!Number.isInteger(identificarNumero)) return res.status(400).json({error: 'El parametro enviado no es un entero'})

    let index = 0

    //funcion fibonacci
    const getIndexFib = (n) => {
        if(n === 0) {
            return 0
        }

        if(n === 1) {
            return 1
        }

        let arrayFib = [0,1]

        for(i = 2; i <= n; i++){
            arrayFib.push(arrayFib[i-1] + arrayFib[i-2])
        }

        return arrayFib[arrayFib.length - 1]
    }

    index = getIndexFib(identificarNumero)

    res.send({mensaje: `La respuesta es ${index}`})
}