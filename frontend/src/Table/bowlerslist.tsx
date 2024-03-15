import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  const [bowlingData, setbowlingData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchbowlingData = async () => {
      const rsp = await fetch('http://localhost:5003/api/Bowling');
      const f = await rsp.json();
      setbowlingData(f);
    };
    fetchbowlingData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center"> Bowling League</h4>
      </div>
      <br></br>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlingData.map((b) => (
            <tr>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
