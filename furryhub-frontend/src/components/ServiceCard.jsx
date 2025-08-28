export default function ServiceCard({ icon = "🐾", title, description, onBook }){
  return (
    <div className="service">
      <div style={{fontSize: 24}}>{icon}</div>
      <div className="service-title">{title}</div>
      <div className="service-desc">{description}</div>
      {onBook && (
        <div style={{marginTop: 8}}>
          <button className="btn btn-primary" onClick={onBook}>Book</button>
        </div>
      )}
    </div>
  );
}
