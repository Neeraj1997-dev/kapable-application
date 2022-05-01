<template>
  <v-container class="my-auto" fill-height fluid>
    <v-row>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="../assets/profile.jpg"
        >
        </v-img>
        <v-card-text>
          <v-alert
            transition="scroll-y-transition"
            prominent
            type="error"
            :value="error.status"
          >{{error.message}}</v-alert>
          <v-alert
            transition="scroll-y-transition"
            prominent
            type="success"
            :value="success.status"
          >{{success.message}}</v-alert>
          <v-form
            class="text-center"
            ref="loginForm"
            @submit.prevent="login"
          >
            <v-text-field
              label="Login Username"
              color="accent"
              :rules="usernameRules"
              prepend-inner-icon="mdi-account"
              v-model="auth.username"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              color="accent"
              type="password"
              :rules="passwordRules"
              prepend-inner-icon="mdi-account-key"
              v-model="auth.password"
              required
            ></v-text-field>
            <v-btn
              type="submit"
              color="red"
              :loading="proccessing"
            >Sign In</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import store from '../store';

export default {
  data() {
    return {
      auth: {
        username: '',
        password: '',
      },
      usernameRules: [
        (v) => !!v || 'Username is required',
        (v) => (v && v.length > 3) || 'Username must be minimum 3 characters',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length > 5) || 'Password must be minimum 5 characters',
      ],
      success: {
        status: false,
        message: '',
      },
      error: {
        status: false,
        message: '',
      },
      proccessing: false,
    };
  },
  methods: {
    async login() {
      this.error.status = false;
      this.success.false = false;
      if (this.$refs.loginForm.validate()) {
        this.proccessing = true;
        try {
          this.auth.username = this.auth.username.replace('#', '');
          if (this.auth.username === 'student@gmail.com') {
            const user = {
              d: '3',
              type: 'student',
              email: this.auth.username,
            };
            store.dispatch('user/signIn', user);
            this.success.status = true;
            this.success.message = 'Successfully Signed In';
            this.$router.push('student-dashboard');
          }
          if (this.auth.username === 'admin@gmail.com') {
            const user = {
              id: '1',
              type: 'admin',
              email: this.auth.username,
            };
            store.dispatch('user/signIn', user);
            this.success.status = true;
            this.success.message = 'Successfully Signed In';
            this.$router.push('admin-dashboard');
          }
          if (this.auth.username === 'teacher@gmail.com') {
            const user = {
              id: '2',
              type: 'teacher',
              email: 'teacher@gmail.com',
            };
            store.dispatch('user/signIn', user);
            this.success.status = true;
            this.success.message = 'Successfully Signed In';
            this.$router.push('teacher-dashboard');
          }
          if (this.auth.username) {
            this.error.status = true;
            this.error.message = 'Username and Password do not match';
          }
          this.proccessing = false;
        } catch (error) {
          this.proccessing = false;
          console.log(error);
          this.error.status = true;
          this.error.message = error;
        }
      }
    },
  },
};
</script>
