var React = require("react");

class Home extends React.Component {
  render() {
    // If the user is not logged in, display the login form.
    // If the user is logged in, display his name, his tasks, and a logout button.
    return (
      <html>
        <head />
        <body>
          <h1>Hello there</h1>
        </body>
      </html>
    );
  }
}

module.exports = Home;