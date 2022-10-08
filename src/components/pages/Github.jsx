import React from 'react'
import '../css/icons.css'

const Github = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <>
      <div>
        <h1 className="h1">GitHub</h1>
        <span className="hr">
          <hr />
        </span>
      </div>
      <p className="desc">
     To see my projects on GitHub click on the icon below.
      </p>
      <button
        className="btn-email"
        onClick={() => openInNewTab('https://github.com/LirazMaoz')}
      >
        {' '}
        <span>
          <i className="bi bi-github"></i>
        </span>
      </button>
    </>
  )
}

export default Github
