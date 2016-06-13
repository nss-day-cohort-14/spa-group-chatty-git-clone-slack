var Chatty = (function(Chatty){

  Chatty.writeMessageToDOM = function(id, message) {

    // Get messagesContainer
    var messagesContainer = document.getElementById("messagesContainer");

    // Create a newMessage div
    var newMessage = document.createElement("div");

    // Add to new message
    newMessage.innerHTML = `<div id="message--${id}">
                              <p class="messageText">${message}<p>
                              <h6 class="messageID">${id}</h6>
                              <button id="deleteBtn--${id}">Delete Message</button>
                            </div>`;

    // Append newMessage to messagesContainer
    messagesContainer.appendChild(newMessage);

  };

  Chatty.readAllMessages = function() {

  };

  Chatty.deleteMessageWithId = function(id) {

    var messageId = "message--" + id;
    var messageToDelete = document.getElementById(messageId);
    var container = document.getElementById("messagesContainer");
    messageToDelete.parentNode.removeChild(messageToDelete);    

  };

  return Chatty;

})(Chatty || {});
