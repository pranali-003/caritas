// import React from 'react'
// import './profile.css'
// import Navbar from '../../components/navbar/Navbar'

// const Profile = () => {
//   return (
//     <div className="profile-section">
//       <Navbar/>
//     </div>
//   )
// }

// export default Profile
// ProfilePage.js
import React from 'react';
import './profile.css'
import Layout from '../../components/layout/Layout';
import Main from '../../components/main/Main'
import Hero from '../../components/hero/Hero'; // Your HeroSection component
// import ProfileDetails from './ProfileDetails'; // Your ProfileDetails component

const Profile = () => {
  return (
    <Layout>
      <Main/>
      <Hero /> 
      {/* Add other components as needed */}
    </Layout>
  );
};

export default Profile;
