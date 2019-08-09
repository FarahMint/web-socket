
## web-socket  project  

  I am learning web socket after an unfortunate realisation that I have no idea how web socket works. So I basically spend the day reading documentation and playing around-- there is a lot of tutorial implementing web socket for chat application  but this is not really what I needed to do.  Below is a demo of what I can ended up with-- but still working on improving :)

  the requirement are:

  ## 🧐 Front-end Developer Test intruction

Here is the programming challenge we would wish you to solve:

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


 ## 🧐 What's inside?


A quick look at the top-level files and directories you'll see in the project.

FOLDER STRUCTURE
( ROOT )

--- index.html
--- app.js
--style.css

     ## Demo -- 

     ![web-socket-first-attempt](https://user-images.githubusercontent.com/18241226/62806948-16424200-baec-11e9-8916-f7455b426e74.gif)



     

     What I have successfully been able to do :
1. sent an `Active Symbols` API call after receiving the response of `Authorize`.
2. Display all the symbols belonging to the `volidx` market in a drop-down.
3. According to the selected symbol in the drop-down:
- Send a `Tick Stream` API call using the same WebSocket connection

 What I have not been able to do :
- Display a box containing the `quote` value of the latest 10 ticks. That means the list should be updated on every new tick received, but always display the latest 10 ticks.

-- So far I am only able to get 1 ticks that update constantly 
my comment: I need to check  within the API doc...

-- There is a bug after selecting one symbol from the dropdown I cannot reselect a new one :( -- I did something wrong but I don't see yet what



some intresting article:

https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

https://javascript.info/websocket


https://blog.logrocket.com/beyond-rest-using-websockets-for-two-way-communication-in-your-react-app-884eff6655f5/

https://www.sitepoint.com/real-time-apps-websockets-server-sent-events/

https://dev.to/iwilsonq/build-real-time-apps-by-learning-websockets-3c9m

 
https://www.html5rocks.com/en/tutorials/websockets/basics/
