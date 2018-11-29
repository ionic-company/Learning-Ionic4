---
layout: post
comments: true
title: "Working with Jekyll"
date: 2018-11-13 07:48:16
image: '/assets/img/'
description:
main-class:
color:
tags:
categories:
twitter_text:
introduction:
---

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}


This is a simple and minimalist template for Jekyll designed for developers that want to write blog posts but don't want to care about frontend stuff.

The Theme features:

- Gulp
- Stylus (Jeet, Rupture, Kouto Swiss)
- Live Search
- Offcanvas Menu
- SVG icons
- Very very small and fast!
- Shell Script to create posts
- Tags page
- Series page
- About Me page
- Feed RSS
- Sitemap.xml
- Color Customization
- Info Customization

## Basic Setup

1. [Install Jekyll](http://jekyllrb.com)
2. Fork the [Will Jekyll Template](https://github.com/willianjusten/will-jekyll-template/fork)
3. Clone the repo you just forked.
4. Edit `_config.yml` to personalize your site.
5. Check out the sample posts in `_posts` to see examples for assigning categories and tags, and other YAML data.
6. Read the documentation below for further customization pointers and documentation.
7. **Remember to compile your assets files with Gulp.**

## Site and User Settings

You have to fill some informations on `_config.yml` to customize your site.

```
# Site settings
description: A blog about lorem ipsum dolor sit amet
baseurl: "" # the subpath of your site, e.g. /blog/
url: "http://localhost:3000" # the base hostname & protocol for your site 

# User settings
username: Lorem Ipsum
user_description: Anon Developer at Lorem Ipsum Dolor
user_title: Anon Developer
email: anon@anon.com
twitter_username: lorem_ipsum
github_username:  lorem_ipsum
gplus_username:  lorem_ipsum
disqus_username: lorem_ipsum
```

## Header Name

To use the power of CSS Content and media query, the header name is defined on [src/styl/_header.styl](). Change to your prefered name.

## Color customization

All color variables are in `src/styl/variable`. To change the main color, just set the new value at `main` assignment. Another colors are for texts and the code background color.

## Theme Colors

Every post has a main color that is defined on [src/styl/_theme-colors.styl](). Just create a new color with the prefix `post-` and define your main-class: 'css' and color: '#2DA0C3' on every post you create.

## Creating posts

You can use the `initpost.sh` to create your new posts. Just follow the command:

```
./initpost.sh -c Post Title
```

The new file will be created at `_posts` with this format `date-title.md`.

## Front-matter 

When you create a new post, you need to fill the post information in the front-matter, follow this example:

```
---
layout: post
title: "Falando sobre RSCSS"
date: 2016-02-07 18:48:16
image: '/assets/img/rscss/rscss.png'
description: 'Escrevendo CSS sem perder a sanidade. Aprenda uma metodologia que pode salvar muitas dores de cabeça.'
main-class: 'css'
color: '#2DA0C3'
tags:
- css
- metodologia
- frontend
categories:
twitter_text: 'Escrevendo CSS sem perder a sanidade.'
introduction: 'Escrevendo CSS sem perder a sanidade. Com essa introdução, Rico St. Cruz o criador chama a atenção de todos sobre uma metodologia melhor para se escrever CSS.'
---
```

## Running the blog in local

In order to compile the assets and run Jekyll on local you need to follow those steps:

- Install [NodeJS](https://nodejs.org/)
- Run `npm install` 
- Run `gulp`

## Windows 10 Step

If you use Windows 10, change this line on [gulpfile.js](https://github.com/willianjusten/will-jekyll-template/blob/gh-pages/gulpfile.js#L23) to `spawn('jekyll.bat', ['build'])`.

## Questions

Having a problem getting something to work or want to know why I setup something in a certain way? Ping me on Twitter [@willian_justen](https://twitter.com/willian_justen) or file a [GitHub Issue](https://github.com/willianjusten/will-jekyll-template/issues/new).


## Donation

If you liked my work, buy me a coffee <3

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UTMFZUHX6EUGE)

## License

This theme is free and open source software, distributed under the The MIT License. So feel free to use this Jekyll theme on your site without linking back to me or using a disclaimer.

If you’d like to give me credit somewhere on your blog or tweet a shout out to [@willian_justen](https://twitter.com/willian_justen), that would be pretty sweet.

## Introdução

Faaaala pessoal, fazia muito tempo que eu não escrevia e confesso que isso já estava me agoniando. Então resolvi voltar a <s>falar besteiras</s> escrever!! 

Como não poderia deixar de ser, estou escrevendo ouvindo música. A playlist de hoje é [Brains](https://open.spotify.com/user/spotifybrazilian/playlist/0nUucSaL2BGl2VZlbY5TwR), uma playlist que está sendo montada lá na [CCXP](http://www.ccxp.com.br/), muita música maneira! Bota para tocar e vai lendo =D

## Qualidade de Código

Provavelmente você já passou horas escrevendo seu código lindo e aí, do nada, ele parou de funcionar. Então você ficou mais perdido que o John Travolta no Discurso da Dilma.

![John Travolta Meme](https://media.giphy.com/media/FWXpxEbWcOapq/giphy.gif)

 Você, então, em toda sua humildade, chegou para um amigo e pediu para ele dar uma olhada e ele falou frases assim:

> Você esqueceu de colocar o ponto e vírgula no final da linha. <br/>
> Essa variável tá escrita errada, faltou um 'a' ali. <br/>
> Cara, esse método não existe nessa linguagem...

Se você já ficou puto com isso, sinta-se abraçado, porque eu também já cansei de cometer esses erros bobos que dava vontade de bater com a cara na parede depois de descobrir. Mas não fui só eu, nem só você, isso é normal do ser humano, não somos máquinas e as vezes uns detalhes passam sem percerbermos.

No momento você está igual o John Travolta de novo.

![John Question](https://media.giphy.com/media/FxufOs6bQwxO0/giphy.gif) 

## Entendi seu ponto, mas como evitar isso?

Pensando nisso, foram criadas várias ferramentas para fazer análise por você. Seguem as principais e mais famosas:

- [JSlint](http://www.jslint.com/)
- [JSHint](http://jshint.com/)
- [Eslint](http://eslint.org/)

Cada uma dessas ferramentas possui um módulo no npm e podem ser fácilmente instaladas.

{% highlight  bash %}

npm install -g jslint

npm install -g jshint

## para poder fazer lint de ES6 e JSX
npm install -g eslint
npm install -g babel-eslint

{% endhighlight %}

E todas elas também possuem integrações com vários editores de código como Sublime, Atom, Brackets, etc...

## Mas como elas funcionam?

Cada uma dessas ferramentas lê seus arquivos desejados e percorre pelos mesmos buscando por erros ou definições que as próprias consideram como má prática e para cada um dos erros, elas reportam ao final.

Para os próximos passos, vou ensinar utilizando o `eslint`, que julgo o melhor dos Linters na atualidade, visto que ele dá um ótimo suporte a `ES6` e `JSX`, além do padrão do JS.

Após instalado o `eslint`, vá até o diretório do seu projeto, digite `eslint --init` e responda as perguntas de acordo com sua necessidade, segue abaixo o print de um uso meu.

![Print do eslint sendo usado](/assets/img/linter/eslint.png)

Após isso, será criado um arquivo chamado `.eslintrc` dentro da pasta raiz do seu projeto, contendo informações parecidas com:

{% highlight js %}
module.exports = {
    "rules": {
        "indent": [
            2,
            4
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "always"
        ]
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react"
    ]
};
{% endhighlight %}

Se você quiser entender tudo que ele escreveu ali, dá uma olhadinha na [documentação](http://eslint.org/docs/user-guide/configuring) é super detalhada e bem explicada.

Tendo já o arquivo, basta você rodar no terminal em cima do arquivo desejado e ele fará o report se algum erro acontecer, como, por exemplo, tendo um arquivo js:

{% highlight js %}
(function () {
    'use strict';
    
    const a = 'will';

    function() {
        console.log('Hello!')
    }

})()
{% endhighlight %}

Se eu rodar o `eslint` no terminal analisando esse código, ele vai me retornar os seguintes erros:

![imagem mostrando os erros como variável não utilizada e falta de ponto e vírgula](/assets/img/linter/erro-1.png)

Eu criei uma variável `a`, mas nunca utilizei no meu código, eu usei console.log num código que vai para produção e ainda esqueci de colocar o ponto e vírgula no final do código!

Para um código pequeno desses, talvez não fizesse diferença, mas pense num código beeeem maior, ele pode ser uma mão na roda =D

Mas rodar isso o tempo todo no terminal é ruim, até mesmo se colocarmos num gulp/grunt da vida, o legal é mostrar no nosso editor. Se você usa Sublime Text, continua lendo aí, que vou mostrar a cereja do bolo!

## Usando o eslint no Sublime

Primeiro de tudo, espero que você tenha instalado o [Package Control](https://packagecontrol.io/installation) no seu Sublime. Depois disso, mande instalar o [SublimeLinter](http://sublimelinter.readthedocs.org/en/latest/installation.html#installing-via-pc) e o [SublimeLinter-contrib-eslint](https://github.com/roadhump/SublimeLinter-eslint#plugin-installation), que vão fazer toda a integração e mágica.

Feito isso, reinicie o seu Sublime e comece a escrever seu código JS! Quando tiver algum erro, ele irá te notificar com marcadores ao lado do erro e na parte inferior irá te avisar o erro. Como na imagem abaixo:

![Sublime indicando os erros](/assets/img/linter/sublime.png)

Se você for como eu e quiser ver todos os erros numa lista e poder navegar entre eles, aperte `cmd + shift + p` ou `ctrl + shift + p` e digite `linter show` e você verá uma opção igual da tela abaixo:

![Opção](/assets/img/linter/show.png)

Com essa opção selecionada, cada vez que você salvar o código, irá ver uma lista da seguinte forma:

![Lista de erros](/assets/img/linter/errors-list.png)

## Habilitando o Sublime para entender código ES6 + Eslint

Caso o seu Sublime não identifique ES6 junto com o Eslint e não faça o lint correto, basta que você instale o plugin do [Babel](https://github.com/babel/babel-sublime) no seu Sublime. Com esse plugin instalado, defina que todos os arquivos JS e JSX serão interpretados como Babel, seguindo os seguintes passos:

1) Abra um arquivo com a extensão JS ou JSX
2) Vá na opção View do Menu
3) Escolha Syntax -> Open all with current extension as... -> Babel -> JavaScript (Babel).

Feito isso, seu Sublime já vai entender aquele código em ES6 e o lint passará a funcionar! Agora vai lá e comece a programar com qualidade!

![John Kissing](https://media.giphy.com/media/D4QLJVmdHB44g/giphy.gif)

## Conclusão

Bom, é basicamente isso, se preocupe com seu código e evite demorar horas procurando o erro se uma ferramenta pode fazer por você.