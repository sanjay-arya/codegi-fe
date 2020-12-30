import { useState, useEffect } from 'react';
import './Work.css'
import WorkGrid from './WorkGrid';
export default function WorkHeader(props) {
  const [categories, setCategories] = useState([])
  const [works, setWorks] = useState([])

  const [currentCategory, setCurrentCategory] = useState(new URLSearchParams(window.location.search).get('tags'))

  useEffect(() => {
    fetch('https://api2.codigo.co/v1/work-categories', {
      method: 'get',
      headers: new Headers({
        "authorization": "Basic cmVzdDp5MGxZIGlvSWcgdnpkUCAxN2VkIG1EZmogQmg1RA=="
      })
    })
    .then(res => res.json())
    .then(res => setCategories([{ "name": "ALL", "slug": "all" }, ...res.categories]))

    fetch('https://api2.codigo.co/v1/works?posts_per_page=100&page=1', {
      method: 'get',
      headers: new Headers({
        "authorization": "Basic cmVzdDp5MGxZIGlvSWcgdnpkUCAxN2VkIG1EZmogQmg1RA=="
      })
    })
    .then(res => res.json())
    .then(res => setWorks(res.works))
    // return () => {
    // }
  }, [])


  useEffect(() => {
    if (currentCategory === null || currentCategory === '') {
      setCurrentCategory('all');
    }
  }, [currentCategory])

  function handleCategoryClick(slug) {
    setCurrentCategory(slug);
    window.history.replaceState(null, null, `?tags=${slug}`)
  }

  function filterWork() {
    if(currentCategory === 'all'){
      return works;
    }

    return works.filter(work => {
      let isFound = false;
      work.categories.forEach(category => {
        if(category.slug === currentCategory){
          isFound = true;
          return true;
        }
      });
      return isFound;
    });
  }

  return (
    <div>
      <div className="work-header">
        <p className="work-header-title">Here’s 5% of </p>
        <p className="work-header-title">our published work.</p>
        <p className="work-header-title" style={{ color: "#d5333e" }}>See 100% of our power.</p>
        <div className="work-showcase">
          <div className="category-list">
            {
              categories.map(category => {
                return (
                  <div key={category.slug} className={`category ${currentCategory === category.slug ? "is-active" : ""}`} onClick={() => { handleCategoryClick(category.slug) }}>
                    <div className="category-text">
                      {category.name.replace('&amp;', '&')}
                    </div>
                  </div>
                )
              })
            }
            {/* {
                categories.filter(cat => {
                  if (currentCategory == null || currentCategory == '' || currentCategory == 'all'){
                    return true;
                  }else{
                    return cat.slug == currentCategory
                  }
                }).map(category => (
                  <div className={`category ${currentCategory == category.slug ? "is-active" : ""}`}>
                    <div className="category-text">
                      {category.name.replace('&amp;', '&')}
                    </div>
                  </div>
                ))
              } */}
            {/* <div className="category">
                <div className="category-text">
                  {console.log(currentCategory)}
                </div>
              </div> */}
          </div>
          <div className="legend">
            <p className="legend-header">Legend</p>
            <div className="legend-body">
              <div className="legend-item">
                <div className="legend-icon legend-icon-app"></div>
                <p className="legend-text">APP</p>
              </div>
              <div className="legend-item">
                <div className="legend-icon legend-icon-web"></div>
                <p className="legend-text">WEB</p>
              </div>
              <div className="legend-item">
                <div className="legend-icon legend-icon-cms"></div>
                <p className="legend-text">CMS</p>
              </div>
              <div className="legend-item">
                <div className="legend-icon legend-icon-uiux"></div>
                <p className="legend-text">UI/UX</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="clearfix">
          <div className="work-grid">
              {
                filterWork().map(work => {
                  return (
                    <WorkGrid key={work.name} work={work}/>
                  )
                })
              }
          </div>
        </div>
    </div>
  )
}