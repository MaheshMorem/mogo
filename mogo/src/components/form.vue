<template>
   <div class="signin-container">
      <div class="signin-card">
         <div class="image-section">
            <img src="../../assets/mogo-logo.png" alt="Colorful abstract character" style="width: 100px;">
            <div>
               <img src="../../assets/working.png" alt="Colorful abstract character" class="character-image">
            </div>
         </div>
         <div class="form-section">
            <div class="header">
               <!-- <img src="/path-to-logo.png" alt="Logo" class="logo"> -->
            </div>
            <h1>Contact Us</h1>
            <p class="subtitle">Reach Out and Elevate Your Tech Journey with Us!</p>

            <form @submit.prevent="handleSubmit">
               <div class="form-group">
                  <input type="text" id="name" v-model="formData.name" placeholder="Mahesh Morem">
                  <small class="err-msg" v-for="error in v$.name.$errors" :key="error.$uid">{{ error.$property + ' - ' +
                     (error.$message).toLowerCase() }}</small>
               </div>

               <div class="form-group">
                  <input type="email" id="email" v-model="formData.email" placeholder="example@gmail.com">
                  <small class="err-msg" v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$property + ' - ' +
                     (error.$message).toLowerCase() }}</small>
               </div>

               <div class="form-group">
                  <input type="text" id="phone" v-model="formData.phone" placeholder="+91 1234567891">
                  <small class="err-msg" v-for="error in v$.phone.$errors" :key="error.$uid">{{ error.$property + ' - ' +
                     (error.$message).toLowerCase() }}</small>
               </div>

               <div class="form-group">
                  <input type="text" id="company" v-model="formData.company" placeholder="Company/Organization">
                  <small class="err-msg" v-for="error in v$.company.$errors" :key="error.$uid">{{ error.$property + ' - ' +
                     (error.$message).toLowerCase() }}</small>
               </div>

               <div class="form-group">
                  <textarea id="message" v-model="formData.message" placeholder="Additonal queries or pitch"></textarea>
                  <small class="err-msg" v-for="error in v$.message.$errors" :key="error.$uid">{{ error.$property + ' - ' +
                     (error.$message).toLowerCase() }}</small>
               </div>
               <div class="sendMessage">
                  <button type="submit" class="submit-button">Send Message</button>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>
 
<script>
import { computed, reactive } from 'vue';
import useVueValidate from '@vuelidate/core';
import Swal from 'sweetalert2'
import axios from 'axios';
import {
   required,
   minLength,
   maxLength,
   email,
   sameAs
} from '@vuelidate/validators';

export default {
   name: 'ContactUsPage',
   setup() {
      const formData = reactive({
         name: '',
         email: '',
         phone: '',
         company: '',
         message: '',
      });

      const formRules = computed(() => {
         return {
            name: { required, minLength: minLength(3) },
            email: { required, email },
            phone: { required, minLength: minLength(5) },
            company: { required, minLength: minLength(2) },
            message: { required, minLength: minLength(10) },
         }
      });

      const v$ = useVueValidate(formRules, formData);

      return {
         formData,
         v$,
      };
   },
   data() {
      return {
         isFirstLoad: true
      }
   },

   methods: {
      async handleSubmit() {
         this.v$.$touch();
         if (this.v$.$invalid) {
            Swal.fire({
               icon: "error",
               title: "Oops...",
               text: "Form has validation errors"
            });
         } else {
            this.createRequest();
         }
      },
      createRequest() {
         const url = 'http://localhost:2399/api/forms';

         const data = {
            name: this.formData.name,
            email: this.formData.email,
            phone: this.formData.phone,
            company: this.formData.company,
            message: this.formData.message
         }

         axios
            .post(url, data)
            .then(resp => {
               // this.resetData();

               Swal.fire({
                  title: "Thank you",
                  text: "We will reach out to you shortly.",
                  icon: "success"
               });
            })
            .catch(err => {
               let errMsg = "Something went wrong!"
               if (err.response.data.error[0]) {
                  errMsg = err.response.data.error[0].slice(5);
               }

               Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: errMsg
               });
            })
      },
      resetData() {
         this.formData.name = '';
         this.formData.email = '';
         this.formData.phone = '';
         this.formData.company = '';
         this.formData.message = '';
      }
   }
}
</script>

<style lang="less" scoped>
   @import '../css/form.less';
</style>