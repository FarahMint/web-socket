    // HTM ELEMENT
    const form_element = document.querySelector("#searchForm");
    const search = document.querySelector("#searchCategory");
    const quoteDisplay = document.querySelector(".quote__display");
    
    let quotedata;
    let selectedSymbol;
    let volidxMarket;
    
    const ws =  new WebSocket(`wss://ws.binaryws.com/websockets/v3?app_id=1089`);
    
    const init=()=> {
        actionWebSocket();
         /* web socket -- when connection fail */
        ws.onerror = (event)=> console.log(event);
    }

    /* web socket -- Open a connection*/
    const actionWebSocket =(e) =>ws.onopen = onOpen(e);
    
    const onOpen= (event)=> {
            ws.send( JSON.stringify({authorize:'lclcebgJRsH4cw2'}));
           /** on successful connection we want to send all active symbol */
            ws.send( JSON.stringify({ "active_symbols": "brief", "product_type": "basic" }));
        }; 

// EVENT LISTENER  WHEN USER SELECT DROPDOWN
search.addEventListener("change",(e)=>{
    // on every change in the drop-down,forget the previous stream 
    ws.send( JSON.stringify( {  "forget_all": "ticks" }));
        /* web socket -- when data is received from server*/  
    selectedSymbol =search.options[search.selectedIndex].value;
    document.getElementById("result").innerHTML = `Current ${selectedSymbol} quotes` ;
    // console.log(e.target.value)
    // RETRIEVE DATA FROM USER REQ FROM SELECT TAG INPUT
    retrieveMarketData(selectedSymbol);
    retrieveListData(selectedSymbol);
    // clear previous data
    clearHTMLData(); 
});

 /* web socket -- when data is received */
ws.onmessage =  (e) => showData(JSON.parse(e.data)); 
      
    
    
/** retrieve selected symbol data related to user selection from dropdown */
const retrieveMarketData =(selectedSymbol) => ws.send( JSON.stringify( { "ticks": selectedSymbol, "subscribe": 1 }));

 /** Display  box containing the quote value of the latest 10 ticks.  */ 

 /** TODO: list should be updated on every new tick received, but always display the latest 10 ticks. */ 
const retrieveListData =(selectedSymbol) => ws.send( JSON.stringify({
                "ticks_history":  selectedSymbol,
                "end": "latest",
                "start": 1,
                "style": "ticks",
                "adjust_start_time": 1,
                "count": 10,
              "subscribe":1
}));
       
// UI -- DATA FROM WEB SOCKET
    const showData=  (data)=>{
        //dropdown
        HTMLDropDisplay(data);
        // List
        HTMLListDisplay(data);

        ws.onclose = function() { console.log('Connection closed.')};
};
    
const HTMLDropDisplay =(data)=>{
  // DISPLAY  SYMBOL OPTION IN THE DROPDOWN
  volidxMarket=   data.active_symbols && data.active_symbols.filter(item => item.market === `volidx`);    
  // initial value for option
  let output = `<option value='0' selected>select category</option>`;
  if(volidxMarket){
      volidxMarket.forEach(category => {
          output += `<option value= ${category.symbol}>${category.symbol}</option>`;
    //UPDATE HTML
    search.innerHTML = output;
    // DISPLAY QUOTE 
      });
  }
}

const HTMLListDisplay =(data)=>{
   
     if( data.history){
         data.history.prices.map(price=>{
             let listQuote = document.createElement("ul");
             quotedata =`<li>${price}</li>`;
             listQuote.innerHTML = quotedata;
             quoteDisplay.appendChild(listQuote); 
         });    
    }
}

const clearHTMLData =()=>{
    while ( quoteDisplay.childNodes.length > 0) {
        // console.log( quoteDisplay.childNodes);
        quoteDisplay.removeChild( quoteDisplay.lastChild);
	};
}
   
window.addEventListener("load", init, false);