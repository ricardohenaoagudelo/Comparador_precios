// Función para comparar precios ajustados por concentración
function comparePrices() {
  const competitorProduct = document.getElementById('competitor-product').value;
  const competitorPrice = parseFloat(document.getElementById('competitor-price').value);
  const competitorConcentration = parseFloat(document.getElementById('competitor-concentration').value);

  const selectedProduct = document.getElementById('selected-product').value;
  const ourPrice = parseFloat(document.getElementById('our-price').value);
  const ourConcentration = parseFloat(document.getElementById('concentracion').value);

  if (!competitorProduct || isNaN(competitorPrice) || isNaN(competitorConcentration) || !selectedProduct || isNaN(ourPrice) || isNaN(ourConcentration)) {
    alert('Por favor, completa todos los campos con valores válidos antes de comparar.');
    return;
  }

  const adjustedCompetitorPrice = (competitorPrice / competitorConcentration) / 10;
  const adjustedOurPrice = (ourPrice / ourConcentration) / 10;

  let competitorPriceAtOurConcentration = (adjustedCompetitorPrice * ourConcentration) * 10;
  let resultMessage = '';

  if (competitorPriceAtOurConcentration < ourPrice) {
    resultMessage = `El producto competidor (${competitorProduct}) es más bajo que nuestro producto (${selectedProduct}) llevandolo a la misma concentracion.`;
  } else if (competitorPriceAtOurConcentration > ourPrice) {
    resultMessage = `Nuestro producto (${selectedProduct}) tiene un mejor precio en comparación con el competidor (${competitorProduct}) ajustado a la misma concentración.`;
  } else {
    resultMessage = `Ambos productos tienen el mismo precio ajustado por concentración.`;
  }

  const resultDiv = document.getElementById('comparison-result');
  resultDiv.innerHTML = `
    <h3>Resultado de la Comparación</h3>
    <p>Producto Competidor (${competitorProduct}): Precio por gramo = $${adjustedCompetitorPrice.toFixed(2)} de acuerdo a la concentracion</p>
    <p>Conversión del precio del competidor ajustado a nuestra concentración (${ourConcentration}%): $${competitorPriceAtOurConcentration.toFixed(2)} por kilo</p>
    <p>Nuestro Producto (${selectedProduct}): Precio por gramo = $${adjustedOurPrice.toFixed(2)} de acuerdo a la concentracion</p>
    <p>${resultMessage}</p>
  `;
}

// Función para manejar el cambio de producto seleccionado
function handleProductChange() {
  const selectedProduct = document.getElementById("selected-product").value;
  const concentrations = {
    'AMOXIN 600': 60,
    'CIPROFLOX': 20,
    'FENIFLOR': 20,
    'FOSMICYNA 90': 90,
    'TILCOMIX': 40,
    'TILOMIX 250': 25,
    'TYLVASSYN': 20,
    'ESPELIN': 8.8,
    'DINAMIX 200': 20,
    'DINAMIX 800': 80,
    'DQCICLIN': 50,
    'CLORDIAGRO': 20,
    'LINCOX': 4.4,
    'TRIMBAC': 75,
    'NEOCYN': 50,
    'HALQUINOX 500': 50,
    'HALQUINOX 800': 80,
    'SAGAH': 8,
    'DMB': 11,
    // Añadir más productos y concentraciones aquí
  };

  document.getElementById('concentracion').value = concentrations[selectedProduct] || '';
}

// Añadir un evento de cambio al select
document.getElementById("selected-product").addEventListener("change", handleProductChange);
