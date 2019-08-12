There is two mini projects in this repo one is related to a coding interview test. ( still working on improving it).

And another one is sample chat , it is located on the sample_webSocket_test folder- there is also a read me file related to this sample chat with details and demo.


## web-socket  project  

  I am learning web socket after an unfortunate realisation during a test for a job that I had no idea how web socket works. So I basically spend the day reading documentation and playing around-- there is a lot of tutorial implementing web socket for chat application  but this is not really what I needed to do.  Below is a demo of what I ended up with so far -- but still working on improving :)

  ## 🧐 Front-end Developer Test intruction
  The requirement were:
1. Analyse the prepared WebSocket API connection in the html file.
2. Using this connection, send an `Active Symbols` API call after receiving the response of `Authorize`. Note that there is a list of markets and symbols in the `Active Symbols` response.
3. Display all the symbols belonging to the `volidx` market in a drop-down.
4. According to the selected symbol in the drop-down:
- Send a `Tick Stream` API call using the same WebSocket connection
- Display a box containing the `quote` value of the latest 10 ticks. That means the list should be updated on every new tick received, but always display the latest 10 ticks.
- Please note that on every change in the drop-down, you should forget the previous stream, using `Forget` or `Forget All` API calls, and send a `Tick Stream` API call for the newly selected symbol.
<br>
**Instructions**
9.
1. Access the API at https://developers.binary.com. 
2. To open a new terminal, click the + button on the tab panel above.
3. You may use any programming language of your choice.
4. Please complete your work within 90 minutes. 
5. Provided that the task is fully completed, there will be extra points for clean and beautiful code and UI.
<br>

I choose javaScript to do the task


 ## 🧐  Demo
 
 ![websocket_workInProgress](https://user-images.githubusercontent.com/18241226/62872452-71a34880-bd15-11e9-8b35-0f4411987979.gif)


     

What I have successfully been able to do :
1. sent an `Active Symbols` API call after receiving the response of `Authorize`.
2. Display all the symbols belonging to the `volidx` market in a drop-down.
3. According to the selected symbol in the drop-down:
- Send a `Tick Stream` API call using the same WebSocket connection
4. According to the selected symbol in the drop-down:
- Send a `Tick Stream` API call using the same WebSocket connection
- Display a box containing the `quote` value of the latest 10 ticks.

 

 What I am working on :
- list should be updated on every new tick received, but always display the latest 10 ticks.

 



some interesting article:

https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

https://javascript.info/websocket


https://blog.logrocket.com/beyond-rest-using-websockets-for-two-way-communication-in-your-react-app-884eff6655f5/

https://www.sitepoint.com/real-time-apps-websockets-server-sent-events/

https://dev.to/iwilsonq/build-real-time-apps-by-learning-websockets-3c9m

 
https://www.html5rocks.com/en/tutorials/websockets/basics/
