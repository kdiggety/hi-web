function Header({ userProfile }) { 
  return (
    <div className="app-header">
      <h1>Hobby Investor</h1>
      <div className="div-right">
        <p className="bold">{userProfile.name}</p>
        <div>
          <span className="bold">Account Number: </span>
          <span>{userProfile.accountNumber}</span>
        </div>
      </div>
    </div>
  )
}

export default Header