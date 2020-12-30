import './Service.css'

export default function Service({title, desc}) {
  return (
    <div className="service-item">
      <span className="service-item-title">
        {title}
      </span>
      <div className="service-item-desc">
        {desc}
      </div>
    </div>
  )
}
