//Server Information
// Server: http://parse.sfm8.hackreactor.com/
// App ID: 72b8e073a4abde10221ce95f38ed1c63bd7f3d6b
// API Key: cf1ce23a61e2a40702c347b7dc1e0af8c28f6c7a

var app = {
  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  init: function() {
    
  },

  send: function(message) {
    //send request to the server
    //specify type of request, the data being sent, contentType(?), what to do if action
    //is successful, what to do if action is not successful
    $.ajax({
      url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  fetch: function() {
    $.ajax({
      url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      success: function (data) {
        console.log('chatterbox: Messages retrieved');
      },
      error: function (data) {
        console.error('chatterbox: Failed to receive messages', data);
      }
    });
  },

  clearMessages: function(chatroom) {
    $('#chats').empty();
  },

  renderMessage: function(message) {
    $('#chats').append('<div class="username">' + message.username + ': ' + message.text + '</div>');
  },

  renderRoom: function(roomName) {
    $('#roomSelect').append('<div id=' + roomName + '></div>');
  },
  
  handleUsernameClick: function() {
    $('.username').addClass('friends');
  },
  
  textToObj: function(text) {
    var obj = {};
    obj.username = '';
    obj.text = text;
    obj.roomname = '';
    return obj;
  },  

  handleSubmit: function() {
    // send message to server
    var userTextInput = $('.messageBox').value;
    var message = this.textToObj(userTextInput);
    this.send(message);
  },

};




$(document).ready(function() {
  $('body').on('click', '.username', function() {
    app.handleUsernameClick();
  });

  $('body').on('submit', '.submit', function() {
    app.handleSubmit();
  });


});


// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };