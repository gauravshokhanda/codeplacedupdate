"""
Generate premium, ultra-high-definition photorealistic device mockups for Hoopwrld Case Study:
1. hoopwrld-hero-hd.webp (2400 x 1500) - Large metallic laptop on pure black #000000 for side-by-side hero
2. hoopwrld-daily-pulse-mobile-hd.webp (1600 x 2000) - Graphite smartphone with authentic Daily Pulse dashboard
3. hoopwrld-gameplay-hd.webp (2400 x 1500) - HD Gameplay Analytics desktop dashboard presentation
4. hoopwrld-before-hd.webp (2400 x 1400) - Challenge section Before dashboard in dark browser frame
5. hoopwrld-before-after-hd.webp (2600 x 1400) - Side-by-side 50/50 comparison with BEFORE & AFTER labels
6. hoopwrld-featured-flagship.webp (2400 x 1500) - Matching hero visual for /case-studies card
"""

import math
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

def create_rounded_rect_mask(size, radius):
    """Create an anti-aliased rounded rectangle mask."""
    w, h = size
    scale = 4
    mask = Image.new("L", (w * scale, h * scale), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, w * scale - 1, h * scale - 1], radius=radius * scale, fill=255)
    return mask.resize((w, h), Image.Resampling.LANCZOS)

def draw_soft_shadow(base_img, box, radius, color=(0, 0, 0, 180), blur=30, offset=(0, 15)):
    """Draw a realistic multi-stage soft shadow underneath an element."""
    x0, y0, x1, y1 = box
    ox, oy = offset
    shadow = Image.new("RGBA", base_img.size, (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle(
        [x0 + ox, y0 + oy, x1 + ox, y1 + oy],
        radius=radius,
        fill=color
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    return Image.alpha_composite(base_img, shadow)

def build_hero_laptop_hd():
    """
    Build high-resolution hero laptop mockup (2400 x 1500)
    Designed specifically for 45/55 split hero layout.
    Pure black #000000 background with subtle ambient floor light.
    """
    W, H = 2400, 1500
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    
    # Subtle ambient studio lighting gradient centered behind the laptop
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    for r in range(900, 0, -30):
        alpha = int(24 * (1.0 - r / 900))
        g_draw.ellipse(
            [W//2 - int(r*1.4), H//2 - int(r*0.8), W//2 + int(r*1.4), H//2 + int(r*0.8)],
            fill=(0, 188, 212, alpha)
        )
    canvas = Image.alpha_composite(canvas, glow)
    
    # Laptop occupies ~90% of canvas width (2160px wide)
    laptop_w = 2160
    lid_h = 1300
    lid_x0 = (W - laptop_w) // 2
    lid_y0 = 70
    lid_x1 = lid_x0 + laptop_w
    lid_y1 = lid_y0 + lid_h
    
    # Floor contact & ambient shadows
    canvas = draw_soft_shadow(canvas, [lid_x0, lid_y1 - 70, lid_x1, lid_y1 + 50], radius=35, color=(0, 0, 0, 230), blur=50, offset=(0, 40))
    canvas = draw_soft_shadow(canvas, [lid_x0 + 40, lid_y1 - 50, lid_x1 - 40, lid_y1 + 25], radius=25, color=(0, 0, 0, 250), blur=25, offset=(0, 20))
    canvas = draw_soft_shadow(canvas, [lid_x0 + 100, lid_y1 - 25, lid_x1 - 100, lid_y1 + 10], radius=15, color=(0, 0, 0, 255), blur=12, offset=(0, 8))
    
    # 1. Outer Aluminum Lid Layer
    lid_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    lid_draw = ImageDraw.Draw(lid_layer)
    
    corner_r = 36
    # Outer chamfer
    lid_draw.rounded_rectangle([lid_x0, lid_y0, lid_x1 - 1, lid_y1 - 1], radius=corner_r, fill=(42, 45, 50, 255))
    lid_draw.rounded_rectangle([lid_x0 + 2, lid_y0 + 2, lid_x1 - 3, lid_y1 - 3], radius=corner_r - 2, fill=(28, 30, 34, 255))
    # Top edge highlight
    lid_draw.line([lid_x0 + corner_r, lid_y0 + 1, lid_x1 - corner_r, lid_y0 + 1], fill=(130, 136, 146, 190), width=1)
    
    # 2. Black Screen Bezel
    bezel_margin = 18
    bezel_x0 = lid_x0 + bezel_margin
    bezel_y0 = lid_y0 + bezel_margin
    bezel_x1 = lid_x1 - bezel_margin
    bezel_y1 = lid_y1 - bezel_margin - 34 # bottom chin
    bezel_r = 22
    lid_draw.rounded_rectangle([bezel_x0, bezel_y0, bezel_x1, bezel_y1], radius=bezel_r, fill=(12, 13, 15, 255))
    
    # 3. Authentic Screen Display
    screen_padding = 10
    screen_x0 = bezel_x0 + screen_padding
    screen_y0 = bezel_y0 + screen_padding + 16 # room for camera notch
    screen_x1 = bezel_x1 - screen_padding
    screen_y1 = bezel_y1 - screen_padding
    screen_w = screen_x1 - screen_x0
    screen_h = screen_y1 - screen_y0
    
    # Load authentic Looker Studio gameplay overview
    raw_dashboard = Image.open("public/images/case-studies/hoopwrld/gameplay_dashboard_5x_clean.png")
    screen_aspect = screen_w / screen_h
    dash_w, dash_h = raw_dashboard.size
    crop_h = int(dash_w / screen_aspect)
    if crop_h > dash_h:
        crop_h = dash_h
    dash_crop = raw_dashboard.crop((0, 0, dash_w, crop_h))
    dash_resized = dash_crop.resize((screen_w, screen_h), Image.Resampling.LANCZOS).convert("RGBA")
    
    # Ultra-subtle glass reflection sheen
    glare = Image.new("RGBA", (screen_w, screen_h), (0, 0, 0, 0))
    g_d = ImageDraw.Draw(glare)
    for x in range(screen_w):
        prog = 1.0 - (x / screen_w)
        a = int(9 * prog * prog)
        g_d.line([x, 0, x - screen_h // 3, screen_h], fill=(255, 255, 255, a), width=2)
    dash_resized = Image.alpha_composite(dash_resized, glare)
    
    screen_mask = create_rounded_rect_mask((screen_w, screen_h), radius=12)
    lid_layer.paste(dash_resized, (screen_x0, screen_y0), screen_mask)
    
    # FaceTime Camera Notch over top center
    notch_w = 120
    notch_h = 18
    notch_x0 = (W - notch_w) // 2
    notch_y0 = bezel_y0 + screen_padding
    lid_draw.rounded_rectangle([notch_x0, notch_y0, notch_x0 + notch_w, notch_y0 + notch_h], radius=7, fill=(12, 13, 15, 255))
    cam_x = W // 2
    cam_y = notch_y0 + notch_h // 2
    lid_draw.ellipse([cam_x - 4, cam_y - 4, cam_x + 4, cam_y + 4], fill=(20, 24, 30, 255))
    lid_draw.ellipse([cam_x - 2, cam_y - 2, cam_x + 2, cam_y + 2], fill=(8, 45, 60, 255))
    lid_draw.ellipse([cam_x - 1, cam_y - 1, cam_x, cam_y], fill=(100, 180, 220, 180))
    lid_draw.ellipse([cam_x + 20 - 1, cam_y - 1, cam_x + 20 + 1, cam_y + 1], fill=(50, 205, 50, 180))
    
    canvas = Image.alpha_composite(canvas, lid_layer)
    
    # 4. Realistic Aluminum Base / Keyboard Deck & Hinge
    base_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(base_layer)
    base_w = laptop_w + 54
    base_h = 36
    base_x0 = (W - base_w) // 2
    base_y0 = lid_y1 - 10
    base_x1 = base_x0 + base_w
    base_y1 = base_y0 + base_h
    
    # Hinge gap
    b_draw.rectangle([base_x0 + 30, base_y0, base_x1 - 30, base_y0 + 6], fill=(10, 11, 13, 255))
    # Front base lip
    b_draw.rounded_rectangle([base_x0, base_y0 + 6, base_x1 - 1, base_y1 - 1], radius=9, fill=(50, 53, 59, 255))
    b_draw.rounded_rectangle([base_x0 + 1, base_y0 + 7, base_x1 - 2, base_y1 - 2], radius=8, fill=(36, 38, 43, 255))
    # Deck top line highlight
    b_draw.line([base_x0 + 12, base_y0 + 6, base_x1 - 12, base_y0 + 6], fill=(120, 125, 135, 210), width=1)
    
    # Front Thumb Scoop
    scoop_w = 180
    scoop_h = 9
    scoop_x0 = (W - scoop_w) // 2
    b_draw.rounded_rectangle([scoop_x0, base_y0 + 6, scoop_x0 + scoop_w, base_y0 + 6 + scoop_h], radius=4, fill=(20, 21, 24, 255))
    b_draw.line([scoop_x0 + 4, base_y0 + 6 + scoop_h, scoop_x0 + scoop_w - 4, base_y0 + 6 + scoop_h], fill=(85, 90, 100, 160), width=1)
    
    canvas = Image.alpha_composite(canvas, base_layer)
    
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-hero-hd.webp", "WEBP", quality=95, method=6)
    final.save("public/images/case-studies/hoopwrld-hero.webp", "WEBP", quality=95, method=6)
    final.save("public/images/case-studies/hoopwrld-featured-flagship.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-hero-hd.webp and hoopwrld-hero.webp generated at 2400x1500")

def build_daily_pulse_phone_hd():
    """
    Build high-resolution Daily Pulse smartphone mockup (1600 x 2000)
    As explicitly requested: target size at least 1600x2000px.
    Modern graphite smartphone with authentic Hoopwrld mobile dashboard visible.
    """
    W, H = 1600, 2000
    canvas = Image.new("RGBA", (W, H), (247, 248, 250, 255))
    c_draw = ImageDraw.Draw(canvas)
    
    # Studio lighting radial gradient
    for r in range(1100, 0, -35):
        alpha = int(40 * (1.0 - r / 1100))
        c_draw.ellipse(
            [W//2 - r, H//2 - int(r*0.8), W//2 + r, H//2 + int(r*0.8)],
            fill=(255, 255, 255, alpha)
        )
    
    # Phone dimensions (fits comfortably in 2000h with generous breathing room)
    # iPhone Pro aspect ratio ~ 19.5 : 9
    phone_h = 1720
    phone_w = 830
    phone_x0 = (W - phone_w) // 2
    phone_y0 = (H - phone_h) // 2 - 20
    phone_x1 = phone_x0 + phone_w
    phone_y1 = phone_y0 + phone_h
    
    # Soft floor shadows
    canvas = draw_soft_shadow(canvas, [phone_x0 - 25, phone_y1 - 50, phone_x1 + 25, phone_y1 + 60], radius=45, color=(16, 24, 40, 65), blur=50, offset=(0, 45))
    canvas = draw_soft_shadow(canvas, [phone_x0 + 15, phone_y1 - 35, phone_x1 - 15, phone_y1 + 35], radius=35, color=(16, 24, 40, 85), blur=30, offset=(0, 25))
    canvas = draw_soft_shadow(canvas, [phone_x0 + 50, phone_y1 - 15, phone_x1 - 50, phone_y1 + 15], radius=20, color=(16, 24, 40, 130), blur=15, offset=(0, 10))
    
    phone_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(phone_layer)
    
    corner_r = 76
    # Titanium Outer Chassis
    p_draw.rounded_rectangle([phone_x0, phone_y0, phone_x1 - 1, phone_y1 - 1], radius=corner_r, fill=(52, 55, 60, 255))
    p_draw.rounded_rectangle([phone_x0 + 2, phone_y0 + 2, phone_x1 - 3, phone_y1 - 3], radius=corner_r - 2, fill=(84, 88, 96, 255))
    p_draw.rounded_rectangle([phone_x0 + 4, phone_y0 + 4, phone_x1 - 5, phone_y1 - 5], radius=corner_r - 4, fill=(38, 40, 45, 255))
    
    # Antenna bands
    for ay in [phone_y0 + 200, phone_y1 - 200]:
        p_draw.line([phone_x0, ay, phone_x0 + 5, ay], fill=(28, 30, 34, 255), width=3)
        p_draw.line([phone_x1 - 5, ay, phone_x1, ay], fill=(28, 30, 34, 255), width=3)
    
    # Screen Bezel
    bezel_padding = 14
    screen_x0 = phone_x0 + bezel_padding
    screen_y0 = phone_y0 + bezel_padding
    screen_x1 = phone_x1 - bezel_padding
    screen_y1 = phone_y1 - bezel_padding
    screen_w = screen_x1 - screen_x0
    screen_h = screen_y1 - screen_y0
    screen_r = corner_r - 12
    
    p_draw.rounded_rectangle(
        [screen_x0, screen_y0, screen_x1, screen_y1],
        radius=screen_r,
        fill=(10, 11, 13, 255)
    )
    
    # Load authentic phone Daily Pulse screenshot from 6x extraction
    raw_phone = Image.open("public/images/case-studies/hoopwrld/phone_content_exact_6x.png")
    # Resize with Lanczos to fit phone screen
    phone_dash_resized = raw_phone.resize((screen_w, screen_h), Image.Resampling.LANCZOS).convert("RGBA")
    
    # Realistic glass glare sheen
    glare = Image.new("RGBA", (screen_w, screen_h), (0, 0, 0, 0))
    g_d = ImageDraw.Draw(glare)
    for x in range(screen_w):
        prog = 1.0 - (x / screen_w)
        a = int(12 * prog * prog)
        g_d.line([x, 0, x - screen_h // 3, screen_h], fill=(255, 255, 255, a), width=2)
    phone_dash_resized = Image.alpha_composite(phone_dash_resized, glare)
    
    screen_mask = create_rounded_rect_mask((screen_w, screen_h), radius=screen_r)
    phone_layer.paste(phone_dash_resized, (screen_x0, screen_y0), screen_mask)
    
    # Dynamic Island / Camera Pill
    pill_w = 170
    pill_h = 42
    pill_x0 = (W - pill_w) // 2
    pill_y0 = screen_y0 + 18
    p_draw.rounded_rectangle([pill_x0, pill_y0, pill_x0 + pill_w, pill_y0 + pill_h], radius=21, fill=(0, 0, 0, 255))
    cam_x = pill_x0 + pill_w - 32
    cam_y = pill_y0 + pill_h // 2
    p_draw.ellipse([cam_x - 7, cam_y - 7, cam_x + 7, cam_y + 7], fill=(15, 18, 24, 255))
    p_draw.ellipse([cam_x - 3, cam_y - 3, cam_x + 3, cam_y + 3], fill=(20, 50, 70, 255))
    p_draw.ellipse([cam_x - 1, cam_y - 1, cam_x, cam_y], fill=(120, 200, 240, 180))
    
    # Speaker notch
    p_draw.rounded_rectangle([W//2 - 38, screen_y0 + 3, W//2 + 38, screen_y0 + 7], radius=3, fill=(25, 26, 28, 255))
    
    canvas = Image.alpha_composite(canvas, phone_layer)
    
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-daily-pulse-mobile-hd.webp", "WEBP", quality=95, method=6)
    final.save("public/images/case-studies/hoopwrld-daily-pulse.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-daily-pulse-mobile-hd.webp generated at 1600x2000")

def build_gameplay_hd():
    """
    Build HD Gameplay Analytics desktop dashboard presentation (2400 x 1500)
    Realistic dark studio monitor displaying the authentic Looker Studio gameplay dashboard.
    """
    W, H = 2400, 1500
    canvas = Image.new("RGBA", (W, H), (10, 13, 18, 255))
    
    win_w = 2200
    win_h = 1340
    win_x0 = (W - win_w) // 2
    win_y0 = (H - win_h) // 2
    win_x1 = win_x0 + win_w
    win_y1 = win_y0 + win_h
    
    canvas = draw_soft_shadow(canvas, [win_x0, win_y0, win_x1, win_y1], radius=24, color=(0, 0, 0, 240), blur=50, offset=(0, 25))
    
    win_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    w_draw = ImageDraw.Draw(win_layer)
    
    w_draw.rounded_rectangle([win_x0, win_y0, win_x1 - 1, win_y1 - 1], radius=20, fill=(22, 25, 30, 255))
    w_draw.rounded_rectangle([win_x0 + 1, win_y0 + 1, win_x1 - 2, win_y1 - 2], radius=19, fill=(16, 18, 22, 255))
    
    titlebar_h = 56
    w_draw.rounded_rectangle([win_x0 + 1, win_y0 + 1, win_x1 - 2, win_y0 + titlebar_h], radius=19, fill=(26, 29, 36, 255))
    w_draw.rectangle([win_x0 + 1, win_y0 + titlebar_h - 12, win_x1 - 2, win_y0 + titlebar_h], fill=(26, 29, 36, 255))
    w_draw.line([win_x0 + 1, win_y0 + titlebar_h, win_x1 - 2, win_y0 + titlebar_h], fill=(42, 46, 56, 255), width=1)
    
    # Traffic lights
    dots = [
        (win_x0 + 30, (239, 68, 68)),
        (win_x0 + 55, (245, 158, 11)),
        (win_x0 + 80, (16, 185, 129))
    ]
    for dx, color in dots:
        w_draw.ellipse([dx - 7, win_y0 + titlebar_h//2 - 7, dx + 7, win_y0 + titlebar_h//2 + 7], fill=color)
    
    # Screen area
    screen_padding = 10
    screen_x0 = win_x0 + screen_padding
    screen_y0 = win_y0 + titlebar_h + screen_padding
    screen_x1 = win_x1 - screen_padding
    screen_y1 = win_y1 - screen_padding
    screen_w = screen_x1 - screen_x0
    screen_h = screen_y1 - screen_y0
    
    raw_gameplay = Image.open("public/images/case-studies/hoopwrld/gameplay_dashboard_5x_clean.png")
    g_aspect = screen_w / screen_h
    gw, gh = raw_gameplay.size
    g_crop_h = int(gw / g_aspect)
    if g_crop_h > gh:
        g_crop_h = gh
    g_crop = raw_gameplay.crop((0, 0, gw, g_crop_h))
    g_resized = g_crop.resize((screen_w, screen_h), Image.Resampling.LANCZOS).convert("RGBA")
    
    s_mask = create_rounded_rect_mask((screen_w, screen_h), radius=12)
    win_layer.paste(g_resized, (screen_x0, screen_y0), s_mask)
    
    canvas = Image.alpha_composite(canvas, win_layer)
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-gameplay-hd.webp", "WEBP", quality=95, method=6)
    final.save("public/images/case-studies/hoopwrld-gameplay.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-gameplay-hd.webp generated at 2400x1500")

def build_before_hd():
    """
    Build Challenge Section Before dashboard in dark browser frame (2400 x 1400)
    """
    W, H = 2400, 1400
    canvas = Image.new("RGBA", (W, H), (7, 9, 13, 255))
    
    win_w = 2200
    win_h = 1240
    win_x0 = (W - win_w) // 2
    win_y0 = (H - win_h) // 2
    win_x1 = win_x0 + win_w
    win_y1 = win_y0 + win_h
    
    canvas = draw_soft_shadow(canvas, [win_x0, win_y0, win_x1, win_y1], radius=24, color=(0, 0, 0, 240), blur=50, offset=(0, 25))
    
    win_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    w_draw = ImageDraw.Draw(win_layer)
    
    w_draw.rounded_rectangle([win_x0, win_y0, win_x1 - 1, win_y1 - 1], radius=20, fill=(22, 25, 30, 255))
    w_draw.rounded_rectangle([win_x0 + 1, win_y0 + 1, win_x1 - 2, win_y1 - 2], radius=19, fill=(16, 18, 22, 255))
    
    titlebar_h = 56
    w_draw.rounded_rectangle([win_x0 + 1, win_y0 + 1, win_x1 - 2, win_y0 + titlebar_h], radius=19, fill=(26, 29, 36, 255))
    w_draw.rectangle([win_x0 + 1, win_y0 + titlebar_h - 12, win_x1 - 2, win_y0 + titlebar_h], fill=(26, 29, 36, 255))
    w_draw.line([win_x0 + 1, win_y0 + titlebar_h, win_x1 - 2, win_y0 + titlebar_h], fill=(42, 46, 56, 255), width=1)
    
    dots = [
        (win_x0 + 30, (239, 68, 68)),
        (win_x0 + 55, (245, 158, 11)),
        (win_x0 + 80, (16, 185, 129))
    ]
    for dx, color in dots:
        w_draw.ellipse([dx - 7, win_y0 + titlebar_h//2 - 7, dx + 7, win_y0 + titlebar_h//2 + 7], fill=color)
    
    # Red BEFORE badge in titlebar
    w_draw.rounded_rectangle([win_x0 + 120, win_y0 + 14, win_x0 + 380, win_y0 + 42], radius=6, fill=(239, 68, 68, 30))
    w_draw.rounded_rectangle([win_x0 + 120, win_y0 + 14, win_x0 + 380, win_y0 + 42], radius=6, outline=(239, 68, 68, 120), width=1)
    
    screen_padding = 10
    screen_x0 = win_x0 + screen_padding
    screen_y0 = win_y0 + titlebar_h + screen_padding
    screen_x1 = win_x1 - screen_padding
    screen_y1 = win_y1 - screen_padding
    screen_w = screen_x1 - screen_x0
    screen_h = screen_y1 - screen_y0
    
    raw_before = Image.open("public/images/case-studies/hoopwrld/before_report_5x_clean.png")
    before_resized = raw_before.resize((screen_w, screen_h), Image.Resampling.LANCZOS).convert("RGBA")
    
    s_mask = create_rounded_rect_mask((screen_w, screen_h), radius=12)
    win_layer.paste(before_resized, (screen_x0, screen_y0), s_mask)
    
    canvas = Image.alpha_composite(canvas, win_layer)
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-before-hd.webp", "WEBP", quality=95, method=6)
    final.save("public/images/case-studies/hoopwrld-before.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-before-hd.webp generated at 2400x1400")

def build_before_after_hd():
    """
    Build 50/50 side-by-side Before vs After visual comparison (2600 x 1400)
    Left: BEFORE (Legacy mixed GA4/DB report) with red label
    Right: AFTER (Standardized PostgreSQL Looker Studio BI) with cyan label
    """
    W, H = 2600, 1400
    canvas = Image.new("RGBA", (W, H), (6, 8, 11, 255))
    
    card_w = 1230
    card_h = 1240
    card_y0 = (H - card_h) // 2
    card_y1 = card_y0 + card_h
    
    left_x0 = 50
    left_x1 = left_x0 + card_w
    canvas = draw_soft_shadow(canvas, [left_x0, card_y0, left_x1, card_y1], radius=24, color=(0, 0, 0, 220), blur=40, offset=(0, 20))
    
    right_x0 = W - card_w - 50
    right_x1 = right_x0 + card_w
    canvas = draw_soft_shadow(canvas, [right_x0, card_y0, right_x1, card_y1], radius=24, color=(0, 0, 0, 220), blur=40, offset=(0, 20))
    
    # Left Window Layer (BEFORE)
    left_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    l_draw = ImageDraw.Draw(left_layer)
    l_draw.rounded_rectangle([left_x0, card_y0, left_x1 - 1, card_y1 - 1], radius=20, fill=(20, 22, 27, 255))
    l_draw.rounded_rectangle([left_x0 + 1, card_y0 + 1, left_x1 - 2, card_y1 - 2], radius=19, fill=(15, 17, 21, 255))
    
    hbar_h = 60
    l_draw.rounded_rectangle([left_x0 + 1, card_y0 + 1, left_x1 - 2, card_y0 + hbar_h], radius=19, fill=(26, 28, 34, 255))
    l_draw.rectangle([left_x0 + 1, card_y0 + hbar_h - 12, left_x1 - 2, card_y0 + hbar_h], fill=(26, 28, 34, 255))
    l_draw.line([left_x0 + 1, card_y0 + hbar_h, left_x1 - 2, card_y0 + hbar_h], fill=(42, 46, 54, 255), width=1)
    
    # Red badge
    l_draw.rounded_rectangle([left_x0 + 24, card_y0 + 14, left_x0 + 360, card_y0 + 46], radius=6, fill=(239, 68, 68, 35))
    l_draw.rounded_rectangle([left_x0 + 24, card_y0 + 14, left_x0 + 360, card_y0 + 46], radius=6, outline=(239, 68, 68, 140), width=1)
    
    l_screen_p = 10
    l_screen_x0 = left_x0 + l_screen_p
    l_screen_y0 = card_y0 + hbar_h + l_screen_p
    l_screen_w = card_w - l_screen_p * 2
    l_screen_h = card_h - hbar_h - l_screen_p * 2
    
    raw_before = Image.open("public/images/case-studies/hoopwrld/before_report_5x_clean.png")
    before_fit = raw_before.resize((l_screen_w, l_screen_h), Image.Resampling.LANCZOS).convert("RGBA")
    l_mask = create_rounded_rect_mask((l_screen_w, l_screen_h), radius=12)
    left_layer.paste(before_fit, (l_screen_x0, l_screen_y0), l_mask)
    
    canvas = Image.alpha_composite(canvas, left_layer)
    
    # Right Window Layer (AFTER)
    right_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    r_draw = ImageDraw.Draw(right_layer)
    r_draw.rounded_rectangle([right_x0, card_y0, right_x1 - 1, card_y1 - 1], radius=20, fill=(20, 22, 27, 255))
    r_draw.rounded_rectangle([right_x0 + 1, card_y0 + 1, right_x1 - 2, card_y1 - 2], radius=19, fill=(15, 17, 21, 255))
    
    r_draw.rounded_rectangle([right_x0 + 1, card_y0 + 1, right_x1 - 2, card_y0 + hbar_h], radius=19, fill=(26, 28, 34, 255))
    r_draw.rectangle([right_x0 + 1, card_y0 + hbar_h - 12, right_x1 - 2, card_y0 + hbar_h], fill=(26, 28, 34, 255))
    r_draw.line([right_x0 + 1, card_y0 + hbar_h, right_x1 - 2, card_y0 + hbar_h], fill=(0, 188, 212, 110), width=1)
    
    # Cyan badge
    r_draw.rounded_rectangle([right_x0 + 24, card_y0 + 14, right_x0 + 380, card_y0 + 46], radius=6, fill=(0, 188, 212, 35))
    r_draw.rounded_rectangle([right_x0 + 24, card_y0 + 14, right_x0 + 380, card_y0 + 46], radius=6, outline=(0, 188, 212, 140), width=1)
    
    r_screen_p = 10
    r_screen_x0 = right_x0 + r_screen_p
    r_screen_y0 = card_y0 + hbar_h + r_screen_p
    r_screen_w = card_w - r_screen_p * 2
    r_screen_h = card_h - hbar_h - r_screen_p * 2
    
    raw_gameplay = Image.open("public/images/case-studies/hoopwrld/gameplay_dashboard_5x_clean.png")
    g_aspect = r_screen_w / r_screen_h
    gw, gh = raw_gameplay.size
    g_crop_h = int(gw / g_aspect)
    if g_crop_h > gh:
        g_crop_h = gh
    g_crop = raw_gameplay.crop((0, 0, gw, g_crop_h))
    gameplay_fit = g_crop.resize((r_screen_w, r_screen_h), Image.Resampling.LANCZOS).convert("RGBA")
    r_mask = create_rounded_rect_mask((r_screen_w, r_screen_h), radius=12)
    right_layer.paste(gameplay_fit, (r_screen_x0, r_screen_y0), r_mask)
    
    canvas = Image.alpha_composite(canvas, right_layer)
    
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-before-after-hd.webp", "WEBP", quality=95, method=6)
    final.save("public/images/case-studies/hoopwrld-comparison.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-before-after-hd.webp generated at 2600x1400")

if __name__ == "__main__":
    print("Starting generation of all HD visual assets...")
    build_hero_laptop_hd()
    build_daily_pulse_phone_hd()
    build_gameplay_hd()
    build_before_hd()
    build_before_after_hd()
    print("All HD assets generated successfully!")
