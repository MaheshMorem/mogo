<template>
   <nav class="navbar">
      <div class="navbar-logo">
         <img src="../../assets/mogo-logo.png" alt="Logo" class="logo-image">
      </div>
      <ul class="navbar-items">
         <li>
            <router-link to="/">
               <span>
                  Contact Us
               </span>
            </router-link>
         </li>
         <li>
            <router-link to="/list-requests">
               <span>
                  Requests
               </span>
            </router-link>
         </li>
      </ul>
   </nav>
</template>

<style scoped>
.navbar {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60px;
   padding: 0 85px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
   height: 100%;
   display: flex;
   align-items: center;
}

.logo-image {
   height: 40px;
   width: auto;
}

.navbar-items {
   list-style-type: none;
   display: flex;
   margin: 0;
   padding: 0;
}

.navbar-items li {
   margin-left: 20px;
}

.navbar-items a {
   text-decoration: none;
   color: #333;
   font-weight: 500;
   font-size: 0.9rem;
   transition: color 0.3s ease;
}

.navbar-items a:hover {
   opacity: 0.5;
}

@media (max-width: 490px) {
   .navbar {
      flex-direction: column;
      align-items: flex-start;
      padding: 0 20px;
   }

   .navbar-items {
      flex-direction: column;
      width: 100%;
      margin-bottom: 14px;
   }

   .navbar-items li {
      margin-left: 0;
      margin-top: 10px;
      width: 100%;
      text-align: center;
      background: #e8e8e8;
      padding: 5px 3px;
      border-radius: 10px;
   }
}
</style>
