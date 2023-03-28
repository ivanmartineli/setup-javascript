
const getParamsId = (req, res) => {
    const id = req.params.id
    console.log('Id: ' + id)
    res.send("NOT IMPLEMENTED: Author create GET " + id);

}

const getQueryCpf = (req, res) => {
    const cpf = req.query.cpf
    console.log('Cpf: ' + cpf)
    res.send("NOT IMPLEMENTED: Author create GET " + cpf);

}

module.exports = { getQueryCpf, getParamsId };
