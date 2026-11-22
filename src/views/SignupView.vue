<template>
  <div class="home">
    <h2>Sign IN TO THE NEW GRAM</h2>
  </div>

  <form action="index.html" method="get">
    <b><label >Welcome to The GRAM</label></b>
    <label > Create an account or Log in </label>
    <input type="email" name="email"  required
    placeholder= "Enter a valid email"
    value="">

    <input type="password" name="pass"  required
    placeholder= "Enter your password"
    value="">

    <br>
    <input type="submit" value="Log in" >
    <p style="color:rgb(24, 112, 245);">Forgot password?</p>
</form>
</template>

<script>
export default {
  name: 'HomeView'
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

/* Consistent form size */
form {
    width: 90%;
    max-width: 420px;
}
</style>