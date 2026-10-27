module.exports = async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({error:'Nem támogatott kérés.'}); }
  const {nev,email,telefon,adatkezeles,website} = req.body || {};
  if (website) return res.status(200).json({ok:true});
  if (typeof nev !== 'string' || nev.trim().length < 2 || nev.length > 120 || typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || (telefon != null && (typeof telefon !== 'string' || telefon.length > 40)) || adatkezeles !== true) return res.status(400).json({error:'Ellenőrizd a megadott adatokat és az adatkezelési hozzájárulást.'});
  const {RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL} = process.env;
  if (!RESEND_API_KEY || !LEAD_TO_EMAIL || !LEAD_FROM_EMAIL) return res.status(503).json({error:'A kapcsolatfelvétel még nincs beállítva. Kérjük, próbáld később.'});
  try {
    const response = await fetch('https://api.resend.com/emails', {method:'POST',headers:{Authorization:`Bearer ${RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:LEAD_FROM_EMAIL,to:[LEAD_TO_EMAIL],subject:'Új érdeklődő – Lakáskeresés fiataloknak',text:`Név: ${nev.trim()}\nE-mail: ${email.trim()}\nTelefon: ${(telefon||'').trim()}\nAdatkezelési hozzájárulás: igen`,reply_to:email.trim()})});
    if (!response.ok) return res.status(502).json({error:'A továbbítás most nem sikerült. Kérjük, próbáld újra.'});
    return res.status(200).json({ok:true});
  } catch {return res.status(502).json({error:'Kapcsolódási hiba. Kérjük, próbáld újra.'});}
};
