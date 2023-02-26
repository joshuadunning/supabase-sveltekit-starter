import { getServerSession } from "@supabase/auth-helpers-sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const session = await getServerSession(event);
  if (!session) {
    const redirectPath = event.url.pathname + event.url.search;
    throw redirect(
      302,
      `/login${redirectPath ? `?redirect=${redirectPath}` : ""}`
    );
  }

  return {
    session,
  };
};
