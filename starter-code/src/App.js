import React,{Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import countries from './countries.json';
import CountryDetail from './Components/CountryDetail'
import './App.css';




class App extends Component {

  state = {
    countries //same thing ==> countries:countries
}

// showCountryLinks = () => {
//   let countryList = [...this.state.countries]
//   return countryList.map(eachCountry => {
//     return <Link key={eachCountry.cca3} to={`/country-detail/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
//   })
// }

showCountryLinks = () => {
  let countryList = [...this.state.countries]
  return countryList.map(eachCountry => {
    return <Link key={eachCountry.cca3} to={`/CountryDetail/${eachCountry.cca3}`} className="list-group-item list-group-item-action" ><img src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`} alt=""></img>{eachCountry.name.common}</Link>
    // return <Link key={eachCountry.cca3} to={`/country-detail/${eachCountry.cca3}`} className="list-group-item list-group-item-action"><img src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`}></img>{eachCountry.name.common}</Link>
  })
}


  render() {
    return (
      <div>
         <div>
           <nav className="navbar navbar-dark bg-primary mb-3">
             <div className="container">
               <a className="navbar-brand" href="/">WikiCountries</a>
             </div>
           </nav>
           <div className="container">
             <div className="row">
               <div className="col-5">
                 <div className="list-group">
                   {this.showCountryLinks()}
                 </div>
                 <div className="col-7">
               </div>
             </div>
             </div>
           </div>
         </div>
         {/**Invisible */}
         <Switch>
           <Route exact path="/CountryDetail/:id" render={(props) => <CountryDetail {...props} cool="super fantastically amaxzing" countries={this.state.countries} />} />

         </Switch>
        
      </div>
    );
  }
}

export default App;