
import './App.css';
import UserList from './UserList';

function App() {
  const users = [
    { name: 'John Doe', age: 30, occupation: 'Software Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Graphic Designer' },
    { name: 'Mike Johnson', age: 35, occupation: 'Project Manager' }
  ];

  return (
    <div className="App">
      <h1>User Cards</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
