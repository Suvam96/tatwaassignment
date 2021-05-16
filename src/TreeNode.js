import React,{Component} from "react";


  class TreeNode extends Component {
    constructor(props) {
      super(props);
      this.state = {
       isVisible: false
      }
    
    }
    toggle=()=> {
        this.setState({isVisible: !this.state.isVisible});
     }
     render() {
      
       
       var icon = this.state.isVisible ? "-" : "+";
      var span;
      var nodes;
  
      if (this.props.children) {
        span = (
          <span className="icon" onClick={this.toggle}>
            {icon}
          </span>
        );
  
        if (this.state.isVisible) {
          nodes = this.props.children.map((i) => (
            <TreeNode node={i} children={i.children} />
          ));
        }
      }
  
      return (
        <li>
          {span}
          {this.props.node.name}
          <ul>{nodes}</ul>
        </li>
      );
    }
  }
    
  

  export default TreeNode;