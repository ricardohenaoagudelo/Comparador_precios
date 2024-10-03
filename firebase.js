// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Importa Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB20L6I6p4FdDSsz_SHNcjV4LmvDTn-QCo",
  authDomain: "comparador-de-precios-a9997.firebaseapp.com",
  projectId: "comparador-de-precios-a9997",
  storageBucket: "comparador-de-precios-a9997.appspot.com",
  messagingSenderId: "205661284753",
  appId: "1:205661284753:web:455777bda5d3b1d5cb5230",
  measurementId: "G-56CYTQ1WS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa Firestore
const db = getFirestore(app);

// Función para guardar el precio de la competencia en Firestore
async function saveCompetitorPrice(competitorProduct, competitorPrice, competitorConcentration) {
    try {
      const docRef = await addDoc(collection(db, 'competitorPrices'), {
        product: competitorProduct,
        price: competitorPrice,
        concentration: competitorConcentration,
        date: new Date()
      });
      console.log("Documento guardado con ID: ", docRef.id);
    } catch (e) {
      console.error("Error añadiendo el documento: ", e);
    }
  }

function comparePrices() {
  // Obtener los valores de los productos competidores
  const competitorProduct = document.getElementById('competitor-product').value;
  const competitorPrice = parseFloat(document.getElementById('competitor-price').value);
  const competitorConcentration = parseFloat(document.getElementById('competitor-concentration').value);

  // Obtener los valores de los productos nuestros
  const selectedProduct = document.getElementById('selected-product').value;
  const ourPrice = parseFloat(document.getElementById('our-price').value);
  const ourConcentration = parseFloat(document.getElementById('concentracion').value);

  // Verificar que todos los campos estén completos
  if (!competitorProduct || isNaN(competitorPrice) || isNaN(competitorConcentration) || !selectedProduct || isNaN(ourPrice) || isNaN(ourConcentration)) {
    alert('Por favor, completa todos los campos con valores válidos antes de comparar.');
    return;
  }

  // Guardar los datos en Firestore
  saveCompetitorPrice(competitorProduct, competitorPrice, competitorConcentration);

  // (Continúa con la lógica de comparación de precios)
}
