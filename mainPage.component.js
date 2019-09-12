"use strict";

const mainPage = {
	
	template: `
	
		<form class="mainPage" ng-submit="$ctrl.Start()" form class="mainPage">
			<h2 class="mainTitle">PoNg</h2>
			
			<div class="Ctrls">
				<div class="playerOneCtrl">
					<button disabled class="Q">Q</button>
					<button disabled class="S">S</button>
				</div>
				<p class="inst">Controls!</p>
				<div class="playerTwoCtrl">
					<button disabled class="L">L</button>
					<button disabled class="P">P</button>
				</div>
			</div>
			
			<div class="playMes">
				<p class="playPar">Play to: </p>
				<input ng-model="$ctrl.until" class="playUntil" type="number" name="quantity" min="1" max="99">
			</div>
			
			<button class="startButton">Play!</button>
		</form>
	
	`,
	
	controller:["$location", "Service", function($location, Service){
		
		this.until = 3;
		
		this.Start = () => {
			
		Service.setUntil(this.until);
			$location.path("/play");
		}
		
	}]
	
}

angular.module("App").component("mainPage", mainPage);
