import React from 'react';
import Paper from 'material-ui/lib/paper';
import BlogSummary from './blog/summary';
import BlogData from '../../data/blog';

export default class Home extends React.Component {
  render() {
    return (<div>
      <div style={{ background: '#00bcd4', padding: 300 }} >
        <div style={{verticalAlign: 'middle', width: '100%', height: '100%', display: 'table' }}>
          <div style={{
              font: 'normal 1.5em/1.1 OFL Sorts Mill Goudy, Georgia, serif', margin:'auto', display: 'table-cell', marginLeft: 'auto', marginRight: 'auto',
            justifyContent:'center', textAlign: 'center' }}
          >
            <h1>Nicholas Latham</h1>
            <p>Developer | GIS</p>
          </div>

        </div>
      </div>
      <div style={{ marginLeft: 200, marginRight: 200, marginTop: 20, padding: 5,  }}>
        <h2>Updates</h2>
        <BlogSummary data={BlogData} onTouchTap={(location) => this.context.router.push(location)}/>
      </div>
      </div>);
  }
}

Home.contextTypes = {
  router: React.PropTypes.object,
};
