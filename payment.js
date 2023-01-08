var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "ci_sess_001=a8d6be88a85ac581356865937addf4d0c4f49eab");

var raw = JSON.stringify({
  "userName": "alicangunduz_api",
  "password": "7SfUEbp0",
  "shopCode": "4496",
  "productName": "",
  "productData": "",
  "productsTotalPrice": "",
  "orderPrice": "",
  "curreny": "TRY",
  "orderID": "",
  "buyerName": "",
  "buyerSurName": "",
  "buyerGsmNo": "",
  "buyerAdress": "",
  "BuyerCountry": "",
  "BuyerCity": "",
  "buyerDistrict": "",
  "hash": "",
  "callbackOkUrl": "",
  "callbackFailUrl": ""
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://merchant.paymax.com.tr/api-manager/api-information.html", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "ci_sess_001=9fed87fcde13897c5a96793b8d80d35bddf6aa78");
  
  var urlencoded = new URLSearchParams();
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  
  fetch("https://merchant.paymax.com.tr/api-manager/api-information.html", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
 