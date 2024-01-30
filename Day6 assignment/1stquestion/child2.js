import child3 from './child3';

function child2() {


  return (<div style={{ margin: "10px", border: "2px solid Green" }}>
    <h3>This is Child2 Component</h3>
    <hr />
    <child3 />
  </div>);
}

export default child2;

