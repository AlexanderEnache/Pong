"use strict";

const Service = function($location){
	
	this.until = 3;
	this.winPlayer = "N";
	
	this.setUntil = function(score){
		
		this.until = score;
		console.log(this.until);
		
	}
	
	this.getUntil = function(){ 
		
		return this.until;
		
	}
	
	this.setWin = function(player){
		
		this.winPlayer = player;
		
	}
	
	this.changePage = function(){
		
		// console.log("serv fun");
		$location.path("/main");
		
	}
	
}

angular.module("App").service("Service", Service);





