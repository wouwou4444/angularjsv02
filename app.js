(function () {
    'use strict';

    angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController (ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

        toBuy.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);

        };

    }
    

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController (ShoppingListCheckOffService){
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService () {
        var service = this;

        var itemsToBuy = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 5 },
            { name: "limon pie", quantity: 8 },
            { name: "coconut", quantity: 5 },
            { name: "chocolate", quantity: 10 },
            { name: "haribo bag", quantity: 1 },
            { name: "bottles of orange juice", quantity: 10 }
        ];

        var itemsBought = [];

        service.buyItem = function (itemIndex) {
            var itemBought = itemsToBuy.splice(itemIndex,1);
            itemsBought.push(itemBought[0]);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;

        };

        service.getBoughtItems = function () {
            return itemsBought;

        };        
    }

})()