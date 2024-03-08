import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

const teams = data.teams;

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>NCAA Teams</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const team = this.props;

    return (
      <div>
        <br />
        <br />
        <h2>{team.school}</h2>
        <h3>{team.name}</h3>
        <h3>
          {team.city}, {team.state}
        </h3>
        <br />
        <br />
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <>
        <Welcome />
        <TeamList />
      </>
    </div>
  );
}

export default App;
