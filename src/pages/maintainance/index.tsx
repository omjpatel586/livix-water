import logo from '../../../public/assets/logo.jpeg'
import './style.css'

const MaintenancePage = () => {
  return (
    <div className="maintenance-container">
      <img src={logo} alt="Livix Water Logo" className="logo" />
      <h1>🚧 Site Under Maintenance 🚧</h1>
      <p className="subtitle">
        We’re working hard to bring you something amazing!
      </p>
      <p className="message">
        Please check back soon — we’ll be back online shortly.
      </p>
    </div>
  )
}

export default MaintenancePage
