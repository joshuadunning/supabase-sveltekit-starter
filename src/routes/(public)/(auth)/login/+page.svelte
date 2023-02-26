<script lang="ts">
  import { supabase } from "$lib/supabase";
  import { page } from "$app/stores";
  import google from '$lib/assets/icons/google.png';
  import apple from '$lib/assets/icons/apple.png';
  import facebook from '$lib/assets/icons/facebook.png';

  let loading = false;
  let email: string;
  let password: string;

  const handleLogin = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      const redirect = $page.url.searchParams.get("redirect");
      if (redirect) {
        window.location.href = redirect;
      } else {
        window.location.href = `/dashboard`;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
</script>

<form class="w-full justify-self-center flex items-center" on:submit|preventDefault={handleLogin}>
  <div class="flex flex-col w-full">
    <div class="sign-in">Sign in</div>
    <div class="sign-in-subtitle">Welcome back! Please enter your login details.</div>
    <input
      type="email"
      bind:value={email}
      placeholder="Email"
      class=""
      />
    <input
        type="password"
        bind:value={password}
        placeholder="Password"
        class="mt-2"
        />
      <a href="/forgot-password" class="text-blue-500 text-sm text-right">Forgot password?</a>
      <button
        type="submit"
        class="mt-4 primary-btn"
        disabled={loading}
        >
        {#if loading}
            Loading...
        {:else}
            Sign in
        {/if}
      </button>
      <div class="text-center mt-4">
        <span class="text-sm text-gray-500">Or sign in with</span>
      </div>
      <button class="outline-btn mt-4">
        <img src="{google}" alt="google" class="w-6 h-6 mr-2" />
          Sign in with Google
      </button>
    <button class="outline-btn mt-2">
      <img src="{apple}" alt="google" class="w-6 h-6 mr-2" />
      Sign in with Apple
    </button>
    <button class="outline-btn mt-2">
      <img src="{facebook}" alt="google" class="w-6 h-6 mr-2" />
      Sign in with Facebook
    </button>
      <div class="text-center">
          <span class="text-sm text-gray-500">Don't have an account?</span>
        <a href="/signup" class="text-blue-500 text-sm text-center">Sign up</a>
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
