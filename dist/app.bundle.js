!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=332)}({332:function(t,e,o){"use strict";function n(){$("#addBook").click(function(){var t;t='<div id="searchBlock"><form id="form"><label>Titre du livre</label><br><input type="text" name="title" id="title" class="input" required><br><label>Auteur</label><br><input type="text" name="author" id="author" class="author" required><br><button class="btn">Rechercher</button></form><button id="cancel" class="btn">Annuler</button></div>',$("#addBookBlock").remove(),$(".h2NewBook").after(t),$("#cancel").click(function(){$("#searchBlock").remove(),$("#results").fadeOut(800,function(){$("#results").remove()}),r()}),$("#form").submit(function(t){t.preventDefault();var e=$("#title").val(),o=$("#author").val(),n='"'+e.replace(/\s/gi,"+")+'"',r='"'+o.replace(/\s/gi,"+")+'"',s="https://www.googleapis.com/books/v1/volumes?q="+n+"+"+r+"+intitle:"+n+"+inauthor:"+r+"&langRestrict=fr&printType=books&projection=lite";$.ajax({type:"GET",url:s,dataType:"json",success:function(t){!function(t){$("#results").remove(),$("hr").after('<div id="results"><h2>Résultats de recherche</h2><div id="results-books"></div></div>'),t.totalItems>0?($.each(t.items,function(t,e){var o,n,i='<div class="book" id="'+e.id+'"><div class="book-top"><div class="book-top-left"><h3>Titre: '+e.volumeInfo.title+'</h3><p class="id">Id: '+e.id+"</p><p>Auteur: "+e.volumeInfo.authors[0]+'</p></div><div class="book-top-right"><i class="fas fa-bookmark"></i></div></div><div class="book-bottom"><p>Description: '+(null==(n=e.volumeInfo.description)?"Information manquante":n.slice(0,200)+"...")+'</p><p class="center"><img src="'+(null==(o=e.volumeInfo.imageLinks)?o="images/unavailable.png":o.smallThumbnail)+'" alt="'+e.volumeInfo.title+'"></p></div></div>';$("#results-books").append(i)}),$(".fa-bookmark").click(function(){var t=$(this).closest(".book").attr("id"),e=0;if($(".my-book").each(function(){if(t===$(this).attr("id"))return alert("Ce livre a déjà été ajouté à votre liste"),e=1,!1}),0==e){var o=$(this).closest(".book").html();$("#content").append('<div class="my-book" id="'+t+'">'+o+"</div>"),a(),i(),function(t,e){sessionStorage.setItem(t,e)}(t,o)}})):$("#results-books").append('<p class="center">Aucun livre trouvé</p>')}(t)},error:function(t){console.log("damnn")}})})})}function i(){$(".fa-trash-alt").click(function(){var t=$(this).closest(".my-book"),e=$(this).closest(".my-book").attr("id");$(t).fadeOut(800,function(){$(t).remove()}),function(t){sessionStorage.removeItem(t)}(e)})}function r(){$(".h2NewBook").after('  \n        <div id="addBookBlock">\n            <button id="addBook" class="btn">Ajouter un livre</button>\n        </div>'),n()}function a(){$(".my-book .fa-bookmark").replaceWith('<i class="fas fa-trash-alt"></i>')}o.r(e),$(document).ready(function(){r(),function(){for(var t=0;t<sessionStorage.length;t++){var e=sessionStorage.key(t),o=sessionStorage.getItem(e);$("#content").append('<div class="my-book" id="'+e+'">'+o+"</div>")}a()}(),i()})}});