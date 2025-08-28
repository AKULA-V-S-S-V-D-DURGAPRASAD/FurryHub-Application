import { useEffect, useState } from "react";
import API from "../api/api";

export default function PetsPage(){
  const [pets, setPets] = useState([]);
  const [form, setForm] = useState({ name:"", type:"Dog", age:1 });

  const load = async ()=>{
    const r = await API.get("/pets");
    setPets(r.data || []);
  };

  useEffect(()=> { load(); },[]);

  const add = async (e)=>{
    e.preventDefault();
    if(!form.name) return alert("Name required");
    const r = await API.post("/pets", form);
    setPets(prev => [r.data, ...prev]);
    setForm({ name:"", type:"Dog", age:1 });
  };

  return (
    <div className="container">
      <div className="grid grid-2">
        <div className="card glass">
          <h2 className="section-title">My Pets</h2>
          <div className="grid grid-3">
            {pets.map(p => (
              <div key={p.id} className="card">
                <div style={{display:'flex', alignItems:'center', gap:10}}>
                  <div style={{fontSize:28}}>{p.type === 'Cat' ? '🐱' : p.type === 'Bird' ? '🦜' : '🐶'}</div>
                  <div>
                    <div style={{fontWeight:900}}>{p.name}</div>
                    <div style={{color:'#64748b'}}>{p.type} • {p.age ?? '—'} yrs</div>
                  </div>
                </div>
              </div>
            ))}
            {pets.length === 0 && <div className="card">No pets yet. Add one ➜</div>}
          </div>
        </div>

        <div className="card">
          <h3 style={{fontWeight:900}}>Add a Pet</h3>
          <form onSubmit={add} className="grid" style={{gap:10, marginTop:10}}>
            <input className="input" placeholder="Pet name" value={form.name} onChange={e=> setForm({...form, name:e.target.value})}/>
            <select className="select" value={form.type} onChange={e=> setForm({...form, type:e.target.value})}>
              <option>Dog</option><option>Cat</option><option>Bird</option><option>Rabbit</option><option>Other</option>
            </select>
            <input type="number" min="0" className="input" placeholder="Age (years)" value={form.age} onChange={e=> setForm({...form, age:e.target.value})}/>
            <button className="btn btn-primary">Save Pet</button>
          </form>
        </div>
      </div>
    </div>
  );
}
