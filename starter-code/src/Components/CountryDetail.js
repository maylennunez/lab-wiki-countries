import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class CountryDetail extends Component {



  getBorders = (country) => {
    console.log("hi")
    let countryBorders = country.borders
    let borderArr = []
    for(let i=0;i<countryBorders.length;i++){
         let fullCountry = this.props.countries.find(eachCountry =>{
             return countryBorders[i] === eachCountry.cca3
         })
        //  borderArr.push(<li><Link to={countryBorders[i]}>{fullCountry.name.common}</Link></li>)
         borderArr.push(<li className="flash"><Link to={countryBorders[i]}>{fullCountry.name.common}</Link></li>)
     }

     return (
        <React.Fragment>
            <ul>
                {borderArr}
            </ul>
        </React.Fragment>
    )
}
findDetails = () => {
    console.log('country detail cca3:',this.props.match.params.id, this.props.countries)
    let theCountry = this.props.countries.find(eachCountry => {
        return eachCountry.cca3 === this.props.match.params.id
    })
    console.log(theCountry)
    return (
    <React.Fragment>
        <h1>{theCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{theCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{`${theCountry.area} km`}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {this.getBorders(theCountry)}
              </td>
            </tr>
          </tbody>
        </table>
    </React.Fragment>
    )

 }



 render() {
     return (
        //  <div className="col-7">
       <div>
         {this.findDetails()}
       </div>
     );
}
}
export default CountryDetail;



























































//   getBorders = (country) => {
//     let countryBorders = country.borders
//     let borderArr = []
//     for(let i=0;i<countryBorders.length;i++){
//         let fullCountry = this.props.countries.find(eachCountry =>{
//             return countryBorders[i] === eachCountry.cca3
//         })
//         borderArr.push(<li><Link to={countryBorders[i]}>{fullCountry.name.common}</Link></li>)
//     }

//     return (
//         <React.Fragment>
//             <ul>
//                 {borderArr}
//             </ul>
//         </React.Fragment>
//     )
// }


//     findDetails = () => {
//         console.log('country detail cca3:',this.props.match.params.hippopotamus, this.props.countries)

//         let theCountry = this.props.countries.find(eachCountry => {
//             return eachCountry.cca3 === this.props.match.params.hippopotamus
//         })
//        // console.log(theCountry)
//         return theCountry;




//     }









//     render() {
//         let theCountry = this.findDetails()
//         console.log(theCountry)

//         return (
//             <div className="col-7">

//            <h1>{theCountry.name.common}</h1>
//             <table className="table">
//               <thead></thead>
//               <tbody>
//                 <tr>
//                   <td>Capital</td>
//                   <td>{theCountry.capital}</td>
//                 </tr>
//                 <tr>
//                   <td>Area</td>
//                   <td>551695 km
//            <sup>2</sup>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Borders</td>
//                   <td>
//                     <ul>
//                       <li><a href="/AND">Andorra</a></li>
//                       <li><a href="/BEL">Belgium</a></li>
//                       <li><a href="/DEU">Germany</a></li>
//                       <li><a href="/ITA">Italy</a></li>
//                       <li><a href="/LUX">Luxembourg</a></li>
//                       <li><a href="/MCO">Monaco</a></li>
//                       <li><a href="/ESP">Spain</a></li>
//                       <li><a href="/CHE">Switzerland</a></li>
//                     </ul>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         );
//     }
// }

// export default CountryDetail; 
// findDetails = () => {
//   // console.log('country detail cca3:',this.props.match.params.id, this.props.countries)
//   let theCountry = this.props.countries.find(eachCountry => {
//       return eachCountry.cca3 === this.props.match.params.id
//   })
//   // console.log(theCountry)
//   return (
//   <React.Fragment>
//       <h1>{theCountry.name.common}</h1>
//       <table className="table">
//         <thead></thead>
//         <tbody>
//           <tr>
//             <td>Capital</td>
//             <td>{theCountry.capital}</td>
//           </tr>
//           <tr>
//             <td>Area</td>
//             <td>{`${theCountry.area} km`}
//               <sup>2</sup>
//             </td>
//           </tr>
//           <tr>
//             <td>Borders</td>
//             <td>
//               {this.getBorders(theCountry)}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//   </React.Fragment>




//   )

// }



// render() {
//   return (
//       <div className="col-7">
//       {this.findDetails()}
//     </div>
//   );
// }
// }

// export default CountryDetail; 