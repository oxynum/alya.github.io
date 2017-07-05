"use strict";angular.module("choozApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("choozApp").controller("MainCtrl",function(){var a=this;a.userInput="",a.userChooz=[],a.countElements=a.userChooz.length,a.isHappy=!1,a.addUserChooz=function(){return""===a.userInput?void alert("Euh... Mets quelque chose non ?"):(a.userChooz.push(a.userInput),a.userInput="",void(a.countElements=a.userChooz.length))},a.getResult=function(){a.isHappy||(a.result=a.userChooz[Math.floor(Math.random()*a.userChooz.length)],a.countElements=a.userChooz.length,a.isHappy=!0,a.cleanChooz(!0))},a.cleanChooz=function(b){a.userChooz=[],a.isHappy=b,a.countElements=a.userChooz.length}}),angular.module("choozApp").directive("choozGuy",function(){return{templateUrl:"views/directives/chooz-guy.html",restrict:"E",link:function(a,b,c){a.$watch(c.isHappy,function(b){console.log(b),a.isHappy=b})}}}),angular.module("choozApp").run(["$templateCache",function(a){a.put("views/directives/chooz-guy.html",'<h1> <span class="miniscared" ng-if="!isHappy"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span> </span> <span class="miniwink" ng-if="isHappy"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span> </span> </h1>'),a.put("views/main.html",'<h1 class="title">Chooz: {{main.countElements}}</h1> <h1 class="title" ng-show="main.isHappy">{{main.result}}</h1> <chooz-guy ng-click="main.getResult()" is-happy="main.isHappy" class="choozGuy"></chooz-guy> <form class="footer-input"> <input class="user-chooz" placeholder="Vodka Gin..." autofocus ng-model="main.userInput" ng-show="!main.isHappy"> <button class="but" type="submit" ng-click="main.addUserChooz()"> <i class="fa fa-plus-circle" aria-hidden="true" ng-show="!main.isHappy"></i> </button> <button class="but" type="" ng-click="main.cleanChooz(false)"> <i class="fa fa-refresh" aria-hidden="true"></i> </button> </form>'),a.put("views/thanks.html","<p> Thanks </p>")}]);