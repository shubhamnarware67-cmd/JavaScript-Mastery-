// ============================================================================
// JavaScript Mastery — Shared Site Behavior
// Owner: Shubham Narware
// ============================================================================

(function () {
  "use strict";

  // ---- Theme toggle (dark/light, persisted) -------------------------------
  const root = document.documentElement;
  const stored = null; // NOTE: localStorage intentionally not used in generated
                        // preview contexts; wire up localStorage.getItem/setItem
                        // when self-hosting this site.
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", current);
    });
  }

  // ---- Reading progress bar ------------------------------------------------
  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + "%";
    });
  }

  // ---- Copy-to-clipboard button on every <pre><code> block ---------------
  document.querySelectorAll("pre").forEach((pre) => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", async () => {
      const code = pre.querySelector("code");
      const text = code ? code.textContent : pre.textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1200);
      } catch (e) {
        btn.textContent = "Failed";
      }
    });
    pre.appendChild(btn);
  });

  // ---- Sidebar search filter ------------------------------------------------
  const search = document.getElementById("sidebarSearch");
  if (search) {
    search.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      document.querySelectorAll(".nav-list li").forEach((li) => {
        const text = li.textContent.trim().toLowerCase();
        li.style.display = text.includes(q) ? "" : "none";
      });
    });
  }
})();
