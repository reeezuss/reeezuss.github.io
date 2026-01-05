# Reeezuss Thoughts

A minimal blog built with pure HTML, CSS, and JavaScript. Inspired by the clean design of [ludwigabap.com](https://ludwigabap.com/).

## Overview

This blog features:
- **Three color themes**: Gruvbox (default), Light, and Dark
- **Responsive design**: Mobile-first approach
- **Typography-focused**: Berkeley Mono for headings/code, Merriweather for body text
- **Content sections**: Writings, Bookmarks, Videos, Papers, Resources
- **RSS feed**: Subscribe to new posts
- **No frameworks**: Pure HTML/CSS/JS for maximum performance

## Structure

```
/
├── index.html          # Homepage with content overview
├── writings.html       # All blog posts
├── bookmarks.html      # Curated external links
├── videos.html         # Educational video bookmarks
├── papers.html         # Research paper bookmarks
├── resources.html      # Useful tools and resources
├── now.html           # Current activities ("now" page)
├── about.html         # About the author
├── about-site.html    # Technical details about the site
├── rss.xml            # RSS feed for blog posts
├── css/
│   └── combined.css   # All styles and themes
├── js/
│   └── theme.js       # Theme switching and font loading
├── posts/             # Individual blog post pages
├── assets/            # Images and other assets
└── fonts/             # Custom fonts
```

## Deployment

This blog is deployed on GitHub Pages at `https://reeezuss.github.io/`.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/reeezuss/reeezuss.github.io.git
   cd reeezuss.github.io
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. Visit `http://localhost:8000` to view the site.

### Adding Content

#### Blog Posts
1. Create a new HTML file in the `posts/` directory
2. Use the structure from `posts/coming-soon.html` as a template
3. Update `writings.html` to include the new post
4. Update `index.html` if it should appear in "Recent Writings"
5. Update `rss.xml` with the new post

#### Bookmarks/Videos/Papers
1. Update the respective HTML page (bookmarks.html, videos.html, papers.html)
2. Use the card structure from existing examples
3. Update `index.html` if it should appear in recent sections

#### Theme Customization
Edit `css/combined.css` to modify colors, fonts, or layout. The CSS uses custom properties for easy theming.

#### Adding Social Links
Update the footer in all HTML files to include your social links.

## Customization

### Colors
Themes are defined using CSS custom properties in `css/combined.css`. Modify the `:root`, `[data-theme="light"]`, and `[data-theme="dark"]` selectors.

### Fonts
Fonts are loaded from `fonts/` directory. Replace with your preferred fonts if desired.

### Layout
The grid system and responsive breakpoints can be adjusted in `css/combined.css`.

## Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, grid, flexbox
- **JavaScript**: Vanilla ES6+ (theme switching, font loading)
- **Fonts**: Berkeley Mono + Merriweather (self-hosted)
- **Icons**: No icon fonts or frameworks
- **Performance**: Optimized font loading, minimal dependencies
- **Accessibility**: Semantic HTML, keyboard navigation, screen reader friendly

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Built with inspiration from [ludwigabap.com](https://ludwigabap.com/). Feel free to use this as a starting point for your own blog.