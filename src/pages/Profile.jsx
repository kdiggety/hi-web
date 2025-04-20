function Profile({ userProfile }) { 
  return (
        <>
          <div className="body-header">Profile</div>
          <p className="bold">{userProfile.name}</p>
          <p className="normal"><a href={`mailto:${userProfile.email}`}>{userProfile.email}</a></p>
          <p className="normal">{userProfile.phone}</p>
          <p className="normal">{userProfile.address}</p>
          <p className="normal">{userProfile.city}</p>
          <p className="normal">{userProfile.country}</p>
        </>
  )
}

export default Profile