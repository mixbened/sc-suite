# Dokumentation START.CODE Website

## Vision

Diese Anwendung soll eine Plattform für die Coding School START.CODE darstellen. Sie soll Informationen über aktuelle Kurse ausgeben, als auch die Möglichkeit zu deren Anmeldung stellen. Nachdem sich Teilnehmer angemeldet haben, sollen sie in dieser Anwendung alle relevanten Informationen zu ihren Kursen finden.

## Authoren

Benedikt Mix

## Tools / APIs

* Contentful
* Zapier
* Eventbrite

## Dependencies / Frameworks

* Vue.js V3
* Gridsome V0.7
* Bootstrap V4

## Architektur

Grundsätzlich wird der ganze Content über die Contentful API verwaltet und dort erstellt. Validierungen für die Richtigkeit sollen in diesem Tool hinterlegt werden. Der Zapier Dienst wird aktuell nur zum senden von Email verwendet. Es gibt einen Webhook von Zapier, welcher durch das Abschicken des Formulars getriggert wird. Dieser sendet eine Anfrage an eine angegebene Adresse.

## Deployment

Das Deployment läuft über den Anbieter Netlify. Grundsätzlich ist diese Anwendung eine Seite mit Static-Content. Gridsome liefert als Framework die Möglichkeit die Seite mit Webpack zum Deployment zu ```build```en. 
Dies geschieht mit dem Command ```gridsome build```. Was nun passiert ist, dass sich die Anwendung den Content aus er Contentful API zieht und in eine GraphQL Datenschicht integriert. Aus dieser Datenschicht werden dann HTML Dateien erstell. Nach erfolgreichem *build* wird ein *dist* Ordner ausgegeben. Dieser kann einfach gehostet werden. Er enthält die komplette Anwendung.
Es handelt sich zwar um statischen Content, doch dieser wird mehrfach verändert, weshalb Netlify ein Tool zur Continous Integraton hier darstellt. Wenn sich der entsprechende Github Ordner in der Branch *master* aktualisiert, wird die seite neu deployt. Außerdem besteht ein Webhook zwischen Contentful und Netlify. Bei jeder Content Aktualisierung wird ein neue *build* getriggert.