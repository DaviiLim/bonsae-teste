const express = require('express');
const connectDB = require('./src/config/database.js');
const dotenv = require('dotenv');
const morgan = require('morgan');
const PeriodoLetivo = require('./src/model/periodoLetivoModel.js');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.post('/periodoLetivo', async (req, res) => {
  const periodoLetivo = await PeriodoLetivo.create(req.body)
  try{
    res.status(201).json(periodoLetivo)
  }catch(error){
    res.status(500).json({error : error.message})
  }

});

app.get('/periodoLetivo', async (req, res) => {
  try {
    const periodoLetivoInfo = await PeriodoLetivo.find();
    
    if (periodoLetivoInfo.length === 0) {
      return res.status(404).json({ message: 'Nenhum período letivo encontrado!' });
    }

    res.status(200).json(periodoLetivoInfo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar os períodos letivos!', error: error.message });
  }
});

app.get('/periodoLetivo/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const periodoLetivoID = await PeriodoLetivo.findById(id);
    res.status(200).json(periodoLetivoID);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o período letivo!', error: error.message });
  }
});

app.put('/periodoLetivo/:id', async (req,res) => {
  
  try {
    const id = req.params.id;
    const periodoLetivoID = await PeriodoLetivo.findByIdAndUpdate(id, req.body, { new : true});
    res.status(200).json(periodoLetivoID);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o período letivo!', error: error.message });
  }

})

app.patch('/periodoLetivo/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const periodoLetivoID = await PeriodoLetivo.findByIdAndUpdate(id, req.body, { new : true});
    res.status(200).json(periodoLetivoID);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o período letivo!', error: error.message });
  }
});

app.delete('/periodoLetivo/:id', async (req,res) => {
  
  try {
    const id = req.params.id;
    const periodoLetivoID = await PeriodoLetivo.findByIdAndDelete(id);
    res.status(200).json(periodoLetivoID);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o período letivo!', error: error.message });
  }

})

connectDB();

app.listen(PORT, () => {
  try {
    console.log(`Projeto rodando na porta http://localhost:${PORT}`);
  }catch(error){
    console.error('ERRO - ', error);
  }
})
