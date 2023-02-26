<script lang="ts">
  import { supabase } from "$lib/supabase";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate("supabase:auth");
    });

    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<div class="container" style="padding: 50px 0 100px 0">
  <h1>Protected</h1>
  <slot />
</div>
