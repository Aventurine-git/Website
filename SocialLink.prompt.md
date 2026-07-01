Opal-trimmed pill link with an icon + platform label, lifts softly on hover. Used for the footer social row.

```jsx
<SocialLink href="https://twitch.tv/aventurine" label="Twitch" icon={<img src="https://cdn.simpleicons.org/twitch/241f2b" width="18" height="18" alt="" />} />
```

Icon sourcing: use real brand marks from the Simple Icons CDN (`https://cdn.simpleicons.org/<slug>/<hex-no-#>`) — never hand-draw a platform logo. Slugs used on the landing page: `twitch`, `youtube`, `reddit`, `bluesky`, `tiktok`. Fansly has no entry there, so its glyph is a flagged custom placeholder — swap in the official mark if you get one.

Hover state: lifts 2px and gains a soft periwinkle glow — never a hard color swap. Lay several out in a wrapping flex row with `gap: var(--space-3)`.
