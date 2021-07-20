var html_to_pdf = require('html-pdf-node');

let options = { format: 'A4' };

module.exports = async (req, res) => {
    try {
        let file = req.body.url;

        let pdf = html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
            console.log("PDF Buffer:-", pdfBuffer);
            return pdfBuffer
        })
        return res.send({ pdf })
    } catch (e) {
        res.status(500).json(e);
    }
}
