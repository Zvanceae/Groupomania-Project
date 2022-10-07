<template >
    <form @submit.prevent="handleSubmit">
        <label>Username:</label>
        <input type="text" required >

        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <div class="submit">
        <button>Create account</button>
        </div>
   </form>
</template>


<script>
    
export default {
    data() {
        return {
            email: '',
            password: '',
            passwordError: ''
        }
    },
    methods: {
        handleSubmit() {
            //validate password
            this.passwordError = this.password.length > 7 ?
            ' ' : 'The lenght of the password must be minimum 7 characters long'
            //after all works
            if(!this.passwordError) {
                console.log('All good');
            }
        }
    }
}
</script>


<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: rgb(62, 60, 60);
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
        font-weight: bold;
    }
    .submit {
        text-align: center;
    }
    .error {
        color: red;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>