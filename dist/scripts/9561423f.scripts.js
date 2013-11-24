"use strict";angular.module("bothSidesFrontEndApp",["ngCookies","ngSanitize","ngRoute","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/voters",{templateUrl:"views/voters.html",controller:"VotersCtrl"}).when("/disputes/create",{templateUrl:"views/createDispute.html",controller:"CreatedisputeCtrl"}).when("/disputes",{templateUrl:"views/dispute.html",controller:"DisputeCtrl"}).when("/disputes/:id/manage",{templateUrl:"views/manageDispute.html",controller:"ManagedisputeCtrl"}).when("/account",{templateUrl:"views/account.html",controller:"AccountCtrl"}).when("/disputes/:id",{templateUrl:"views/disputeDetail.html",controller:"DisputedetailCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("bothSidesFrontEndApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bothSidesFrontEndApp").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bothSidesFrontEndApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bothSidesFrontEndApp").controller("HeaderCtrl",["$scope","$location",function(a,b){a.isCurrentPath=function(a){return b.path()===a}}]),angular.module("bothSidesFrontEndApp").controller("HelpCtrl",["$scope","$modal","$log",function(a,b,c){a.items=[{title:"Demo Version",content:"This is a demo version"},{title:"Creating a Dispute",content:"To create a dispute"},{title:"Voting on a Dispute",content:"To vote a dispute please select a dispute page and read the rules."}],a.open=function(){var d=b.open({templateUrl:"views/help.html",controller:["$scope","$modalInstance","items",function(a,b,c){a.items=c,a.selected={item:a.items[0]},a.ok=function(){b.close(a.selected.item)}}],resolve:{items:function(){return a.items}}});d.result.then(function(b){a.selected=b},function(){c.info("Modal dismissed at: "+new Date)})}}]),angular.module("bothSidesFrontEndApp").controller("VotersCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bothSidesFrontEndApp").controller("CreatedisputeCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bothSidesFrontEndApp").controller("DisputeCtrl",["$scope",function(a){a.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2",disabled:!0}],a.navType="pills"}]),angular.module("bothSidesFrontEndApp").controller("ManagedisputeCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bothSidesFrontEndApp").controller("AccountCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bothSidesFrontEndApp").controller("DisputedetailCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);