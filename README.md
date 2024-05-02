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

Na het designen ben ik de HTML gaan toevoegen. Ik heb ervoor gekozen om één form te maken i.p.v. meerdere zodat je nog terug kan gaan om het te editten. Wel wou ik de onderdelen behouden zodat je niet alle content op één pagina hebt en dit heb ik gedaan door de door de section te navigeren met behulp van :target in CSS. De huidige section is dan zichtbaar en de rest niet.

<img width="258" alt="Scherm­afbeelding 2024-05-02 om 15 44 27" src="https://github.com/lynnwolters/BT-lynnwolters/assets/47858242/bb479cd4-75b7-4a2d-a88d-e23dad52da14">

Daarna heb ik grondig de PDF bestudeerd waarin ik al gauw opmerkte dat er verschillende grids aanwezig waren. Omdat ik blokken toe wou voegen zonder die elke keer opnieuw te stylen heb ik hiervoor drie classes gebruikt zodat ik ze op elk blok kon zetten. Daarna ben ik begonnen met het coderen en heb ik het als volgt opgebouwd:

Main > form > section > fieldset > legend > label > input (type ahv waar het voor nodig was)

Ik heb de input in de labels gezet zodat ik niet extra 'for' moest gebruiken, dit om de HTML overzichtelijk te houden. Daarnaast heb ik bij elk veld gekeken welke attributes nodig en handig waren. Zoals minlength, required of inputmode. Ook heb ik een valid en invalid styling meegegeven aan de alle velden die ik later heb uitgebreid met JavaScript. Als laatste heb ik de HTML gevalideerd en aangepast zodat ik alleen nog maar warnings over had, vaak waren dit warnings waar ik niks aan kon doen verder, zoals een input type die niet beschikbaar was in een hele oude browser.

<img width="1033" alt="Scherm­afbeelding 2024-05-02 om 15 40 12" src="https://github.com/lynnwolters/BT-lynnwolters/assets/47858242/995cf7cd-de5e-4dec-9296-4cfc5bb87d96">

## Functies

### Localstorage

Ik heb localstorage toegevoegd om de ingevulde velden te bewaren als je het venster refresht of sluit. Op deze manier kan de gebruiker verder wanneer die wil zonder de voortgang te missen. Ik heb dit gedaan door eerst alles input velden op te slaan in localstorage en daarna uit de localstorage te halen, als er een window.load is zal de localstorage het opnieuw in de velden zetten.

### Valid en invalid pas zichtbaar als je begint met typen + behouden na refresh

Omdat valid en invalid in CSS puur aangeeft of een veld goed is ingevuld of niet heb ik met JS de functie uitgebreid. Als de localstorage erin werd gezet waren alle valid en invalid stylings verwijderd en werden velden al gemarkeerd zonder dat er wat in stond of dat het veld was aangeraakt.

### Correcte datum invoer

Ik heb een functie toegevoegd waarbij de gebruiker alleen datums kan invullen uit het verleden en niet de toekomst, zo voorkom ik dat er een ongeldige datum wordt ingevoerd.

### Pas doorgaan naar volgende onderdelen als required fields zijn ingevuld

Om de form validatie iets beter te laten verlopen heb ik een functie gemaakt waarbij de gebruiker pas verder kan als alle velden zijn ingevuld die verplicht zijn. Dit om te voorkomen dat ze verward raken op het einde waarom alles nog niet is ingevuld en ze niet helemaal terug te hoeven zoeken.

### Velden open klappen

Ik heb een functie gemaakt die ervoor zorgt dat als je op ja of nee radio button klikt dat er dan een accordion opengaat met het vervolg van de vraag. Dit heb ik ook bij verkrijgers gedaan alleen dan dat je verkrijgers toe kan voegen aan de hand van hoeveel je er wilt hebben.


 

