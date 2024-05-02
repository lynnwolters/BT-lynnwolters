# ❗ Dit is een opdracht voor school, geen echt product van de Belastingdienst. ❗

<img width="1145" alt="Scherm­afbeelding 2024-05-02 om 15 17 02" src="https://github.com/lynnwolters/BT-lynnwolters/assets/47858242/63dd97b5-3e50-43e5-8210-76acab1f0e58">

# Proces

## Onderzoek & inspiratie

Het eerste wat ik wilde doen, is de structuur van de PDF leren kennen, alle benodigde functies opschrijven en wat inspiratie opdoen over hoe deze structuren en functionaliteiten ontworpen en gebouwd kunnen worden.

<img width="1261" alt="Scherm­afbeelding 2024-03-07 om 16 58 11" src="https://github.com/lynnwolters/browser-technologies-lynnwolters/assets/47858242/1bce8fb2-3061-43fe-bf59-739bc031cca0">

Ik heb een Pinterest board gemaakt met enkele UI/UX do's en don'ts bij het ontwerpen van formulieren en artikelen gelezen (zie bronnen in deze Wiki). Vervolgens heb ik deze kennis toegepast toen ik de PDF omzette naar een gebruikersinterface.

## Design

Dit is het ontwerp dat ik als richtlijn wil gebruiken voor het bouwen van het formulier. Ik heb het specifiek ontworpen zodat het in HTML en CSS kan worden gebouwd, en zelfs zonder CSS indien nodig. Ik heb de hoofdstukken verdeeld over pagina's, en elk paragraaf heeft zijn eigen sectie die is gescheiden door lijnen. Op deze manier is het voor de gebruiker heel duidelijk en begrijpelijk om door het formulier te navigeren. Er wordt ook aangegeven in welk hoofdstuk je je bevindt en wanneer je 'nee' kiest bij de radiobuttons, zal de rest van de sectie worden uitgeschakeld. Elke verplichte vraag zal een '*' symbool erachter hebben om aan te geven dat de vraag moet worden ingevuld. Wanneer een invoerveld fout is, krijg je een rode rand eromheen en wanneer het goed is, een groene rand. Tot slot heb ik ervoor gezorgd dat alle invoervelden en vragen die bij elkaar horen van links naar rechts worden gelezen en wanneer het een ander invoerveld is dat er niet bij hoort, zal dit op een nieuwe regel staan.

![form](https://github.com/lynnwolters/browser-technologies-lynnwolters/assets/47858242/532c6f75-1b9a-44d6-89a3-1e9d73cbbf2d)

## Toevoegen van HTML

Na het ontwerpen van de lay-out ben ik begonnen met het toevoegen van HTML. Ik koos ervoor om één formulier te maken in plaats van meerdere, zodat gebruikers gemakkelijk kunnen teruggaan om informatie te bewerken. Tegelijkertijd wilde ik de verschillende secties behouden, zodat alle inhoud niet op één pagina terechtkomt. Dit heb ik bereikt door secties te navigeren met behulp van de :target pseudo-klasse in CSS. Hierdoor is alleen de huidige sectie zichtbaar, terwijl de rest verborgen blijft.

Vervolgens heb ik de PDF grondig bestudeerd en ontdekte ik dat er verschillende roosters (grids) werden gebruikt. Om blokken toe te voegen zonder herhaaldelijk nieuwe stijlen toe te passen, heb ik drie klassen gemaakt die ik op elk blok kon toepassen. Daarna ben ik begonnen met coderen en heb ik de volgende structuur opgebouwd:

<img width="258" alt="Scherm­afbeelding 2024-05-02 om 15 44 27" src="https://github.com/lynnwolters/BT-lynnwolters/assets/47858242/bb479cd4-75b7-4a2d-a88d-e23dad52da14">

Ik heb de invoervelden binnen de labels geplaatst om te voorkomen dat ik extra for-attributen moest toevoegen, wat de HTML overzichtelijker maakt. Bij het definiëren van de velden heb ik gekeken naar welke attributen nodig of handig waren, zoals minlength, required, of inputmode. Bovendien heb ik validatie- en invalidatiestijlen toegepast op alle velden, die ik later heb uitgebreid met JavaScript voor interactieve feedback.

Ik heb de HTML ook gevalideerd en waar mogelijk aangepast om alleen nog waarschuwingen te krijgen, zoals situaties waarin ik niets kon doen aan bepaalde inputtypes die niet worden ondersteund in verouderde browsers.

Daarnaast heb ik het formulier uitgebreid getest op mobiele apparaten en met behulp van een toetsenbord om de toegankelijkheid te waarborgen. Het is belangrijk dat alle gebruikers, inclusief mensen met beperkingen, de formulieren gemakkelijk kunnen gebruiken. De aangebrachte verbeteringen zorgen ervoor dat de inhoud goed zichtbaar en bruikbaar is, ongeacht het apparaat of de methode van interactie die wordt gebruikt.

<img width="1033" alt="Scherm­afbeelding 2024-05-02 om 15 40 12" src="https://github.com/lynnwolters/BT-lynnwolters/assets/47858242/995cf7cd-de5e-4dec-9296-4cfc5bb87d96">

## Functies

### Local Storage

Ik heb Local Storage toegevoegd om de ingevulde velden te bewaren wanneer het venster wordt ververst of gesloten. Op deze manier kan de gebruiker op elk gewenst moment doorgaan zonder zijn voortgang te verliezen. Eerst sla ik alle invoervelden op in Local Storage en vervolgens haal ik deze informatie weer op bij het laden van de pagina, zodat de velden opnieuw worden ingevuld.

### Zichtbaarheid van 'Valid' en 'Invalid' pas na invoer en behoud na refresh

Aangezien 'Valid' en 'Invalid' in CSS aangeven of een veld correct is ingevuld, heb ik JS gebruikt om dit gedrag uit te breiden. Wanneer de informatie in Local Storage wordt gezet, worden alle 'Valid' en 'Invalid'-stijlen verwijderd, zodat velden niet onterecht gemarkeerd worden zonder dat er data is ingevuld of het veld is aangeraakt.

### Correcte datuminvoer

Ik heb een functie toegevoegd waarmee gebruikers alleen datums uit het verleden kunnen invoeren, niet uit de toekomst. Op deze manier voorkom ik dat er ongeldige datums worden ingevoerd.

### Doorgaan naar volgende secties alleen als vereiste velden zijn ingevuld

Om de validatie van het formulier te verbeteren, heb ik een functie gemaakt waarmee gebruikers alleen verder kunnen gaan als alle verplichte velden zijn ingevuld. Hiermee voorkom ik dat ze op het einde verward raken over waarom niet alles is ingevuld en ze niet helemaal terug hoeven te gaan om ontbrekende informatie te zoeken.

### Uitklappen van velden

Ik heb een functie toegevoegd waarmee wanneer je op 'Ja' of 'Nee' bij een radiobutton klikt, een accordion wordt geopend met het vervolg van de vraag. Dit heb ik ook gedaan voor het toevoegen van verkrijgers, waarbij je verkrijgers kunt toevoegen op basis van het aantal dat je wilt hebben.

# Bronnen

- https://designlab.com/blog/form-ui-design-best-practices (do's en dont's bij het designen van een form)
- https://blog.logrocket.com/localstorage-javascript-complete-guide/ (localstorage)
- https://www.a11yproject.com/checklist/ (checklist accessibility)
- https://validator.w3.org/ (HTML valideren)
- https://www.google.com/search?q=mdn+web+docs+accessibility&rlz=1C5CHFA_enNL1040NL1040&oq=mdn+web+docs+acc&gs_lcrp=EgZjaHJvbWUqCQgAEAAYExiABDIJCAAQABgTGIAEMgYIARBFGDkyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzMjczajBqOagCALACAA&sourceid=chrome&ie=UTF-8 (accessibility)
 

