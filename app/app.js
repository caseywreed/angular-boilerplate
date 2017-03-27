"use strict";

var app = angular.module("AngularBoilerplateApp", ["ngRoute"])

app.config(function ($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "templates/main.html",
            controller: "MainCtrl"
        }).
        otherwise('/')
})
