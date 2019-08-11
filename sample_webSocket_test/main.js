 /*  ALL HTML ELEMENT*/
const wsUri = "wss://echo.websocket.org/";
const input_element = document.querySelector("input");
const form = document.querySelector("form");
const buttons =[...document.querySelectorAll('.connect_message')];

const log = document.querySelector(".consoleLog");
const log_status = document.querySelector(".socket-status");

let button_element_on = document.querySelector('.connect_message.on');
let button_element_off = document.querySelector('.connect_message.off');
let button_element_send = document.querySelector('.connect_message.send');
let button_element_clear = document.querySelector('.connect_message.clear');

let output;
   
/* END  ALL HTML ELEMENT */


// Enable or disable controls based on whether or not user is connected.
// For example, disable the Connect button if user is connected.
const setFormState = function (connected) {
	input_element.disabled = !connected;
    button_element_on.disabled= connected;
    button_element_off.disabled= !connected;
    button_element_send.disabled= !connected;
    button_element_clear.disabled= !connected;
};


function init(){

//  when start user must before connect before send message
    setFormState(false);
    output = document.querySelector(".consoleLog");
    actionWebSocket();
};


      
function actionWebSocket(){
 /* web socket -- Open a connection*/
    websocket = new WebSocket(wsUri);
    // BUTTON CONNECT & DISCONNECT EVT LISTENER
    buttons.forEach(btn=>{
        btn.addEventListener("click", (e)=>{ 
            if(btn.classList.contains("on")){
            /* web socket -- a connection is made*/
            websocket.onopen = onOpen(e);
            webSocketStatus("connected")
         
            setFormState(true);
            }else if(btn.classList.contains("off")){
            /* web socket -- Close the connection*/
            websocket.onclose = onClose(e);
            webSocketStatus("disconnected")
            setFormState(false);
            }
            // clear btn to clear all message 
            if(btn.classList.contains("clear")){
                clearInput();
            }
        });
    });


    form.addEventListener("submit", (e)=>{
        e.preventDefault();
    /* web socket -- when data is received */
        websocket.onmessage = doSendText();  
    });
    /* web socket -- when connection fail */
    websocket.onerror = function(evt) { onError(evt) };
}


const doSendText = ()=> {
    try {
        if(input_element.value!== ""){
        let text =input_element.value;
        writeToScreen("SEND TEXT: " + text);
        websocket.send(text);
        input_element.value= "";        
        }
       
        
    } catch (e) {
        writeToScreen("EXCEPTION: " + e);
    }
}


const onOpen= (event)=>  writeToScreen("CONNECTED WebSocket rocks");
const onClose = (event) =>writeToScreen("DISCONNECTED");
const onError = (event)=> writeToScreen('<span style="color: red;">ERROR:</span> ' + event.data);

 
function writeToScreen(message){
    let textMessage = document.createElement("p");
    textMessage.style.wordWrap = "break-word";
    textMessage.innerHTML = message;
    output.appendChild(textMessage);  
};  

function webSocketStatus(message){
    log_status.innerHTML = message;
    log_status.classList.add("active");
      
    setTimeout(()=>{
        log_status.innerHTML = "";
        log_status.classList.remove("active");
    }, 3000);
};

function clearInput(){
    // to clear all the p target the div tag (the parent tag) 
    while (log.childNodes.length > 0) {
        console.log(log.childNodes);
		log.removeChild(log.lastChild);
	};
}
      
      
window.addEventListener("load", init, false);
  