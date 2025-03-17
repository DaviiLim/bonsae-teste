const mongoose = require('mongoose');

const PeriodoLetivoSchema = new mongoose.Schema({

    identificacao: { type: String, required: true, unique: true },
    periodo: { type: String, required: true },
    dataInicial: { type: Date, required: true },
    dataFinal: { type: Date, required: true }

});

const PeriodoLetivo = mongoose.model('PeriodoLetivo', PeriodoLetivoSchema);

module.exports = PeriodoLetivo;