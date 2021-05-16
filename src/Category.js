import React ,{Component}from "react";
import { treeArr } from "./TreeData";
import TreeNode from "./TreeNode";




class TreeItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
         people: treeArr
      }
    }
    
    render() {
      var people = this.state.people;
      var nodes = people.map((i) => <TreeNode node={i} children={i.children} />);
      return <ul>{nodes}</ul>;
    }
  };
  export default TreeItem;
  

