# Temi del portfolio

## Com'è organizzato

- `preferiti/` — i temi che hai scelto di conservare:
  - `avorio-1-corallo.css` — Corallo & Petrolio (**attualmente applicato al sito**)
  - `avorio-lilla-menta.css` — la palette chiara originale (lilla + menta)
  - `tema-2-notte.css` — Notte (dark elegante)
  - `tema-5-brutal.css` — Brutal (bianco/nero, ombre dure)
  - `tema-12-aurora.css` — Aurora (chiaro con gradienti viola-ciano)
  - `tema-13-grafite.css` — Grafite (dark quasi monocromo + ambra)
- gli altri file `tema-*.css` e `avorio-*.css` — proposte esplorate, visionabili con `anteprima_temi.html`

## Come cambiare tema in futuro

Il sito legge i colori dalle variabili CSS nel blocco `:root` di `styles.css`
(e da `body.dark` per la versione scura).

Due modi per applicare un tema salvato:

1. **Consigliato**: apri il file del tema in `preferiti/` e copia i valori delle
   variabili nel blocco `:root` di `styles.css`, sostituendo quelli esistenti.
   Se il tema è scuro o cambia font, copia anche quelle righe (es. `--font-head`).

2. **Rapido (per prova)**: aggiungi in fondo al `<head>` di `index.html`:
   `<link rel="stylesheet" href="temi/preferiti/NOME-TEMA.css">`
   Essendo caricato dopo `styles.css`, il tema sovrascrive i colori di base.
   Nota: con questo metodo lo switch chiaro/scuro potrebbe non essere coerente,
   perché `body.dark` in `styles.css` è calibrato sulla palette corallo.

## Switch chiaro/scuro

Il pulsante a pillola nella navbar alterna chiaro/scuro (palette corallo/petrolio
in entrambe le versioni). La scelta è ricordata nel browser (localStorage).
I colori della versione scura si modificano nel blocco `body.dark` di `styles.css`.
