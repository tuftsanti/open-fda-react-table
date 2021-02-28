import React from 'react'
    
    const Drugs = ({ drugs }) => {
        // console.log(drugs[0].openfda.application_number[0])
        // console.log(drugs[0])
      return (
        <>
          <center><h1>Drugs</h1></center>
          {drugs.map((drug, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">{index}</h5>
                <h5 className="card-title">{drug.sponsor_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{drug.openfda.application_number[0]}</h6>
                <p className="card-text">{drug.openfda.brand_name[0]}</p>
                <p className="card-text">{drug.openfda.generic_name[0]}</p>
                {/* <h5 class="card-title">{drug.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{drug.email}</h6>
                <p class="card-text">{drug.company.catchPhrase}</p> */}
              </div>
            </div>
          ))}
        </>
      );
    };

    export default Drugs