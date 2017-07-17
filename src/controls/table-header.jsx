import React, { Component } from 'react';

export class TableHeader extends Component {
  render() {
    const headers = this.getHeaders()
    return (
      <thead>
        <tr>          
          {headers}
          {this.props.children}
        </tr>
      </thead>
    );
  }

  getHeaders = () => {    
    const {labels = []} = this.props
    console.log('table-header.jsx:18 labels: ',  labels);
    const getHeadersMap = (label, i) => (<th key={i}>{label}</th>)
    return labels.map(getHeadersMap)
  }
}

export default TableHeader;
