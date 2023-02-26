<script lang="ts">
  import google from '$lib/assets/icons/google.png';
  import apple from '$lib/assets/icons/apple.png';
  import facebook from '$lib/assets/icons/facebook.png';
  import {supabase} from "../../../../lib/supabase";

  let loading = false;
  let email: string;
  let password: string;
  let confirmPassword: string;
  let displayName: string;
  let username: string;
  let error: string;


  async function signUpWithEmail() {

    if (displayName.length < 1) {
      this.error = 'Please enter your name';
      return;
    }

    const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(email)) {
      this.error = 'Please enter a valid email';
      return;
    }

    if (username.length < 8) {
      this.error = 'Username must be at least 8 characters';
      return;
    }

    if(!/^[a-zA-Z0-9]*$/.test(username)) {
      this.error = 'Username must contain only letters and numbers';
      return;
    }

    if (password.length < 8) {
      this.error = 'Password must be at least 8 characters';
      return;
    }

    if (password !== confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    this.loading = true
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: displayName,
          username: username
        }
      }
    });


    this.loading = false
  }

</script>

<form class="w-full justify-self-center flex items-center" on:submit|preventDefault={signUpWithEmail}>
  <div class="flex flex-col w-full">
    <div class="sign-in">Hello!</div>
    <div class="sign-in-subtitle">Register to get started.</div>
    <input
            type="text"
            bind:value={displayName}
            placeholder="Display Name"
            class=""
    />
    <input
            type="text"
            bind:value={username}
            placeholder="Username"
            class="mt-2"
    />
    <input
            type="email"
            bind:value={email}
            placeholder="Email"
            class="mt-2"
    />
    <input
            type="password"
            bind:value={password}
            placeholder="Password"
            class="mt-2"
    />
    <input
            type="password"
            bind:value={confirmPassword}
            placeholder="Confirm password"
            class="mt-2"
    />
    <button
            type="submit"
            class="mt-4 primary-btn"
            disabled={loading}
    >
      {#if loading}
        Loading...
      {:else}
        Sign up
      {/if}
    </button>
    <div class="text-center mt-4">
      <span class="text-sm text-gray-500">Or sign up with</span>
    </div>
    <button class="outline-btn mt-4">
      <img src="{google}" alt="google" class="w-6 h-6 mr-2" />
      Sign up with Google
    </button>
    <button class="outline-btn mt-2">
      <img src="{apple}" alt="google" class="w-6 h-6 mr-2" />
      Sign up with Apple
    </button>
    <button class="outline-btn mt-2">
      <img src="{facebook}" alt="google" class="w-6 h-6 mr-2" />
      Sign up with Facebook
    </button>
    <div class="text-center">
      <span class="text-sm text-gray-500">Already have an account?</span>
      <a href="/login" class="text-blue-500 text-sm text-center">Login</a>
    </div>
  </div>
</form>

<style >
  .sign-in {
    font-size: 2rem;
    font-weight: 600;
  }
  .sign-in-subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: #9ca3af;
  }
</style>

