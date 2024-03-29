# Pearl Charles 

![Image description](pearlcharles.png)

This is the repo of Pearl Charles's website in React. I will push what I've done incrementally. I didn't use ```create-react-app``` as I'm using WebStorm, so instead of having the conventional directory tree "src, public" it will just be the components themselves, until we start working together and can start doing unified pushes and looking at our ```git diffs```.  

# Team Styleguide 

Instead of using this 
```javascript
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
   ```
   
I'd like us to use the simplier way of calling `state` which is

```javascript
class Checkbox extends React.Component {
  state = { isOn: true };
}
``` 

The ```isOn: true``` method, is optional. For example, we could do 

```javascript
class App extends React.Component {
  state = { artist: pearlcharles, pearlsMessageOfTheDay: '' };
  ```

# TypeOf 

This will probably be a SPA (single page application), as most artists pages are. There may be some authentication e.g. (ticketmaster, using some API's for information on upcoming show) but this can easily be resolved by using Axios, or Redux. It would look something similar to this 

```javascript
import React from 'react';
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
``` 
Ideally I'd like to use ```Axios``` over ```fetch```

```javascript
componentDidMount() {
  axios
    .get("https://randomuser.me/api/?results=5")
    .then(response =>
      response.data.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        username: `${user.login.username}`,
        email: `${user.email}`,
        image: `${user.picture.thumbnail}`
      }))
    )
    .then(users => {
      this.setState({
        users,
        isLoading: false
      });
    })
    .catch(error => this.setState({ error, isLoading: false }));
}
```

As it's most resusable friendly, and not as messy as fetch. We can discuss this in Zoom. 

## Conclusion 

This should be a pretty straight forward SPA, in the essence there's not many moving parts. Maybe a few API requests here and there, but I don't see anything complicated when it comes to ```State```. 

## Author of README.md 
Written by Montana Mendy. 

# Credits for pushing/building site
 
* Travis Allen (travis@stdlibs.com)
* Montana Mendy (montana@stdlibs.com)
