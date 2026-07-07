import re

with open("bblaw-atlas-v6 (2).html", "r") as f:
    content = f.read()

responsive_css = """
/* ================= MOBILE RESPONSIVENESS TWEAKS ================= */
@media (max-width: 768px) {
  .hero-content { padding: 100px 0 60px; }
  .section { padding: 60px 0; }
  .feature { gap: 32px; }
  .thesis p { font-size: 1.5rem; margin-top: 16px; }
  .btn-row { flex-direction: column; width: 100%; }
  .btn-row .btn { width: 100%; }
  .row-item { grid-template-columns: 1fr; gap: 12px; padding: 24px; }
  .row-item .num { padding-top: 0; margin-bottom: -4px; }
  .hero h1 { font-size: 2.3rem; margin-top: 12px; }
  .finale h2 { font-size: 2rem; }
  .art-card { padding: 20px; grid-template-columns: 1fr; gap: 12px; }
  .sidepanel { padding: 20px; }
  .shell { padding: 24px 16px; }
  .nav-links { padding: 16px 20px 24px; gap: 12px; }
  .nav-cta, .nav-atlas { width: 100%; text-align: center; margin-top: 8px; }
}
</style>"""

content = content.replace("</style>", responsive_css)

with open("bblaw-atlas-v6 (2).html", "w") as f:
    f.write(content)

print("Done")
