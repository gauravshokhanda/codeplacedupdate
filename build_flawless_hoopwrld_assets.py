import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageOps, ImageEnhance

# File paths of 5x high-res extractions
GAMEPLAY_5X = 'public/images/case-studies/hoopwrld/gameplay_dashboard_5x_clean.png'
BEFORE_5X = 'public/images/case-studies/hoopwrld/before_report_5x_clean.png'
PHONE_5X = 'public/images/case-studies/hoopwrld/phone_5x_clean.png'
ANNOTATED_5X = 'public/images/case-studies/hoopwrld/daily_pulse_annotated_5x.png'

# Load images
gameplay_img = Image.open(GAMEPLAY_5X).convert('RGBA')
before_img = Image.open(BEFORE_5X).convert('RGBA')
phone_img = Image.open(PHONE_5X).convert('RGBA')
annotated_img = Image.open(ANNOTATED_5X).convert('RGBA')

print(f"Loaded high-res sources: Gameplay={gameplay_img.size}, Before={before_img.size}, Phone={phone_img.size}")

# =============================================================================
# LAPTOP BUILDER (Photorealistic Aluminum Space-Gray Laptop)
# =============================================================================
def build_photorealistic_laptop(screen_content, screen_w, screen_h, bezel=22, space_gray=True):
    total_w = screen_w + bezel * 2
    total_h = screen_h + bezel * 2 + 32
    
    # Outer canvas with padding for shadow
    pad_x = 100
    pad_y = 60
    cw = total_w + pad_x * 2
    ch = total_h + pad_y * 2
    
    canvas = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    
    ox = pad_x
    oy = pad_y
    
    # 1. Base / Keyboard Deck grounding shadow
    base_w = total_w + 140
    base_h = 24
    bx = ox + (total_w - base_w) // 2
    by = oy + screen_h + bezel * 2
    
    shadow_layer = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow_layer)
    # Deep contact shadow directly under aluminum base
    s_draw.ellipse([bx - 40, by + 12, bx + base_w + 40, by + 50], fill=(0, 0, 0, 240))
    # Broader soft shadow
    s_draw.ellipse([bx - 80, by + 8, bx + base_w + 80, by + 75], fill=(0, 0, 0, 180))
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(24))
    canvas = Image.alpha_composite(canvas, shadow_layer)
    
    # 2. Laptop Lid Outer Aluminum Frame
    lid_rect = [ox, oy, ox + total_w, oy + screen_h + bezel * 2]
    lid_fill = (20, 22, 26, 255) if space_gray else (220, 224, 230, 255)
    lid_outline = (58, 62, 72, 255) if space_gray else (185, 190, 200, 255)
    
    draw.rounded_rectangle(lid_rect, radius=24, fill=lid_fill, outline=lid_outline, width=2)
    
    # Subtle metallic chamfer / bevel highlight
    draw.rounded_rectangle([ox + 1, oy + 1, ox + total_w - 1, oy + screen_h + bezel * 2 - 1], radius=23, outline=(80, 85, 100, 120), width=1)
    
    # 3. Paste Authentic Screen Content
    sx = ox + bezel
    sy = oy + bezel
    
    # High-quality resize of dashboard screen
    screen_resized = screen_content.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
    canvas.paste(screen_resized, (sx, sy))
    
    # Screen inner border (bezel bevel)
    draw.rectangle([sx - 1, sy - 1, sx + screen_w + 1, sy + screen_h + 1], outline=(30, 32, 38, 255), width=1)
    
    # Camera notch / lens at top bezel
    cam_x = ox + total_w // 2
    cam_y = oy + bezel // 2
    draw.ellipse([cam_x - 5, cam_y - 5, cam_x + 5, cam_y + 5], fill=(12, 14, 18, 255))
    draw.ellipse([cam_x - 2, cam_y - 2, cam_x + 2, cam_y + 2], fill=(6, 8, 12, 255))
    # Green indicator micro-dot (barely visible)
    draw.ellipse([cam_x + 12, cam_y - 1, cam_x + 14, cam_y + 1], fill=(40, 200, 100, 120))
    
    # 4. Aluminum Base Deck
    base_fill = (34, 37, 44, 255) if space_gray else (228, 232, 238, 255)
    base_outline = (70, 75, 88, 255) if space_gray else (175, 180, 190, 255)
    draw.rounded_rectangle([bx, by, bx + base_w, by + base_h], radius=10, fill=base_fill, outline=base_outline, width=1)
    # Metallic top edge sheen on base
    draw.line([(bx + 12, by + 1), (bx + base_w - 12, by + 1)], fill=(90, 96, 112, 180), width=1)
    # Thumb opening groove in center
    groove_w = 110
    draw.rounded_rectangle([ox + total_w//2 - groove_w//2, by, ox + total_w//2 + groove_w//2, by + 6], radius=3, fill=(16, 18, 22, 255))
    
    return canvas

# =============================================================================
# 1. BUILD HERO VISUAL (2400 x 1350) — Sharp, Prominent Laptop Focal Point
# =============================================================================
def build_hero():
    W, H = 2400, 1350
    canvas = Image.new('RGBA', (W, H), (0, 0, 0, 255))
    
    # Clean black studio floor with very subtle ambient lighting
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    # Soft deep lighting behind laptop
    g_draw.ellipse([W*0.2, H*0.1, W*0.8, H*0.9], fill=(0, 188, 212, 22))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    canvas = Image.alpha_composite(canvas, glow)
    
    # Top 16:10 crop of gameplay dashboard
    dw, dh = gameplay_img.size
    crop_h = int(dw * 10 / 16)
    screen_crop = gameplay_img.crop((0, 0, dw, min(dh, crop_h)))
    
    # Large laptop: screen width 1920, height 1200 (16:10), occupies ~84% of canvas!
    screen_w = 1920
    screen_h = 1200
    laptop = build_photorealistic_laptop(screen_crop, screen_w, screen_h, bezel=24, space_gray=True)
    
    # Center laptop on canvas
    lx = (W - laptop.size[0]) // 2
    ly = (H - laptop.size[1]) // 2 + 10
    
    canvas.paste(laptop, (lx, ly), mask=laptop)
    
    # Guarantee pure black on all 4 canvas edges
    edge_mask = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    e_draw = ImageDraw.Draw(edge_mask)
    # Left & Right edge fade
    fade_px = 60
    for x in range(fade_px):
        alpha = int(255 * (1.0 - x / fade_px))
        e_draw.line([(x, 0), (x, H)], fill=(0, 0, 0, alpha))
        e_draw.line([(W - 1 - x, 0), (W - 1 - x, H)], fill=(0, 0, 0, alpha))
    for y in range(40):
        alpha = int(255 * (1.0 - y / 40.0))
        e_draw.line([(0, y), (W, y)], fill=(0, 0, 0, alpha))
        e_draw.line([(0, H - 1 - y), (W, H - 1 - y)], fill=(0, 0, 0, alpha))
        
    canvas = Image.alpha_composite(canvas, edge_mask)
    
    out_path = 'public/images/case-studies/hoopwrld-hero.webp'
    canvas.convert('RGB').save(out_path, 'WEBP', quality=96)
    print(f"Generated {out_path} ({W}x{H}) - Large Sharp Laptop Focal Point")

# =============================================================================
# 2. BUILD DAILY PULSE SMARTPHONE (1600 x 1200) — Real Dashboard Visible
# =============================================================================
def build_daily_pulse():
    W, H = 1600, 1200
    # Clean light studio background
    canvas = Image.new('RGBA', (W, H), (246, 247, 249, 255))
    
    # Subtle studio gradient
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([W*0.25, H*0.25, W*0.75, H*0.85], fill=(0, 188, 212, 18))
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    canvas = Image.alpha_composite(canvas, glow)
    
    # Phone size in studio: Height 960px, width proportional
    pw = 440
    ph = int(pw * phone_img.size[1] / phone_img.size[0])
    
    # Clean phone frame
    phone_resized = phone_img.resize((pw, ph), Image.Resampling.LANCZOS)
    
    # Phone container with sleek dark titanium bezel
    pad = 8
    fw = pw + pad * 2
    fh = ph + pad * 2
    
    frame = Image.new('RGBA', (fw, fh), (0, 0, 0, 0))
    f_draw = ImageDraw.Draw(frame)
    # Metallic edge
    f_draw.rounded_rectangle([0, 0, fw, fh], radius=44, fill=(18, 20, 24, 255), outline=(0, 188, 212, 100), width=2)
    # Inner bezel
    f_draw.rounded_rectangle([2, 2, fw - 2, fh - 2], radius=42, outline=(60, 65, 75, 255), width=1)
    
    # Rounded corner mask for screen
    mask = Image.new('L', (pw, ph), 0)
    m_draw = ImageDraw.Draw(mask)
    m_draw.rounded_rectangle([0, 0, pw, ph], radius=38, fill=255)
    
    frame.paste(phone_resized, (pad, pad), mask=mask)
    
    # Dynamic island notch
    pill_w = 90
    pill_h = 22
    pill_x = (fw - pill_w) // 2
    pill_y = pad + 10
    f_draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=11, fill=(10, 12, 14, 255))
    
    # Center on canvas
    px = (W - fw) // 2
    py = (H - fh) // 2
    
    # Soft realistic shadow on light surface
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.ellipse([px - 40, py + fh - 35, px + fw + 40, py + fh + 60], fill=(20, 25, 35, 75))
    s_draw.rounded_rectangle([px + 15, py + 25, px + fw + 20, py + fh + 25], radius=46, fill=(0, 0, 0, 45))
    shadow = shadow.filter(ImageFilter.GaussianBlur(32))
    canvas = Image.alpha_composite(canvas, shadow)
    
    canvas.paste(frame, (px, py), mask=frame)
    
    out_path = 'public/images/case-studies/hoopwrld-daily-pulse.webp'
    canvas.convert('RGB').save(out_path, 'WEBP', quality=96)
    print(f"Generated {out_path} ({W}x{H}) - Real Visible Daily Pulse Dashboard")

# =============================================================================
# 3. BUILD GAMEPLAY ANALYTICS LAPTOP (1920 x 1080) — Light Studio Environment
# =============================================================================
def build_gameplay():
    W, H = 1920, 1080
    canvas = Image.new('RGBA', (W, H), (248, 249, 251, 255))
    
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([W*0.2, H*0.2, W*0.8, H*0.8], fill=(0, 188, 212, 15))
    glow = glow.filter(ImageFilter.GaussianBlur(100))
    canvas = Image.alpha_composite(canvas, glow)
    
    dw, dh = gameplay_img.size
    crop_h = int(dw * 10 / 16)
    screen_crop = gameplay_img.crop((0, 0, dw, min(dh, crop_h)))
    
    screen_w = 1480
    screen_h = 925
    laptop = build_photorealistic_laptop(screen_crop, screen_w, screen_h, bezel=20, space_gray=True)
    
    lx = (W - laptop.size[0]) // 2
    ly = (H - laptop.size[1]) // 2 + 5
    
    # Ground shadow on light studio floor
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.ellipse([lx + 60, ly + screen_h + 30, lx + laptop.size[0] - 60, ly + screen_h + 100], fill=(20, 25, 35, 80))
    shadow = shadow.filter(ImageFilter.GaussianBlur(35))
    canvas = Image.alpha_composite(canvas, shadow)
    
    canvas.paste(laptop, (lx, ly), mask=laptop)
    
    out_path = 'public/images/case-studies/hoopwrld-gameplay.webp'
    canvas.convert('RGB').save(out_path, 'WEBP', quality=96)
    print(f"Generated {out_path} ({W}x{H}) - Gameplay Analytics Laptop")

# =============================================================================
# 4. BUILD BEFORE DASHBOARD (1920 x 1080) — Dark Desktop Frame
# =============================================================================
def build_before():
    W, H = 1920, 1080
    canvas = Image.new('RGBA', (W, H), (7, 9, 12, 255))
    
    # Subtle red ambient indicator
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([W*0.2, H*0.15, W*0.8, H*0.85], fill=(239, 68, 68, 16))
    glow = glow.filter(ImageFilter.GaussianBlur(100))
    canvas = Image.alpha_composite(canvas, glow)
    
    mw = 1600
    mh = 900
    mx = (W - mw) // 2
    my = (H - mh) // 2
    
    # Shadow
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle([mx - 20, my - 15, mx + mw + 20, my + mh + 40], radius=24, fill=(0, 0, 0, 230))
    shadow = shadow.filter(ImageFilter.GaussianBlur(40))
    canvas = Image.alpha_composite(canvas, shadow)
    
    # Window Frame
    win = Image.new('RGBA', (mw, mh), (16, 18, 22, 255))
    w_draw = ImageDraw.Draw(win)
    w_draw.rounded_rectangle([0, 0, mw, mh], radius=16, fill=(16, 18, 22, 255), outline=(45, 50, 60, 255), width=2)
    
    # Titlebar
    bar_h = 44
    w_draw.rectangle([0, 0, mw, bar_h], fill=(22, 25, 30, 255))
    w_draw.line([(0, bar_h), (mw, bar_h)], fill=(40, 45, 55, 255), width=1)
    
    # Traffic dots
    w_draw.ellipse([20, 16, 32, 28], fill=(255, 95, 87, 255))
    w_draw.ellipse([40, 16, 52, 28], fill=(254, 188, 46, 255))
    w_draw.ellipse([60, 16, 72, 28], fill=(40, 201, 64, 255))
    
    # Address bar
    w_draw.rounded_rectangle([110, 8, mw - 220, 36], radius=6, fill=(12, 14, 18, 255), outline=(35, 40, 50, 255))
    
    # Content: Before report
    cw = mw - 16
    ch = mh - bar_h - 16
    before_resized = before_img.resize((cw, ch), Image.Resampling.LANCZOS)
    win.paste(before_resized, (8, bar_h + 8))
    
    canvas.paste(win, (mx, my), mask=win)
    
    out_path = 'public/images/case-studies/hoopwrld-before.webp'
    canvas.convert('RGB').save(out_path, 'WEBP', quality=96)
    print(f"Generated {out_path} ({W}x{H}) - Before Dashboard")

# =============================================================================
# 5. BUILD BEFORE VS AFTER COMPARISON (2400 x 1200) — Sharp Side-by-Side
# =============================================================================
def build_comparison():
    W, H = 2400, 1200
    canvas = Image.new('RGBA', (W, H), (6, 8, 11, 255))
    
    # Left red glow (Before), Right cyan glow (After)
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([150, 150, 1150, 1050], fill=(239, 68, 68, 18))
    g_draw.ellipse([1250, 150, 2250, 1050], fill=(0, 188, 212, 26))
    glow = glow.filter(ImageFilter.GaussianBlur(100))
    canvas = Image.alpha_composite(canvas, glow)
    
    card_w = 1060
    card_h = 760
    card_y = (H - card_h) // 2
    
    # --- LEFT: BEFORE ---
    bx = 100
    b_card = Image.new('RGBA', (card_w, card_h), (14, 16, 20, 255))
    b_draw = ImageDraw.Draw(b_card)
    b_draw.rounded_rectangle([0, 0, card_w, card_h], radius=20, fill=(14, 16, 20, 255), outline=(239, 68, 68, 90), width=2)
    b_draw.rectangle([0, 0, card_w, 48], fill=(22, 24, 30, 255))
    b_draw.ellipse([20, 18, 32, 30], fill=(239, 68, 68, 255))
    b_draw.ellipse([42, 18, 54, 30], fill=(80, 85, 95, 255))
    b_draw.ellipse([64, 18, 76, 30], fill=(80, 85, 95, 255))
    
    b_content = before_img.resize((card_w - 20, card_h - 60), Image.Resampling.LANCZOS)
    b_card.paste(b_content, (10, 52))
    canvas.paste(b_card, (bx, card_y), mask=b_card)
    
    # --- RIGHT: AFTER ---
    ax = W - card_w - 100
    a_card = Image.new('RGBA', (card_w, card_h), (14, 16, 20, 255))
    a_draw = ImageDraw.Draw(a_card)
    a_draw.rounded_rectangle([0, 0, card_w, card_h], radius=20, fill=(14, 16, 20, 255), outline=(0, 188, 212, 140), width=2)
    a_draw.rectangle([0, 0, card_w, 48], fill=(18, 24, 32, 255))
    a_draw.ellipse([20, 18, 32, 30], fill=(0, 188, 212, 255))
    a_draw.ellipse([42, 18, 54, 30], fill=(80, 85, 95, 255))
    a_draw.ellipse([64, 18, 76, 30], fill=(80, 85, 95, 255))
    
    # After content: gameplay dashboard crop
    dw, dh = gameplay_img.size
    crop_h = int(dw * 10 / 16)
    screen_crop = gameplay_img.crop((0, 0, dw, min(dh, crop_h)))
    a_content = screen_crop.resize((card_w - 20, card_h - 60), Image.Resampling.LANCZOS)
    a_card.paste(a_content, (10, 52))
    canvas.paste(a_card, (ax, card_y), mask=a_card)
    
    # Central Transformation Indicator
    cx = W // 2
    cy = H // 2
    c_draw = ImageDraw.Draw(canvas)
    c_draw.line([(cx, card_y + 40), (cx, card_y + card_h - 40)], fill=(0, 188, 212, 70), width=2)
    
    cr = 34
    c_draw.ellipse([cx - cr, cy - cr, cx + cr, cy + cr], fill=(12, 16, 22, 255), outline=(0, 188, 212, 220), width=2)
    c_draw.line([(cx - 14, cy), (cx + 8, cy)], fill=(0, 188, 212, 255), width=3)
    c_draw.line([(cx + 2, cy - 8), (cx + 12, cy), (cx + 2, cy + 8)], fill=(0, 188, 212, 255), width=3)
    
    out_path = 'public/images/case-studies/hoopwrld-comparison.webp'
    canvas.convert('RGB').save(out_path, 'WEBP', quality=96)
    print(f"Generated {out_path} ({W}x{H}) - Before vs After Comparison")

print("Executing all builds...")
build_hero()
build_daily_pulse()
build_gameplay()
build_before()
build_comparison()

# Also update featured card asset
import shutil
shutil.copy('public/images/case-studies/hoopwrld-hero.webp', 'public/images/case-studies/hoopwrld-featured-flagship.webp')
print("Updated public/images/case-studies/hoopwrld-featured-flagship.webp")
