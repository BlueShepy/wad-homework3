<template>
  <div class="home">
    <h1>Welcome to The NEW GRAM</h1>
  </div>

  <form @submit.prevent="submitForm">
    <b><label>Sign up to The NEW GRAM</label></b>

    <input
      type="email"
      name="email"
      v-model="email"
      required
      placeholder="Enter a valid email"
    />

    <input
      type="password"
      name="pass"
      v-model="password"
      required
      placeholder="Enter your password"
    />

    <div
      v-if="password.length > 0 && errors.length > 0"
      class="password-errors"
    >
      <p>Password is not valid:</p>

      <ul>
        <li v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>
    </div>
    
    <p
      v-if="password.length > 0 && errors.length === 0"
      class="password-valid"
    >
      Password is valid!
    </p>

    <input type="submit" value="Sign Up" />

    <p class="forgot-password">
      Forgot password?
    </p>
  </form>
</template>

<script>
export default {
  name: 'SignupView',

  data() {
    return {
      email: '',
      password: ''
    };
  },

  computed: {
    errors() {
      const p = this.password;
      const errors = [];

      // pikkus 8 - 14 tähte
      if (p.length < 8 || p.length >= 15) {
        errors.push(
          "Password must be between 8 and 14 characters"
        );
      }

      // vähemalt üks suurtäheke
      if (!/[A-Z]/.test(p)) {
        errors.push(
          "Must contain at least one uppercase letter"
        );
      }

      // vähemalt 2 väikest tähte
      if ((p.match(/[a-z]/g) || []).length < 2) {
        errors.push(
          "Must contain at least two lowercase letters"
        );
      }

      // vähemalt üks number
      if (!/[0-9]/.test(p)) {
        errors.push(
          "Must contain at least one number"
        );
      }

      // Alustab uppercase tähega
      if (!/^[A-Z]/.test(p)) {
        errors.push(
          "Must start with an uppercase letter"
        );
      }

      // peab olema underscore
      if (!p.includes('_')) {
        errors.push(
          "Must contain an underscore (_)"
        );
      }

      return errors;
    }
  },

  methods: {
    submitForm() {
      if (this.errors.length > 0) {
        alert("Please enter a valid password!");
        return;
      }

      alert("Sign up successful!");
    }
  }
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  margin-top: 40px;
  flex: 1;
}

.home {
  text-align: center;
}

.home h1 {
  margin-top: 30px;
}

.posts {
  margin-top: 30px;
}


form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 90%;
  max-width: 420px;
  margin: 20px auto;
  padding: 30px;
  box-sizing: border-box;

  background-color: #ddd;
  border-radius: 12px;
}

form textarea,
form input[type="email"],
form input[type="password"] {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;

  border: 1px solid #aaa;
  border-radius: 10px;
  background-color: white;

  font-size: 15px;
  font-family: inherit;
  outline: none;
  transition: 0.2s;
}

form textarea:focus,
form input[type="email"]:focus,
form input[type="password"]:focus {
  border-color: #006D5B;
  box-shadow: 0 0 0 3px rgba(0, 109, 91, 0.15);
}


form textarea {
  min-height: 150px;
  resize: vertical;
}

form input[type="submit"] {
  background-color: #006D5B;
  color: white;
  border: none;
  border-radius: 10px;

  padding: 12px 25px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

form input[type="submit"]:hover {
  background-color: #004d40;
}

.password-errors {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;

  background-color: #ffe6e6;
  border: 1px solid #ff9999;
  border-radius: 10px;

  color: #b00020;
  font-size: 13px;
  text-align: left;
}

.password-errors p {
  margin: 0 0 8px;
  font-weight: bold;
}

.password-errors ul {
  margin: 0;
  padding-left: 20px;
}

.password-errors li {
  margin-bottom: 5px;
}

.password-valid {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;

  background-color: #d4edda;
  color: #155724;
  border-radius: 10px;

  text-align: center;
  font-size: 14px;
  font-weight: bold;
}

/* forgor */
.forgot-password {
  color: rgb(24, 112, 245);
  cursor: pointer;
  font-size: 14px;
}

.forgot-password:hover {
  text-decoration: underline;
}
</style>
