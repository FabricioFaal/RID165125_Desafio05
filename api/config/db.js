const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://fabriciofaal:Faal226974@cluster0.qgzgjkz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    });
    console.log("🚀 Conectado ao MongoDB com sucesso!");
  } catch (err) {
    console.error("🔴 Erro ao conectar no MongoDB:", err);
  }
};

module.exports = connectDB;
