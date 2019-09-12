"use strict";

const winPage = {
	
	template:`
	
		<form class="playPage" ng-submit="$ctrl.Start()" form class="mainPage">
			<h2>{{$ctrl.winPlayer}} Wins!!!</h2>
			
			<button class="startButton">Play again!</button>
		</form>
	
	`/* ,
	
	controller:["$location", "Serv", function($location, Serv){
		
		
		
	}] */
	
}

angular.module("App").component("winPage", winPage);