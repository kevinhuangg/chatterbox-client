//Server Information
// Server: http://parse.sfm8.hackreactor.com/
// App ID: 72b8e073a4abde10221ce95f38ed1c63bd7f3d6b
// API Key: cf1ce23a61e2a40702c347b7dc1e0af8c28f6c7a

var app = {
  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  init: function() {},

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
      data: message,
      contentType: 'application/json',
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
    // var $username = '<div class="username">' + message.username + '</div>';
    // var $userMessage = '<div class="userMessage">' + message.text + '</div>';
    // $('#chats').append($username + ': ' + $userMessage);
    $('#chats').append('<div class="username">' + message.username + ': ' + message.text + '</div>');
    $('.username').append('<input type="button"></input>');
  },

  renderRoom: function(roomName) {
    $('#roomSelect').append('<div id=' + roomName + '></div>');
  },
  
  handleUsernameClick: function() {
  //   // $('.username').click(function() {
  //   //   alert();
  //   // });
  }
};





// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };