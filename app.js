    // HTM ELEMENT
const form_element = document.querySelector("#searchForm");
const search = document.querySelector("#searchCategory");
const quoteDisplay = document.querySelector(".quote__display");

let quotedata;
let selectedSymbol;

    /* web socket -- Open a connection*/
    
    const ws =  new WebSocket(`wss://ws.binaryws.com/websockets/v3?app_id=${process.env.WEB_SOCKET_KEY}`);
    
    /* web socket -- When a connection is made*/
    ws.onopen =  (evt)=> {
        // send data 
        ws.send( JSON.stringify({authorize:'lclcebgJRsH4cw2'}));

       /** send  active symbol  data */
       //https://developers.binary.com/api/#active_symbols
        ws.send( JSON.stringify({ "active_symbols": "brief", "product_type": "basic" }));
    };


    /** retrieve selected symbol data related to user selection from drop down */
    const retrieveMarketData =(selectedSymbol) =>{

        ws.send( JSON.stringify( {
            "forget_all": "ticks"
          }));
        // console.log(selectedSymbol);
        // ws.send( JSON.stringify( {
        //             "ticks": selectedSymbol,
        //             "subscribe": 1
        //           }));


        ws.send( JSON.stringify({
            "ticks_history":  selectedSymbol,
            "end": "latest",
            "start": 1,
            "style": "ticks",
            "adjust_start_time": 1,
            "count": 10,
          "subscribe":1
          }));
    };

     /* web socket -- when data is received */
    ws.onmessage =  (msg) => {
        const data =  JSON.parse(msg.data);
        // console.log('authorize response: %o',data);
        showData(data); 
    //   console.log(data);

     /* web socket -- when connection fail */
    ws.onerror = function(event) {
            console.log(event);
    };

    // Close the connection when the window is closed
    ws.addEventListener('beforeunload', function() {
    socket.close();
  });   

    // EVENT LISTENER  WHEN USER SELECT DROPDOWN

     search.addEventListener("change",(e)=>{
        // console.log( search);
	     selectedSymbol =search.options[search.selectedIndex].value
		document.getElementById("result").innerHTML = `Current ${selectedSymbol} quotes` ;
        // console.log(e.target.value)
        // RETRIEVE DATA FROM USER REQ FROM SELECT TAG INPUT
     retrieveMarketData(e.target.value);
   

        })     
    };



    // UI -- DATA FROM WEB SOCKET
     const showData=  (data)=>{
        // DISPLAY  SYMBOL OPTION IN THE DROPDOWN
        const volidxMarket=   data.active_symbols && data.active_symbols.filter(item => item.market === `volidx`);
        // console.log(volidxMarket);
          
        // initial value for option - get back array
        let output = `<option value='0' selected>select category</option>`;

        volidxMarket&& volidxMarket.forEach(category => {
            output += `<option value= ${category.symbol}>${
                category.symbol
            }</option>`;
        });

        //UPDATE HTML
        search.innerHTML = output;

       // DISPLAY QUOTE
           
        if( data.tick){
            // console.log(data.tick);
            const {quote } = data.tick;
            quotedata =` <ul><li>${quote}</li></ul>`;
            // console.log(quote);
            quoteDisplay.innerHTML = quotedata;
            }            
        };

