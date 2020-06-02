import * as React from 'react';
import {
    DetailsList,
    DetailsListLayoutMode,
    Selection,
    SelectionMode,
    IColumn,
  } from 'office-ui-fabric-react/lib/DetailsList';

  import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

  const operations =[
      {
          from : '0000000000000',
          to : '00 00 00 0 000',
          amount : '1$',
          date : '20-02-2020'
      },
      {
        from : '0000000000000',
        to : '00 00 00 0 000',
        amount : '1$',
        date : '20-02-2020'
    },
    {
        from : '0000000000000',
        to : '00 00 00 0 000',
        amount : '1$',
        date : '20-02-2020'
    },
    {
        from : '0000000000000',
        to : '00 00 00 0 000',
        amount : '1$',
        date : '20-02-2020'
    }
  ]

  const columns =[
      { key : 'column1', name : 'From', fieldName : 'from' , minWidth : 100, 
        maxWidth : 300, isResizable : true },
        { key : 'column2', name : 'To', fieldName : 'to' , minWidth : 100, 
        maxWidth : 300, isResizable : true },
        { key : 'column3', name : 'amount', fieldName : 'amount' , minWidth : 100, 
        maxWidth : 300, isResizable : true },
        { key : 'column4', name : 'date', fieldName : 'date' , minWidth : 100, 
        maxWidth : 300, isResizable : true }
  ]

  const classNames = mergeStyleSets({
      table : {
          margin : 'auto'
      }
  })

  const OperationsTable = () => 
  {
      return (
          <div data-is-scrollable={true}>
              <div className={`s-Grid-col ms-sm9 ms-x19 ${classNames.table}`}>
                  <DetailsList 
                     items = {operations}
                     Columns = {columns}
                     SelectionMode = {0}
                  />
              </div>
          </div>
      )
  }

  export default OperationsTable;