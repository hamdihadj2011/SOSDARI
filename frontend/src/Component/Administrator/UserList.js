import React, { Component } from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
class Userlist  extends Component {
  render() {
    return (
<div >
<Table small>
      <TableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </TableBody>
    </Table>
</div>
);
}
}

export default Userlist;