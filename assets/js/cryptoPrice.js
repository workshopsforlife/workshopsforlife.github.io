let btc_prc_url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true';
let bch_prc_url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true';
let eth_prc_url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true';
let ltc_prc_url = 'https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true';
let xrp_prc_url = 'https://api.coingecko.com/api/v3/simple/price?ids=stellar&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true';
let ada_prc_url = 'https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true';
let neo_prc_url = 'https://api.coingecko.com/api/v3/simple/price?ids=neo&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true';
let trx_prc_url = '';
let xmr_prc_url = '';


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

function getCurrentPrice(url){
	getJSON( url,
		function(err, data) {
		  if (err !== null) {
			alert('Something went wrong: ' + err);
		  } else {
			// aqui el codigo para obtener el dato que se está buscando. Por ejemplo el balance de la moneda en una billetera.
			alert('Your query count: ' + data.query.count);
		  }
		});
}




function btcPrice(){
	return getCurrentPrice(btc_prc_url);
}

function bchPrice(){
	return getCurrentPrice(bch_prc_url);
}

function ethPrice(){
	return getCurrentPrice(eth_prc_url);
}

function ltcPrice(){
	return getCurrentPrice(ltc_prc_url);
}

function xrpPrice(){
	return getCurrentPrice(xrp_prc_url);
}

function adaPrice(){
	return getCurrentPrice(ada_prc_url);
}

function neoPrice(){
	return getCurrentPrice(neo_prc_url);
}

function trxPrice(){
	return getCurrentPrice(trx_prc_url);
}

function xmrPrice(){
	return getCurrentPrice(xmr_prc_url);
}