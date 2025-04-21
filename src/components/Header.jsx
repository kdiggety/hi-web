function Header({ userProfile }) { 
  return (
    <div className="app-header">
      <h1>Hobby Investor</h1>
      <div className="div-right">
        <div>
          <span className="bold">Investor: </span>
          <span>{userProfile.name}</span>
        </div>
        <div>
          <span className="bold">Account Number: </span>
          <span>{userProfile.accountNumber}</span>
        </div>
      </div>
    </div>
  )
}

export default Header