import { Link } from 'react-router-dom'
import './css/icons.css'

const Icons = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className="container">
      <h1 className="h1">Let's Talk!</h1>
      <hr />

      <p className="desc">
        Do you think I am suitable for your company? I would love for you to
        contact me!
      </p>
      <div>
        <button
          className="btn-email"
          onClick={() => (window.location = 'mailto:lirazbaruch62@gmail.com')}
        >
          {' '}
          <span>
            <i className="bi bi-envelope"></i>
          </span>
        </button>
        <button
          className="btn-email"
          onClick={() =>
            openInNewTab('https://www.linkedin.com/in/liraz-baruch-9a8172236/')
          }
        >
          {' '}
          <span>
            <i className="bi bi-linkedin"></i>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Icons
