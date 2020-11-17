import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th
              scope="col"
              onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >
              First
            </th>
            <th scope="col">Last</th>          
            <th scope="col">email</th>
            <th scope="col">phone</th>         
            <th scope="col">state</th>
            <th scope="col">country</th>
       
       
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              location: { state, country },
              phone,             
              email,
              name: { first, last, title }
            }) => (
              <tr key={email}>
                <td>{title}</td>
                <th>{first}</th>
                <td>{last}</td>               
                <td>{email}</td>
                <td>{phone}</td>          
                <td>{state}</td>
                <td>{country}</td>
           
                <td>
                 
                </td>

                <td></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;