import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
  const nav = useNavigate();
  const [form, setForm] = useState({ username:"", password:"" });

  const login = async (e)=>{
    e.preventDefault();
    try{
      const res = await API.post("/auth/login", form);
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Welcome back!");
      nav("/");
    }catch{
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <div className="card glass" style={{maxWidth: 520, margin: '0 auto'}}>
        <h2 className="section-title">Login</h2>
        <form onSubmit={login} className="grid" style={{gap: 10}}>
          <input className="input" placeholder="Username" value={form.username} onChange={e=> setForm({...form, username:e.target.value})}/>
          <input type="password" className="input" placeholder="Password" value={form.password} onChange={e=> setForm({...form, password:e.target.value})}/>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}
