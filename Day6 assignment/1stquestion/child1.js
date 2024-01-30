import Child2 from './child2';

function child1() {


  return (<div style={{ margin: "10px", border: "2px solid Green" }}>
    <h3>This is Child1 Component</h3>
    <hr />
    <child2 />
  </div>);
}

export default child1;

