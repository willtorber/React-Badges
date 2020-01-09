import React from 'react';
//import md5 from 'md5';

// Aprende más del Gravatar en: http://gravatar.com
function Gravatar(props) {
  const firstName = props.firstName;
  const lastName = props.lastName;
  const avatar = props.avatar;
  //const hash = md5(email);

  return (
    <img
      className={props.className}
      src={`https://ui-avatars.com/api/?name=${firstName + ' ' + lastName}`}
      alt={`Avatar ${avatar}`}
    />
  );
}

export default Gravatar;