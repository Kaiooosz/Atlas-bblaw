import re

with open("bblaw-atlas-v6 (2).html", "r") as f:
    content = f.read()

# Replace fonts
content = re.sub(
    r'<link href="https://fonts.googleapis.com/css2\?family=[^"]+" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">',
    content
)

# Replace CSS variables
css_vars = """  --bg: #F5F2EB;
  --surface: #FFFFFF;
  --surface-2: #F5F2EB;
  --ink: #191B21;
  --muted: #6E6B64;
  --faint: #6E6B64;
  --petrol: #2C55E8;
  --petrol-deep: #1A39A8;
  --petrol-soft: #EAEFFA;
  --brass: #191B21;
  --crit: #D32F2F; --crit-bg: #FFEBEE;
  --warn: #F57C00; --warn-bg: #FFF3E0;
  --str: #191B21; --str-bg: #F5F2EB;
  --opt: #388E3C; --opt-bg: #E8F5E9;
  --shadow: 0 14px 40px -18px rgba(25, 27, 33, 0.15);
  --shadow-sm: 0 6px 20px -10px rgba(25, 27, 33, 0.1);
  --serif: 'Space Grotesk', system-ui, sans-serif;
  --sans: 'Space Grotesk', system-ui, sans-serif;
  --mono: 'Space Grotesk', system-ui, sans-serif;"""

content = re.sub(
    r'  --bg:oklch.*?--mono[^\n]+',
    css_vars,
    content,
    flags=re.DOTALL
)

# Remove all emojis
# Emojis regex
emoji_pattern = re.compile(
    u"(\ud83d[\ude00-\ude4f])|"  # emoticons
    u"(\ud83c[\udf00-\uffff])|"  # symbols & pictographs (1 of 2)
    u"(\ud83d[\u0000-\uddff])|"  # symbols & pictographs (2 of 2)
    u"(\ud83d[\ude80-\udeff])|"  # transport & map symbols
    u"(\ud83c[\udde0-\uddff])"  # flags (iOS)
    "+", flags=re.UNICODE)
content = emoji_pattern.sub(r'', content)
# other emojis
content = re.sub(r'[\U00010000-\U0010ffff]', '', content)

with open("bblaw-atlas-v6 (2).html", "w") as f:
    f.write(content)

print("Done")
