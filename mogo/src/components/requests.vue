<template>
   <div v-if="!requests.length" class="no-requests-holder">
      <div class="no-requests">
         <h1>No requests yet.</h1>
      </div>
   </div>
   <div v-else class="table-root">
      <div class="table-container">
         <table>
            <thead>
               <tr>
                  <th v-for="header in headers" :key="header">{{ header }}</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="(row, index) in requests" :key="index">
                  <td v-for="header in headers" :key="header" :data-label="header">
                     {{ row[header.toLowerCase()] }}
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
   name: 'ModernTable',
   data() {
      return {
         headers: ['Name', 'Company', 'Email', 'Phone', 'message'],
         requests: [],
         loadingRequests: false
      }
   },
   mounted() {
      this.getRequests();
   },
   methods: {
      getRequests() {
         this.requests = [];
         let url = 'http://localhost:2399/api/forms';
         this.loadingRequests = true;

         axios
            .get(url)
            .then(resp => {
               if (resp.data) {

                  resp.data.forEach(request => {
                     this.requests.push(request);
                  })
               } else {
                  this.requests = [];
               }
            })
            .catch(err => {
               let errMsg = "Unable to fetch requests!"
               if (err.response.data.error[0]) {
                  errMsg = err.response.data.error[0].slice(5);
               }

               Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: errMsg
               });
            })
            .finally(() => {
               this.loadingRequests = false;
            })
      }
   }
}
</script>

<style scoped>
   @import '../css/request.less' 
</style>