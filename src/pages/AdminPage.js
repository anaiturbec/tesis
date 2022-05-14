import React from 'react';
import { logout } from '../config/firebase';

export default function AdminPage() {
  return (
    <div className="flex w-full h-screen bg-black justify-center items-center" >
      <button onClick={logout} className="w-40 h-20 bg-white" />
    </div>
  )
}