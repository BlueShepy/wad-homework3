<template>
  <div class="home">
    <h1>Welcome to The NEW GRAM</h1>
  </div>

    <form @submit.prevent>
    <b><label >Sign up to The NEW GRAM</label></b>
    <label >  </label>
    <input type="email" name="email"  required
    placeholder= "Enter a valid email"
    value="">

    <input type="password" name="pass"  required
    placeholder= "Enter your password"
    value="">

    <br>
    <input type="submit" value="Sign Up" >
</form>
</template>

<script>
export default {
  name: 'SignupView'
}
</script>

<style scoped>

main {
    display: flex; /* turns main into flexbox container */
    justify-content: center;
    align-items: center;

    min-height: 40vh;
    margin-top: 40px; /* vaike vahe main ja form vahel */
    flex: 1;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;

    padding: 30px; /* How big is gray box */
    background-color: #ddd; /* makes box gray */
    border-radius: 12px /* rounder edges on box */
}
.home {
  text-align: center;
}

.posts {
  margin-top: 30px;
}

form textarea,
form input[type="email"],
form input[type="password"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #aaa;
    border-radius: 10px;
    background-color: white;
    font-size: 15px;
    font-family: inherit;
    outline: none;
    transition: 0.2s;
}

/* Green border when typing */
form textarea:focus,
form input[type="email"]:focus,
form input[type="password"]:focus {
    border-color: #006D5B;
    box-shadow: 0 0 0 3px rgba(0, 109, 91, 0.15);
}

/* Textarea-specific styling */
form textarea {
    min-height: 150px;
    resize: vertical;
}

form {
    width: 90%;
    max-width: 420px;
    margin: 20px auto;
    box-sizing: border-box;
}
</style>