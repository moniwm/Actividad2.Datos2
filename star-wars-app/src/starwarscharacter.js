import TableCell from '@material-ui/core/TableCell';
import React from "react";
import TableRow from '@material-ui/core/TableRow';

export default class StarWarsCharacter extends React.Component {
  render() {
    return (
     <TableRow>
        <TableCell align="left"> {this.props.name}</TableCell>
        <TableCell align="right"> {this.props.height}</TableCell>
        <TableCell align="right"> {this.props.mass}</TableCell>
        <TableCell align="right"> {this.props.hair_color}</TableCell>
        <TableCell align="right"> {this.props.skin_color}</TableCell>
        <TableCell align="right"> {this.props.eyes_color}</TableCell>
        <TableCell align="right"> {this.props.birth}</TableCell>
        <TableCell align="right"> {this.props.gender}</TableCell>
     </TableRow>
        
      
    );
  }
}
