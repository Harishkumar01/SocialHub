import {repoinfo,reposinfo} from './Apidata';
import React, { useState } from "react";

function Github() {

const [info, setinfo] = useState([]);
const [repos, setrepos] = useState([]);
const [name, setName] = useState("");

function getdata(){
  repoinfo(name)
    .then((data) => {
      console.log(data);
      setinfo(data);
    })
    .catch((error) => {});
    reposinfo(name)
    .then((data) => {
      console.log(data);
      setrepos(data);
    })
    .catch((error) => {});
}
  return (
      <div>
          <div>
          <div>
          <h1>Enter you Github username</h1>
            </div>
            <label>
        User Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <button onClick={getdata} >Display</button>
          </div>
      <div className="row">
                <div className="card-body">
                            <h5 className="card-title">{info.login}</h5>
                            <p className="card-text">Name: {info.name}</p>
                            <p className="card-text">Company:{info.company}</p>
                            <p className="font-italic mark">
                              Created : {new Date(info.created_at).toLocaleString()}
                            </p>
                            <p className="font-italic mark">
                              updated : {new Date(info.updated_at).toLocaleString()}
                            </p>
                            <br></br>
                        </div>
        </div>
        <div className="container">
        <div className="row">
              {repos.map((repo, i) => (
                <div className="card col-md-3" key = {i}>
                        <div className="card-body">
                            <h5 className="card-title">{repo.name}</h5>
                        </div>
                </div>
              ) )}
        </div>
        </div>
        </div>
  );
}

export default Github;
