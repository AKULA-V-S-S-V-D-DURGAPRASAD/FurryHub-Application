import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const services = [
  { id:'grooming', icon:'🧴', title:'Grooming', desc:'Bath, trim, nail care, spa' },
  { id:'vet', icon:'🩺', title:'Vet on Call', desc:'Home consults & tele-vet' },
  { id:'training', icon:'🎓', title:'Training', desc:'Obedience & behaviour' },
  { id:'adoption', icon:'🏡', title:'Adoption', desc:'Find & rehome pets' },
  { id:'walking', icon:'🚶‍♂️', title:'Dog Walking', desc:'Daily walk plans' },
  { id:'boarding', icon:'🛏️', title:'Boarding', desc:'Safe homely stays' },
];

export default function LandingPage(){
  const nav = useNavigate();
  return (
    <div className="container">
      <section className="hero">
        <div className="card glass">
          <h1 className="hero-title">All your pet care, one friendly hub.</h1>
          <p className="hero-sub">
            Book grooming, consult vets, train your champ, adopt a buddy — with transparent pricing and verified partners.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={()=> nav('/book')}>Book a Service</button>
            <button className="btn btn-ghost" onClick={()=> nav('/my-bookings')}>View My Bookings</button>
          </div>
          <div style={{marginTop:14, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10}}>
            <div className="card center" style={{padding:12}}>⭐ 4.9 Rated</div>
            <div className="card center" style={{padding:12}}>✅ Verified Providers</div>
            <div className="card center" style={{padding:12}}>🕒 Easy Scheduling</div>
          </div>
        </div>

        <div className="card center" style={{minHeight: 320}}>
          {/* Simple hero visual */}
          <div className="floaty" style={{
            width: 220, height: 220, borderRadius: 24,
            background: 'linear-gradient(145deg, #ffedd5, #fed7aa)',
            boxShadow:'0 20px 50px rgba(255,138,0,.25)',
            position:'relative'
          }}>
            <div style={{
              position:'absolute', inset: 18, borderRadius: 18,
              background:'#fff', boxShadow:'inset 0 0 0 2px #ffe5c0'
            }} />
            <div style={{position:'absolute', bottom: 16, left: 16, fontSize: 36}}>🐶</div>
            <div style={{position:'absolute', top: 16, right: 16, fontSize: 28}}>🐱</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Popular Services</h2>
        <div className="grid grid-3">
          {services.map(s => (
            <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.desc} onBook={()=> nav('/book', { state:{ serviceId: s.id } })}/>
          ))}
        </div>
      </section>
    </div>
  );
}
