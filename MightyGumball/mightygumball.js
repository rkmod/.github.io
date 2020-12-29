/*window.onload = function() {
    var url = "https://gumball/wickedlysmart.com";
   //"https://github.com/rkmod/.github.io/blob/master/MightyGumball/sales.json";//
    var request = new XMLHttpRequest();
    request.open("GET", url)
    request.onload = function() {
        if (request.status == 200) {
            updateSales(request.responseText);
        }
    };
    request.send(null);
}

function updateSales(responseText) {
    var salesDiv = document.getElementById("sales");
    var sales = JSON.parse(responseText);
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement("div");
        div.setAttribute("class", "saleItem");
        div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
        salesDiv.appendChild(div);
    }
}*/
    
    
var lastReportTime = 0;

window.onload = function() {
    setInterval(handleRefresh, 3000);
}

function updateSales(salest) {
    var salesDiv = document.getElementById("sales");
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement("div");
        div.setAttribute("class", "saleItem");
        div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
        salesDiv.appendChild(div);
    }
    if (sales.length > 0) {
        lastReportTime = sales[sales.length-1].time;
    }
}

function handleRefresh() {
    /*var url = "http://gumball.wickedlysmart.com" + 
    "?callback=updateSales" + 
    "&lastreporttime=" + lastReportTime +
    "&random=" + (new Date()).getTime();*/
    
   var url = "https://github.com/rkmod/.github.io/blob/master/MightyGumball/sales.json"
   ?callback=updateSales" + 
    "&lastreporttime=" + lastReportTime +
    "&random=" + (new Date()).getTime();

    var newScriptElement = document.createElement("script");
    newScriptElement.setAttribute("src", url);
    newScriptElement.setAttribute("id", "jsonp");

    var oldScriptElement = document.getElementById("jsonp");
    var head = document.getElementsByTagName("head")[0];
    if (oldScriptElement == null) {
        head.appendChild(newScriptElement);
    } else {
        head.replaceChild(newScriptElement, oldScriptElement);
    }
}
