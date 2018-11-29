---
layout: post
comments: true
title: "Tag 1: Einführung"
date: 2018-11-12 23:01:44
image: '/assets/img/'
description: Heute lernen wir etwas über die Anforderungen an die Ionic-Entwicklung. Inbesondere die notwendige Software. Am Ende gibts es auch noch ein paar Übungen und Fragen
main-class: 'info'
color:
tags:
categories:
twitter_text:
introduction:
---

## Checkliste

### 1. Software ist installiert
<table style="width: 600px">
	<colgroup>
		<col width="30%" />
		<col width="10%" />
		<col width="60%" />
	</colgroup>
	<thead>
		<tr class="header">
			<th align="left">Software</th>
			<th align="left">Check</th>
			<th align="left">Installation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Node JS</td>
			<td><pre>node --version</pre></td>
			<td><a href="https://nodejs.org/download/release/latest-v8.x/">Download</a></td>
		</tr>
		<tr>
			<td>Ionic				</td>
			<td> <pre>ionic --version</pre>								</td>
			<td><a href="http://blog.via-internet.de/blog/2018/11/09/ionic-4-installation-on-unix/">unter Unix</a>	</td></tr>
		<tr>
			<td>Visual Studio Code</td>
			<td> <pre>code</pre></td>
			<td><a href="https://code.visualstudio.com">Homepage</a>												</td></tr>
		<tr>
			<td>Git Versionskontrolle</td>
			<td> <pre>git --version</pre></td>
			<td>
				<a href="https://git-scm.com/download/win">Windows</a>
				<a href="https://git-scm.com/download/linux">Linux</a>
				<a href="https://git-scm.com/download/mac">Mac OS</a>												
			</td>
		</tr>
	</tbody>
</table>

### 2. Beispielanwendungen funktionieren
<table style="width: 600px">
	<colgroup>
		<col width="30%" />
		<col width="70%" />
	</colgroup>
	<thead>
		<tr class="header">
			<th align="left">Anwendung</th>
			<th align="left">Erfolgreich installiert?</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>sidemenu	</td><td>Ja / Nein</td></tr>
		<tr><td>tabs		</td><td>Ja / Nein</td></tr>
		<tr><td>blank		</td><td>Ja / Nein</td></tr>
	</tbody>
</table>

### 3. Screendump an Kursleiter gesendet
1. Starte bitte die Kommandoeingabe und eine Anwendung
2. Öffne den Programmcode in Visual Studio Code und
3. Erstelle einen Screendump auf dem man alle 3 Fenster sehen kann: 
   - VS Code, 
   - Anwendung/Internet Explorer
   - Kommandozeile
4. Schickt mir den Screendump

## Übungen

### 1. Erstelle eine neue App, basierend auf der Vorlagen  "sidemenu"
Öffne die Enrichment-Kommandozeile

{% highlight shell %}
mkdir C:/Enrichtment/Daten/01_uebungen
cd    C:/Enrichtment/Daten/01_uebungen

ionic ?????
{% endhighlight %} 

### 2. Starte die neu erstellte App
{% highlight shell %}
ionic ?????
{% endhighlight %} 

### 3. Erstelle eine neue App, basierend auf der Vorlagen "tabs"
{% highlight shell %}
cd    C:/Enrichtment/Daten/01_uebungen
ionic ?????
{% endhighlight %} 

### 4. Starte die neu erstellte App
{% highlight shell %}
ionic ?????
{% endhighlight %} 

### 5. Installieren eine Demo-App
Öffne die Enrichment-Kommandozeile

{% highlight shell %}
cd    C:/Enrichtment/Daten

mkdir 02_beispiele
cd    02_beispiele

git clone https://github.com/ionic-team/ionic-preview-app.git
cd ionic-preview-app

npm install
ionic serve
{% endhighlight %}   

## Fragen

### 1. In welchem Verzeichnis liegen die Dateien für die beiden Seiten  "home" und "list"
<table style="width: 600px">
	<colgroup>
		<col width="30%" />
		<col width="70%" />
	</colgroup>
	<thead>
		<tr class="header">
			<th align="left">Seite</th>
			<th align="left">Verzeichnis</th>
		</tr>
	</thead>
	<tbody>
	<tr><td>list</td><td> </td></tr>
	<tr><td>home</td><td> </td></tr>
	</tbody>
</table>

 
### 2. In welchem Verzeichnis liegt die Startdatei eurer Anwendung "index.html"
<table style="width: 600px">
	<colgroup>
		<col width="30%" />
		<col width="70%" />
	</colgroup>
	<thead>
		<tr class="header">
			<th align="left">Datei</th>
			<th align="left">Verzeichnis</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>index.html</td><td>-</td></tr>
	</tbody>
</table>

### 3. In welchen Dateien werden die folgenden Inhalt eurer Anwendung gespeichert?
<table style="width: 600px">
	<colgroup>
		<col width="30%" />
		<col width="70%" />
	</colgroup>
	<thead>
		<tr class="header">
			<th align="left">Inhalt</th>
			<th align="left">Dateierweiterung</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>Aufbau der Seite</td><td> </td></tr>
		<tr><td>Überschriften</td><td> </td></tr>
		<tr><td>Bilder</td><td> </td></tr>
		<tr><td>Texte</td><td> </td></tr>
		<tr><td>Farben</td><td> </td></tr>
		<tr><td>Schriftarten</td><td> </td></tr>
	</tbody>
</table>

### 4. In welchen Dateien wird der Programmcode eurer Anwendung definiert?
<table style="width: 600px">
	<colgroup>
		<col width="30%" />
		<col width="70%" />
	</colgroup>
	<thead>
		<tr class="header">
			<th align="left">Frage</th>
			<th align="left">Antwort</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>Programmiersprache</td><td></td></tr>
		<tr><td>Dateierweiterung</td><td></td></tr>
	</tbody>
</table>

### 5. Welche Bedeutung haben die folgenden Dateierweiterungen?
<table style="width: 600px">
	<colgroup>
		<col width="30%" />
		<col width="70%" />
	</colgroup>
	<thead>
		<tr class="header">
			<th align="left">Dateierweiterung</th>
			<th align="left">Bedeutung</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>.html	</td><td></td></tr>
		<tr><td>.css	</td><td></td></tr>
		<tr><td>.scss	</td><td></td></tr>
		<tr><td>.js		</td><td></td></tr>
		<tr><td>.ts		</td><td></td></tr>
		<tr><td>.json	</td><td></td></tr>
		<tr><td>.spec.ts</td><td></td></tr>
	</tbody>
</table>
