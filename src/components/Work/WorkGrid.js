import React from 'react'
import './WorkGrid.css'

export default function WorkGrid({work}) {
  return (
    <a className="work-item span-2" style={{gridColumn: `span ${work.grid_size * 4}`}}>
      <img className="work-item-img" src={work.images.normal} />
      <div className="work-item-category" style={{color: `${work.text_colour != "" ? work.text_colour : "white"}`}}>
        {(work.categories.length > 0) && work.categories[0].name.replace('&amp;', '&')}
      </div>

      <div className="work-item-title" style={{color: `${work.text_colour != "" ? work.text_colour : "white"}`}}>
        {work.name}
      </div>
      <div className="work-item-platform">
        {
          (work.roles.filter(role => role.slug === 'app').length > 0) && <div className="work-item-icon app"></div>
        }
        
        {
          (work.roles.filter(role => role.slug === 'web').length > 0) && <div className="work-item-icon web"></div>
        }

        {
          (work.roles.filter(role => role.slug === 'cms').length > 0) && <div className="work-item-icon cms"></div>
        }

        {
          (work.roles.filter(role => role.slug === 'uiux').length > 0) && <div className="work-item-icon uiux"></div>
        }
        
        {/* <div className="work-item-icon app"></div> */}
        {/* <div className="work-item-icon web"></div>
        <div className="work-item-icon cms"></div>
        <div className="work-item-icon uiux"></div> */}
      </div>
    </a>
  )
}
