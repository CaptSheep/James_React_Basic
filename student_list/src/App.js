
import './App.css';

function App() {
  const students = [
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany'
    },
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico'
    },
    {
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria'
    },
    {
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK'
    },
    {
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada'
    },
    {
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy'
    }
  ]
  return (
    <div className="App">
     <table border={1} cellPadding={0}>
       <thead>
       <tr>
         <th>Company</th>
         <th>Contact</th>
         <th>Country</th>
       </tr>
       </thead>
       <tbody>
       {students.map(item=>(
           <tr>
             <td>{item.company}</td>
             <td>{item.contact}</td>
             <td>{item.country}</td>
           </tr>
       ))}
       </tbody>
     </table>
    </div>
  );
}

export default App;
