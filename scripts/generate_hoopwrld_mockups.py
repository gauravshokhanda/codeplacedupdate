"""
Generate pixel-perfect, photorealistic device mockups for the Hoopwrld Case Study
using authentic high-resolution screenshots extracted at 5x matrix (300 DPI) from the PDF.
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

def draw_soft_shadow(base_img, box, radius, color=(0, 0, 0, 180), blur=25, offset=(0, 15)):
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

def build_hero_laptop():
    """
    Build high-resolution hero laptop mockup (2400 x 1350)
    Realistic Space Gray MacBook Pro on studio black background.
    """
    W, H = 2400, 1350
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    
    # Subtle ambient studio lighting gradient
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    for r in range(800, 0, -25):
        alpha = int(22 * (1.0 - r / 800))
        g_draw.ellipse(
            [W//2 - int(r*1.5), H//2 - int(r*0.8), W//2 + int(r*1.5), H//2 + int(r*0.8)],
            fill=(0, 188, 212, alpha)
        )
    canvas = Image.alpha_composite(canvas, glow)
    
    # Laptop Dimensions
    laptop_w = 1960
    lid_h = 1180
    lid_x0 = (W - laptop_w) // 2
    lid_y0 = 60
    lid_x1 = lid_x0 + laptop_w
    lid_y1 = lid_y0 + lid_h
    
    # Floor shadows
    canvas = draw_soft_shadow(canvas, [lid_x0, lid_y1 - 60, lid_x1, lid_y1 + 40], radius=30, color=(0, 0, 0, 230), blur=45, offset=(0, 35))
    canvas = draw_soft_shadow(canvas, [lid_x0 + 40, lid_y1 - 40, lid_x1 - 40, lid_y1 + 20], radius=20, color=(0, 0, 0, 250), blur=20, offset=(0, 15))
    canvas = draw_soft_shadow(canvas, [lid_x0 + 100, lid_y1 - 20, lid_x1 - 100, lid_y1 + 10], radius=15, color=(0, 0, 0, 255), blur=10, offset=(0, 5))
    
    # 1. Outer Aluminum Lid Layer
    lid_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    lid_draw = ImageDraw.Draw(lid_layer)
    
    corner_r = 32
    # Outer chamfer
    lid_draw.rounded_rectangle([lid_x0, lid_y0, lid_x1 - 1, lid_y1 - 1], radius=corner_r, fill=(40, 43, 48, 255))
    lid_draw.rounded_rectangle([lid_x0 + 2, lid_y0 + 2, lid_x1 - 3, lid_y1 - 3], radius=corner_r - 2, fill=(28, 30, 34, 255))
    # Top edge highlight
    lid_draw.line([lid_x0 + corner_r, lid_y0 + 1, lid_x1 - corner_r, lid_y0 + 1], fill=(120, 126, 136, 180), width=1)
    
    # 2. Black Screen Bezel
    bezel_margin = 16
    bezel_x0 = lid_x0 + bezel_margin
    bezel_y0 = lid_y0 + bezel_margin
    bezel_x1 = lid_x1 - bezel_margin
    bezel_y1 = lid_y1 - bezel_margin - 30 # bottom chin
    bezel_r = 20
    lid_draw.rounded_rectangle([bezel_x0, bezel_y0, bezel_x1, bezel_y1], radius=bezel_r, fill=(12, 13, 15, 255))
    
    # 3. Authentic Screen Display
    screen_padding = 10
    screen_x0 = bezel_x0 + screen_padding
    screen_y0 = bezel_y0 + screen_padding + 14 # room for camera notch
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
    
    # Ultra-subtle glass reflection
    glare = Image.new("RGBA", (screen_w, screen_h), (0, 0, 0, 0))
    g_d = ImageDraw.Draw(glare)
    for x in range(screen_w):
        prog = 1.0 - (x / screen_w)
        a = int(10 * prog * prog)
        g_d.line([x, 0, x - screen_h // 3, screen_h], fill=(255, 255, 255, a), width=2)
    dash_resized = Image.alpha_composite(dash_resized, glare)
    
    # Screen mask
    screen_mask = create_rounded_rect_mask((screen_w, screen_h), radius=10)
    lid_layer.paste(dash_resized, (screen_x0, screen_y0), screen_mask)
    
    # FaceTime Camera Notch over top center of screen
    notch_w = 110
    notch_h = 16
    notch_x0 = (W - notch_w) // 2
    notch_y0 = bezel_y0 + screen_padding
    lid_draw.rounded_rectangle([notch_x0, notch_y0, notch_x0 + notch_w, notch_y0 + notch_h], radius=6, fill=(12, 13, 15, 255))
    cam_x = W // 2
    cam_y = notch_y0 + notch_h // 2
    lid_draw.ellipse([cam_x - 4, cam_y - 4, cam_x + 4, cam_y + 4], fill=(20, 24, 30, 255))
    lid_draw.ellipse([cam_x - 2, cam_y - 2, cam_x + 2, cam_y + 2], fill=(8, 45, 60, 255))
    lid_draw.ellipse([cam_x - 1, cam_y - 1, cam_x, cam_y], fill=(100, 180, 220, 180))
    lid_draw.ellipse([cam_x + 18 - 1, cam_y - 1, cam_x + 18 + 1, cam_y + 1], fill=(50, 205, 50, 180))
    
    canvas = Image.alpha_composite(canvas, lid_layer)
    
    # 4. Realistic Aluminum Base / Keyboard Deck & Hinge
    base_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(base_layer)
    base_w = laptop_w + 50
    base_h = 32
    base_x0 = (W - base_w) // 2
    base_y0 = lid_y1 - 10
    base_x1 = base_x0 + base_w
    base_y1 = base_y0 + base_h
    
    # Hinge gap
    b_draw.rectangle([base_x0 + 25, base_y0, base_x1 - 25, base_y0 + 6], fill=(10, 11, 13, 255))
    # Front base lip
    b_draw.rounded_rectangle([base_x0, base_y0 + 6, base_x1 - 1, base_y1 - 1], radius=8, fill=(48, 51, 57, 255))
    b_draw.rounded_rectangle([base_x0 + 1, base_y0 + 7, base_x1 - 2, base_y1 - 2], radius=7, fill=(35, 37, 42, 255))
    # Deck top line highlight
    b_draw.line([base_x0 + 10, base_y0 + 6, base_x1 - 10, base_y0 + 6], fill=(110, 115, 125, 200), width=1)
    
    # Front Thumb Scoop
    scoop_w = 160
    scoop_h = 8
    scoop_x0 = (W - scoop_w) // 2
    b_draw.rounded_rectangle([scoop_x0, base_y0 + 6, scoop_x0 + scoop_w, base_y0 + 6 + scoop_h], radius=4, fill=(20, 21, 24, 255))
    b_draw.line([scoop_x0 + 4, base_y0 + 6 + scoop_h, scoop_x0 + scoop_w - 4, base_y0 + 6 + scoop_h], fill=(80, 85, 95, 150), width=1)
    
    canvas = Image.alpha_composite(canvas, base_layer)
    
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-hero.webp", "WEBP", quality=95, method=6)
    final.save("public/images/case-studies/hoopwrld-featured-flagship.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-hero.webp and hoopwrld-featured-flagship.webp generated at 2400x1350")

def build_daily_pulse_phone():
    """
    Build high-resolution Daily Pulse smartphone mockup (1600 x 1200)
    Realistic Titanium Smartphone on clean studio background displaying the authentic Daily Pulse dashboard.
    """
    W, H = 1600, 1200
    canvas = Image.new("RGBA", (W, H), (247, 248, 250, 255))
    c_draw = ImageDraw.Draw(canvas)
    
    # Studio lighting radial gradient
    for r in range(800, 0, -25):
        alpha = int(45 * (1.0 - r / 800))
        c_draw.ellipse(
            [W//2 - r, H//2 - int(r*0.75), W//2 + r, H//2 + int(r*0.75)],
            fill=(255, 255, 255, alpha)
        )
    
    # Phone dimensions (fits cleanly in 1200h with breathing room)
    phone_h = 1040
    phone_w = 504
    phone_x0 = (W - phone_w) // 2
    phone_y0 = (H - phone_h) // 2 - 10
    phone_x1 = phone_x0 + phone_w
    phone_y1 = phone_y0 + phone_h
    
    # Soft floor shadows
    canvas = draw_soft_shadow(canvas, [phone_x0 - 15, phone_y1 - 40, phone_x1 + 15, phone_y1 + 45], radius=35, color=(16, 24, 40, 70), blur=35, offset=(0, 30))
    canvas = draw_soft_shadow(canvas, [phone_x0 + 10, phone_y1 - 25, phone_x1 - 10, phone_y1 + 25], radius=25, color=(16, 24, 40, 90), blur=20, offset=(0, 15))
    canvas = draw_soft_shadow(canvas, [phone_x0 + 35, phone_y1 - 10, phone_x1 - 35, phone_y1 + 10], radius=15, color=(16, 24, 40, 130), blur=10, offset=(0, 6))
    
    phone_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(phone_layer)
    
    corner_r = 54
    # Titanium Outer Chassis
    p_draw.rounded_rectangle([phone_x0, phone_y0, phone_x1 - 1, phone_y1 - 1], radius=corner_r, fill=(58, 62, 68, 255))
    p_draw.rounded_rectangle([phone_x0 + 2, phone_y0 + 2, phone_x1 - 3, phone_y1 - 3], radius=corner_r - 2, fill=(88, 92, 100, 255))
    p_draw.rounded_rectangle([phone_x0 + 3, phone_y0 + 3, phone_x1 - 4, phone_y1 - 4], radius=corner_r - 3, fill=(42, 45, 50, 255))
    
    # Antenna bands
    for ay in [phone_y0 + 130, phone_y1 - 130]:
        p_draw.line([phone_x0, ay, phone_x0 + 4, ay], fill=(30, 32, 36, 255), width=2)
        p_draw.line([phone_x1 - 4, ay, phone_x1, ay], fill=(30, 32, 36, 255), width=2)
    
    # Screen Bezel
    bezel_padding = 10
    screen_x0 = phone_x0 + bezel_padding
    screen_y0 = phone_y0 + bezel_padding
    screen_x1 = phone_x1 - bezel_padding
    screen_y1 = phone_y1 - bezel_padding
    screen_w = screen_x1 - screen_x0
    screen_h = screen_y1 - screen_y0
    screen_r = corner_r - 8
    
    p_draw.rounded_rectangle(
        [screen_x0, screen_y0, screen_x1, screen_y1],
        radius=screen_r,
        fill=(10, 11, 13, 255)
    )
    
    # Load authentic phone Daily Pulse screenshot
    raw_phone = Image.open("public/images/case-studies/hoopwrld/phone_5x_clean.png")
    phone_dash_resized = raw_phone.resize((screen_w, screen_h), Image.Resampling.LANCZOS).convert("RGBA")
    
    # Subtle glass glare
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
    pill_w = 110
    pill_h = 28
    pill_x0 = (W - pill_w) // 2
    pill_y0 = screen_y0 + 12
    p_draw.rounded_rectangle([pill_x0, pill_y0, pill_x0 + pill_w, pill_y0 + pill_h], radius=14, fill=(0, 0, 0, 255))
    cam_x = pill_x0 + pill_w - 22
    cam_y = pill_y0 + pill_h // 2
    p_draw.ellipse([cam_x - 5, cam_y - 5, cam_x + 5, cam_y + 5], fill=(15, 18, 24, 255))
    p_draw.ellipse([cam_x - 2, cam_y - 2, cam_x + 2, cam_y + 2], fill=(20, 50, 70, 255))
    p_draw.ellipse([cam_x - 1, cam_y - 1, cam_x, cam_y], fill=(120, 200, 240, 180))
    
    # Speaker notch
    p_draw.rounded_rectangle([W//2 - 25, screen_y0 + 2, W//2 + 25, screen_y0 + 5], radius=2, fill=(25, 26, 28, 255))
    
    canvas = Image.alpha_composite(canvas, phone_layer)
    
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-daily-pulse.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-daily-pulse.webp generated at 1600x1200")

def build_before_mockup():
    """
    Build high-resolution Before dashboard in dark macOS desktop frame (1920 x 1080)
    """
    W, H = 1920, 1080
    canvas = Image.new("RGBA", (W, H), (7, 9, 13, 255))
    
    win_w = 1760
    win_h = 980
    win_x0 = (W - win_w) // 2
    win_y0 = (H - win_h) // 2
    win_x1 = win_x0 + win_w
    win_y1 = win_y0 + win_h
    
    canvas = draw_soft_shadow(canvas, [win_x0, win_y0, win_x1, win_y1], radius=20, color=(0, 0, 0, 240), blur=40, offset=(0, 20))
    
    win_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    w_draw = ImageDraw.Draw(win_layer)
    
    w_draw.rounded_rectangle([win_x0, win_y0, win_x1 - 1, win_y1 - 1], radius=16, fill=(20, 23, 28, 255))
    w_draw.rounded_rectangle([win_x0 + 1, win_y0 + 1, win_x1 - 2, win_y1 - 2], radius=15, fill=(15, 17, 21, 255))
    
    titlebar_h = 44
    w_draw.rounded_rectangle([win_x0 + 1, win_y0 + 1, win_x1 - 2, win_y0 + titlebar_h], radius=15, fill=(24, 27, 33, 255))
    w_draw.rectangle([win_x0 + 1, win_y0 + titlebar_h - 10, win_x1 - 2, win_y0 + titlebar_h], fill=(24, 27, 33, 255))
    w_draw.line([win_x0 + 1, win_y0 + titlebar_h, win_x1 - 2, win_y0 + titlebar_h], fill=(40, 44, 52, 255), width=1)
    
    dots = [
        (win_x0 + 24, (239, 68, 68)),
        (win_x0 + 44, (245, 158, 11)),
        (win_x0 + 64, (16, 185, 129))
    ]
    for dx, color in dots:
        w_draw.ellipse([dx - 6, win_y0 + titlebar_h//2 - 6, dx + 6, win_y0 + titlebar_h//2 + 6], fill=color)
    
    screen_padding = 8
    screen_x0 = win_x0 + screen_padding
    screen_y0 = win_y0 + titlebar_h + screen_padding
    screen_x1 = win_x1 - screen_padding
    screen_y1 = win_y1 - screen_padding
    screen_w = screen_x1 - screen_x0
    screen_h = screen_y1 - screen_y0
    
    raw_before = Image.open("public/images/case-studies/hoopwrld/before_report_5x_clean.png")
    before_resized = raw_before.resize((screen_w, screen_h), Image.Resampling.LANCZOS).convert("RGBA")
    
    s_mask = create_rounded_rect_mask((screen_w, screen_h), radius=10)
    win_layer.paste(before_resized, (screen_x0, screen_y0), s_mask)
    
    canvas = Image.alpha_composite(canvas, win_layer)
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-before.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-before.webp generated at 1920x1080")

def build_gameplay_mockup():
    """
    Build high-resolution Gameplay Analytics desktop presentation (1920 x 1080)
    """
    W, H = 1920, 1080
    canvas = Image.new("RGBA", (W, H), (10, 13, 18, 255))
    
    win_w = 1760
    win_h = 980
    win_x0 = (W - win_w) // 2
    win_y0 = (H - win_h) // 2
    win_x1 = win_x0 + win_w
    win_y1 = win_y0 + win_h
    
    canvas = draw_soft_shadow(canvas, [win_x0, win_y0, win_x1, win_y1], radius=20, color=(0, 0, 0, 240), blur=40, offset=(0, 20))
    
    win_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    w_draw = ImageDraw.Draw(win_layer)
    
    w_draw.rounded_rectangle([win_x0, win_y0, win_x1 - 1, win_y1 - 1], radius=16, fill=(20, 23, 28, 255))
    w_draw.rounded_rectangle([win_x0 + 1, win_y0 + 1, win_x1 - 2, win_y1 - 2], radius=15, fill=(15, 17, 21, 255))
    
    titlebar_h = 44
    w_draw.rounded_rectangle([win_x0 + 1, win_y0 + 1, win_x1 - 2, win_y0 + titlebar_h], radius=15, fill=(24, 27, 33, 255))
    w_draw.rectangle([win_x0 + 1, win_y0 + titlebar_h - 10, win_x1 - 2, win_y0 + titlebar_h], fill=(24, 27, 33, 255))
    w_draw.line([win_x0 + 1, win_y0 + titlebar_h, win_x1 - 2, win_y0 + titlebar_h], fill=(40, 44, 52, 255), width=1)
    
    dots = [
        (win_x0 + 24, (239, 68, 68)),
        (win_x0 + 44, (245, 158, 11)),
        (win_x0 + 64, (16, 185, 129))
    ]
    for dx, color in dots:
        w_draw.ellipse([dx - 6, win_y0 + titlebar_h//2 - 6, dx + 6, win_y0 + titlebar_h//2 + 6], fill=color)
    
    screen_padding = 8
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
    
    s_mask = create_rounded_rect_mask((screen_w, screen_h), radius=10)
    win_layer.paste(g_resized, (screen_x0, screen_y0), s_mask)
    
    canvas = Image.alpha_composite(canvas, win_layer)
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-gameplay.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-gameplay.webp generated at 1920x1080")

def build_comparison():
    """
    Build side-by-side Before vs After visual comparison (2400 x 1200)
    """
    W, H = 2400, 1200
    canvas = Image.new("RGBA", (W, H), (6, 8, 11, 255))
    
    card_w = 1130
    card_h = 1060
    card_y0 = (H - card_h) // 2
    card_y1 = card_y0 + card_h
    
    left_x0 = 50
    left_x1 = left_x0 + card_w
    canvas = draw_soft_shadow(canvas, [left_x0, card_y0, left_x1, card_y1], radius=20, color=(0, 0, 0, 220), blur=35, offset=(0, 18))
    
    right_x0 = W - card_w - 50
    right_x1 = right_x0 + card_w
    canvas = draw_soft_shadow(canvas, [right_x0, card_y0, right_x1, card_y1], radius=20, color=(0, 0, 0, 220), blur=35, offset=(0, 18))
    
    # Left Window Layer
    left_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    l_draw = ImageDraw.Draw(left_layer)
    l_draw.rounded_rectangle([left_x0, card_y0, left_x1 - 1, card_y1 - 1], radius=18, fill=(18, 20, 25, 255))
    l_draw.rounded_rectangle([left_x0 + 1, card_y0 + 1, left_x1 - 2, card_y1 - 2], radius=17, fill=(14, 16, 20, 255))
    
    hbar_h = 56
    l_draw.rounded_rectangle([left_x0 + 1, card_y0 + 1, left_x1 - 2, card_y0 + hbar_h], radius=17, fill=(24, 26, 32, 255))
    l_draw.rectangle([left_x0 + 1, card_y0 + hbar_h - 10, left_x1 - 2, card_y0 + hbar_h], fill=(24, 26, 32, 255))
    l_draw.line([left_x0 + 1, card_y0 + hbar_h, left_x1 - 2, card_y0 + hbar_h], fill=(40, 44, 52, 255), width=1)
    
    # Red badge
    l_draw.rounded_rectangle([left_x0 + 20, card_y0 + 14, left_x0 + 340, card_y0 + 42], radius=6, fill=(239, 68, 68, 30))
    l_draw.rounded_rectangle([left_x0 + 20, card_y0 + 14, left_x0 + 340, card_y0 + 42], radius=6, outline=(239, 68, 68, 120), width=1)
    
    l_screen_p = 10
    l_screen_x0 = left_x0 + l_screen_p
    l_screen_y0 = card_y0 + hbar_h + l_screen_p
    l_screen_w = card_w - l_screen_p * 2
    l_screen_h = card_h - hbar_h - l_screen_p * 2
    
    raw_before = Image.open("public/images/case-studies/hoopwrld/before_report_5x_clean.png")
    before_fit = raw_before.resize((l_screen_w, l_screen_h), Image.Resampling.LANCZOS).convert("RGBA")
    l_mask = create_rounded_rect_mask((l_screen_w, l_screen_h), radius=10)
    left_layer.paste(before_fit, (l_screen_x0, l_screen_y0), l_mask)
    
    canvas = Image.alpha_composite(canvas, left_layer)
    
    # Right Window Layer
    right_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    r_draw = ImageDraw.Draw(right_layer)
    r_draw.rounded_rectangle([right_x0, card_y0, right_x1 - 1, card_y1 - 1], radius=18, fill=(18, 20, 25, 255))
    r_draw.rounded_rectangle([right_x0 + 1, card_y0 + 1, right_x1 - 2, card_y1 - 2], radius=17, fill=(14, 16, 20, 255))
    
    r_draw.rounded_rectangle([right_x0 + 1, card_y0 + 1, right_x1 - 2, card_y0 + hbar_h], radius=17, fill=(24, 26, 32, 255))
    r_draw.rectangle([right_x0 + 1, card_y0 + hbar_h - 10, right_x1 - 2, card_y0 + hbar_h], fill=(24, 26, 32, 255))
    r_draw.line([right_x0 + 1, card_y0 + hbar_h, right_x1 - 2, card_y0 + hbar_h], fill=(0, 188, 212, 100), width=1)
    
    # Cyan badge
    r_draw.rounded_rectangle([right_x0 + 20, card_y0 + 14, right_x0 + 360, card_y0 + 42], radius=6, fill=(0, 188, 212, 30))
    r_draw.rounded_rectangle([right_x0 + 20, card_y0 + 14, right_x0 + 360, card_y0 + 42], radius=6, outline=(0, 188, 212, 120), width=1)
    
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
    r_mask = create_rounded_rect_mask((r_screen_w, r_screen_h), radius=10)
    right_layer.paste(gameplay_fit, (r_screen_x0, r_screen_y0), r_mask)
    
    canvas = Image.alpha_composite(canvas, right_layer)
    
    final = canvas.convert("RGB")
    final.save("public/images/case-studies/hoopwrld-comparison.webp", "WEBP", quality=95, method=6)
    print("SUCCESS: hoopwrld-comparison.webp generated at 2400x1200")

if __name__ == "__main__":
    print("Starting mockup generation with proper alpha compositing...")
    build_hero_laptop()
    build_daily_pulse_phone()
    build_before_mockup()
    build_gameplay_mockup()
    build_comparison()
    print("All mockups generated successfully!")
