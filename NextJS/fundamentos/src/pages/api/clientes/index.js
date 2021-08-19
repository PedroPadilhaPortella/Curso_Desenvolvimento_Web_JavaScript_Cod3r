export default function client(req, res) {
    if(req.method === 'POST') {
        res.status(405).end()
    } else {
        handleGet(req, res)
    }

}

function handleGet(req,res) {
    res.status(200).json({ id: 1, name: "Pedro Portella", idade: 19, email: "pedro@gmail.com" })
}