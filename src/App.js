import React from 'react';
import './App.css';

import 'office-ui-fabric-react/dist/css/fabric.css';

import Navigation  from './Navigation';
import  CardSection  from './CardSection';
import OperationsTable from './OperationsTable';


function App() {
  return (
    <div class="ms-Grid" dir="ltr">
      <div class="ms-Grid-row">
          <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2"> 
              <Navigation /> 
          </div>
          <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
              <div class="ms-Grid-row">
                <CardSection />
              </div>

              <div class="ms-Grid-row">
                  <OperationsTable />
              </div>
          </div>
          
        </div>
   </div>
  );
}

export default App;
