window.onload = function() {
    var url = "https://github.com/rkmod/.github.io/blob/master/MightyGumball/sales.json";
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
    salesDiv.Div.innerHTML = responseText;
}
