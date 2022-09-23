function User(props) {
  return (
    <div className="external-users-container">
      <h4>Name: {props.user.name}</h4>
      <h4>User name: {props.user.username}</h4>
      <p>Email: {props.user.email}</p>
      <p>Street: {props.user.address.street}</p>
      <p>Phone: {props.user.phone}</p>
      <p>City: {props.user.address.city}</p>
    </div>
  );
}

export default User;
