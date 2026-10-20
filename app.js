// ==========================================
// CONEXIÓN REAL CON GOOGLE SHEETS API
// ==========================================

const GOOGLE_SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbxUv38BAcFD0p1KoC4vi2R-MG2s3z_SJZ3hiym0Da9b_Ow_APx7MKZIHICzf7_aln9JuQ/exec"; // Pega la URL obtenida en el Paso 2

class GoogleSheetsAPI {
  async getInitialData() {
    const res = await fetch(`${GOOGLE_SHEETS_API_URL}?action=getInitialData`);
    return await res.json();
  }

  async registerUser(userData) {
    const res = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'registerUser', ...userData })
    });
    return await res.json();
  }

  async createReport(reportData) {
    const res = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'createReport', ...reportData })
    });
    return await res.json();
  }

  async redeemReward(userId, pointsCost) {
    const res = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'redeemReward', userId, pointsCost })
    });
    return await res.json();
  }

  async markRepaired(machineId) {
    const res = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'markRepaired', machineId })
    });
    return await res.json();
  }
}
