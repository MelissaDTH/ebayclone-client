import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home/Home'
import AdvertisementsListContainer from './components/AdvertisementsList/AdvertisementsListContainer'
import SellerFormContainer from './components/SellerForm/SellerFormContainer'
import AdvertisementDetailsContainer from './components/AdvertisementDetails/AdvertisementDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/advertisements" exact component={AdvertisementsListContainer} />
          <Route path="/sellerform" exact component={SellerFormContainer} />
          <Route path='/advertisements/:id' exact component={AdvertisementDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App