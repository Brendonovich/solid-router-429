import { redirect, createAsync } from "@solidjs/router";
import { ErrorBoundary, Show } from "solid-js";

async function serverApiCallThrow(isIndirect?: boolean): Promise<string> {
  "use server";
  throw redirect(`/${isIndirect ? "fromIndirect" : "fromThrow"}/whateva?q=456`);
}

export default function Home() {
  const asyncThing = createAsync(() => serverApiCallThrow());

  return (
    <Show when={asyncThing()}>
      <div>boo!</div>
    </Show>
  );
}
