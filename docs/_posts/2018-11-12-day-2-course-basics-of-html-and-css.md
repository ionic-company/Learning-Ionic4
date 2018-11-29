---
layout: post
comments: true
title: "Tag 2: Grundlagen HTML und CSS"
date: 2018-11-12 23:01:44
image: '/assets/img/'
description: Heute lernen wir HTML und CSS anzuwenden. Am Ende gibts es auch noch ein paar Übungen und Fragen
main-class: 'html'
color: green
tags:
- html
- css
categories:
twitter_text:
introduction:
---

# Erste Schritte
Die nachfolgenden Beispiele setzen auf eine vorhandeen Ionic App auf. Als Beispiel wir einen App verwendet, die mit der Vorlage **sidemenu** erstellt wurde.

{% highlight html %}
ionic start sidemenu sidemenu --type angular --no-link
{% endhighlight %}

## Titel ändern
Wir ändern den Titel der Seite **home**. Die Änderung erfolgt in der Datei `home.page.html`:

{% highlight html %}
<ion-title>Arbeiten mit CSS</ion-title>
{% endhighlight %}

## Farbe des Titels
Den geänderten Titel formatieren wir nun mit einer individuellen Farbe. Die Änderung erfolgt in der Datei `home.page.css`:

{% highlight css %}
ion-title {
	color: #3880ff;
}
{% endhighlight %}

## Farbe des Hintergrund
Jetzt setzen wir den Hintergrund des Titels:

{% highlight css %}
ion-title {
	color: #ffffff;
	background-color: #ff0000;
}
{% endhighlight %}

## Weiterer Text und Formatierung
In nächsten Schritt fügen wir weiter Überschriften in die Seite ein:

{% highlight html %}
<ion-content padding>
	<h1>Überschrift H1</h1>
	<h2>Überschrift H2</h2>
</ion-content>
{% endhighlight %}

Für diese Überschriften passen wir nun auch die Formatierung an:
{% highlight css %}
h1 {
	color: #ff0000;
	background-color: #000000;
	font-family: 'Courier New', Courier, monospace;
}

h2 {
	color: #000000;
	background-color: #ff0000;
	font-style: italic;
}
{% endhighlight %}

## Weitere Beispiele
Und zum Abschluss weiter Textelemente und Formatierungen:

{% highlight html %}
<ion-content padding>
  <h1>Überschrift 1</h1>
  <h2>Überschrift 2</h2>
  <h1>Überschrift 3</h1>
  <h4>Überschrift 4</h4>

  Normaler Text
  Die Welt ist <b>rund</b> und gross.
</ion-content>
{% endhighlight %}

Und hier die entsprechenden CSS-Formatierungen:
{% highlight css %}
ion-title {
    color: #ffffff;
    background-color: #00ff00;
}

h1 {
    color: greenyellow;
}

h1 {
    color: red;
}

h3 {
    background-color: aqua;
    font-family: 'Courier New', Courier, monospace;
}
{% endhighlight %}

# Grundlagen HTML

## Aufbau einer Seite

{% highlight html %}

{% endhighlight %}


## HTML Elemente

### Gliederungen und Textformatierungen

{% highlight html %}
{% endhighlight %}

### Tabellen

{% highlight html %}
<table>
	<tr>
		<td>1.1</td><td>1.2</td>
	</tr>
	<tr>
		<td>2.1</td><td>2.2</td>
	</tr>
</table>
{% endhighlight %}
<table>
	<tr>
		<td width="50%">1.1</td><td width="50%">1.2</td>
	</tr>
	<tr>
		<td>2.1</td><td>2.2</td>
	</tr>
</table>

{% highlight html %}
{% endhighlight %}

# Grundlagen CSS

##  Einbinden von CSS
Es gibt verschiednen Arten, CSS-Definitionen in eine Webseite oder eine ganzen Web-App einzubinden.

### Inline CSS
Hier wird die CSS-Definition direkt im HTML-Code eingefügt. Eine einfache Möglichheit mit dem Nachteil, das sie nu an dieser Stelle und für das verwendete Element gültig ist.

{% highlight html %}
<h1 style="color: blue"> Hello world! </h1>
{% endhighlight %}

### Internal CSS

{% highlight html %}
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
{% endhighlight %}

### External CSS

{% highlight html %}
<head>
    <link rel="stylesheet" href="style.css">
</head>
{% endhighlight %}

## CSS Selectors

### Element
Der erste Möglichkeit, ein HTML Element zu formatieren ist, den Namen des HTML-Elementes selbst zu verwenden.
Die Formatierung gilt dann nur für das angegebene ELement, im nachfolgenden Beispiel also __h1__, __p__ und __div__:
{% highlight css %}
h1 {
    font-size: 20px;
}
p {
    color: green;
}
div {
    margin: 10px;
}
{% endhighlight %}

###  Class
Eine andere Möglichkeit ist die Verwenung einer CSS Klasse. Hier wird über einen Namen (dem Namen der Klasse) die Formatierung zusammengefasst. Der Name der Klasse wird dann im HTML-Element verwendet.

Vorteil: Die Formatierung kann mehreren, auch unterschiedlichen HTML-Elementen zugewiesen werden:

{% highlight html %}
<div class='container'>
    <h1> This is heading </h1>
</div>
{% endhighlight %}

{% highlight css %}
.container {
    margin: 10px;
}
{% endhighlight %}

## ID
Eine weitere Möglichkeit der Zuweisung von CSS-Formatierung ist die Verwendung einer ID. Diese erfolgt ebenfalls wie bei einer Klasse über den Namen der ID.

Im Unterschiede zu einer Klasse darf eine ID nur einmal in einer HTML Seite verwendet werden:

{% highlight html %}
<div>
    <p id='para1'> This is a paragraph </p>
</div>
{% endhighlight %}

{% highlight css %}

#para1 {
    color: green;
    font-size: 16px;
}
{% endhighlight %}

## Fonts & Colors

{% highlight html %}
<div class='container'>
    <h1 class='heading1'>
        CSS ist toll!
    </h1>
</div>
{% endhighlight %}

{% highlight css %}
.container {
    width: 500px;
    height: 100px;
    background-color: red;
    text-align: center;
}
.heading1 {
    font-family: 'Courier New';
    color: tomato;
}
{% endhighlight %}

<hr />
<div style="width: 500px; height: 100px; background-color: red; text-align: center">
    <h1 clstyle="font-family: 'Courier New'; color: tomato;">
        CSS ist toll!
    </h1>
</div>
<hr />

# Beispiel für Formatierungen

{% highlight html %}
h1  { font-size: 50px; }
{% endhighlight %}
<h1  style="font-size: 50px">Hier steht das Element h1</h1>

{% highlight html %}
p   { color: green; }
{% endhighlight %}
<p style="color: green">Hier ist das Element p</p>

{% highlight html %}
div { margin: 10px; background-color: gray;	}
{% endhighlight %}
<div style="margins: 10px; background-color: gray">Und das ist der div</div>
