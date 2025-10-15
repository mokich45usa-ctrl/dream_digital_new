
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function sendPageView() {
  // @ts-ignore
  const gtagFn = (window as any).gtag as ((...args: any[]) => void) | undefined;
  if (!gtagFn) return;
  const params: Record<string, any> = {};
  if (import.meta.env.DEV) params.debug_mode = true;
  gtagFn('event', 'page_view', params);
}

createRoot(document.getElementById("root")!).render(<App />);

// Trigger initial page_view after app mounts
if (document.readyState === 'complete') {
  sendPageView();
} else {
  window.addEventListener('load', sendPageView, { once: true });
}
  