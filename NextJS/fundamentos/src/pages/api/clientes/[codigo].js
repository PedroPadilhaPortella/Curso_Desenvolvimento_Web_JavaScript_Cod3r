export default function handler(req, res) {

    const codigo = req.query.codigo

    res.status(200).json({
        id: codigo, 
        name: `Pedro Portella`, 
        idade: 19, 
        email: `pedro.portella${codigo}@gmail.com`
    })

}