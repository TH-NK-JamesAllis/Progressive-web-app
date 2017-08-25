import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { HashRouter } from 'react-router-dom'

// Render the main component into the dom
ReactDOM.render((
  <HashRouter>
      <App />
  </HashRouter>
), document.getElementById('app'))

/*
const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
  console.log('Notification permission granted.');
  // TODO(developer): Retrieve an Instance ID token for use with FCM.
  // ...
})
.catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});*/