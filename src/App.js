import './App.css';
import React , { useState, useEffect } from 'react';
export default (props) => {

  const [repositories, setRepositories] = useState([
    {id: 1, name : "repo-1"},
    {id: 2, name : "repo-2"},
    {id: 3, name : "repo-3"},
  ]);

  function handleAddRepository() {
    setRepositories([...repositories, generateRepo()])
  }

  function generateRepo() {
    let valor = parseInt(Math.random() * 10);
    return {id: valor, name : "repo-" + valor};
  }

  function useEffect() {
    console.log(repositories);
  }

  return (
    <div className="App">
      <ul>
        { repositories.map(repo => (
          <li key={repo.id}>
              {repo.name}
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}> 
          Adicionar Repositório
      </button>
    </div>
  );
}