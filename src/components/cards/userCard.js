import React from 'react';

function userCard({name, lastName, job, dni, email}) {
  return (
    <div className="w-60 h-60 bg-gray-300 ml-5 mr-5">
      <p>{name}</p>
      <p>{lastName}</p>
      <p>{job}</p>
      <p>{dni}</p>
      <p>{email}</p>
    </div>
  );
}

export default userCard;