import React from "react";
import StarWarsCharacter from "./starwarscharacter";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class StarWarsPeople extends React.Component {
  state = {
    loading: true,
    characters: null,
  };

  async componentDidMount() {
    const url = "https://swapi.dev/api/people/";
    const response = await fetch(url);
    const characters_data = await response.json();
    this.setState({ characters: characters_data.results, loading: false });
  }

  render() {
    return (
        <div>
             <h2>STAR WARS CHARACTERS</h2>
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <TableContainer component={Paper}>
              <Table minWidth="650" size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Height</TableCell>
                    <TableCell align="right">Mass&nbsp;(g)</TableCell>
                    <TableCell align="right">Hair color&nbsp;(g)</TableCell>
                    <TableCell align="right">Skin color &nbsp;(g)</TableCell>
                    <TableCell align="right">Eye color &nbsp;(g)</TableCell>
                    <TableCell align="right">Birth year &nbsp;(g)</TableCell>
                    <TableCell align="right">Gender &nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.characters.map((c, index) => (
                    <StarWarsCharacter
                      name={c.name}
                      height={c.height}
                      mass={c.mass}
                      hair_color={c.hair_color}
                      skin_color={c.skin_color}
                      eyes_color = {c.eye_color}
                      birth = {c.birth_year}
                      gender = {c.gender}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
        </div>
       
    );
  }
}
