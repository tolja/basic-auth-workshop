const express = require('express')
const app = express()

app.get('/', (req, res) => {

  // TODO: Authentifizierung mit Basic Auth bauen

  // Pseudo
  // Authorization Header aus dem req-Objekt abfragen
  // Prüfen ob Authorization Header gegeben
  // wenn nicht, Fehler
  // wenn ja, prüfen ob Nutzername und Passwort stimmen

  var auth = null;

  if (!auth) {

    // Popup für Abfrage nach Nutzername und Passwort
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');

    // Fehlermeldung

  } else {

    // Ausgabe des Authorization Header in Plaintext
    var plain_auth = new Buffer(auth.split(' ')[1], 'base64').toString().split(':');
    console.log("Authorization ", plain_auth);

    // Nutzername und Passwort aus plain_auth extrahieren (Tipp: Array)
    var username = null;
    var password = null;

    // Wenn Nutzername == "Selbst definierter Nutzername" und Passwort == "Selbst definiertes Passwort"
    if (true) {

      // Erfolgsmeldung

    } else {

      res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');

      // sonst Fehlermeldung

    }

  }
});


app.listen(3000, function() {
  console.log("Server ist listening on http://localhost:3000/");
});
