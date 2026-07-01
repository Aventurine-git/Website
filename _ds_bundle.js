/* @ds-bundle: {"format":3,"namespace":"AventurineDreamDesignSystem_bf4c8b","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SocialLink","sourcePath":"components/core/SocialLink.jsx"}],"sourceHashes":{"components/core/Button.jsx":"a83ab2dce55b","components/core/Card.jsx":"398b2866b4b8","components/core/Chip.jsx":"92e15584f23f","components/core/Eyebrow.jsx":"4a42b77857b9","components/core/SectionHeading.jsx":"49c04e935872","components/core/SocialLink.jsx":"beb44b88c6cf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AventurineDreamDesignSystem_bf4c8b = window.AventurineDreamDesignSystem_bf4c8b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const baseStyle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 'var(--text-sm)',
  borderRadius: 'var(--radius-pill)',
  padding: '12px 26px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  border: '1.5px solid transparent',
  transition: 'transform 180ms cubic-bezier(0.34,1.2,0.64,1), box-shadow 180ms cubic-bezier(0.4,0,0.2,1)'
};
const variantStyles = {
  primary: {
    background: 'var(--av-green)',
    color: '#1e2e20'
  },
  secondary: {
    background: 'linear-gradient(var(--surface-card), var(--surface-card)) padding-box, var(--gradient-opal) border-box',
    color: 'var(--text-primary)',
    boxShadow: 'var(--shadow-sm)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1.5px solid var(--border-soft)'
  }
};
const sizeStyles = {
  sm: {
    padding: '8px 18px',
    fontSize: 'var(--text-xs)'
  },
  md: {},
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--text-md)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick
}) {
  const style = {
    ...baseStyle,
    ...(variantStyles[variant] || variantStyles.primary),
    ...(sizeStyles[size] || {}),
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto'
  };
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    onClick: onClick,
    disabled: disabled
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const elevations = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)'
};
function Card({
  children,
  padding = 'var(--space-6)',
  elevation = 'md'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: elevations[elevation] || elevations.md,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function Chip({
  children,
  dotColor = 'var(--av-green)'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 20px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: 'linear-gradient(var(--surface-card), var(--surface-card)) padding-box, var(--gradient-opal) border-box',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: dotColor,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  color = 'var(--av-magenta-deep)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      color
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  children,
  level = 2,
  italic = false
}) {
  const Tag = 'h' + level;
  return React.createElement(Tag, {
    style: {
      fontFamily: italic ? 'var(--font-serif)' : 'var(--font-display)',
      fontStyle: italic ? 'italic' : 'normal',
      fontWeight: italic ? 400 : 700,
      color: 'var(--text-primary)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--leading-snug)',
      margin: 0
    }
  }, children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SocialLink.jsx
try { (() => {
const {
  useState
} = React;
function SocialLink({
  href = '#',
  label,
  icon,
  target = '_blank'
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: target,
    rel: "noopener noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 20px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      background: 'linear-gradient(var(--surface-card), var(--surface-card)) padding-box, var(--gradient-opal) border-box',
      border: '1.5px solid transparent',
      transform: hover ? 'translateY(-2px)' : 'none',
      boxShadow: hover ? '0 6px 30px rgba(159,150,184,0.4)' : 'none',
      transition: 'transform 180ms cubic-bezier(0.34,1.2,0.64,1), box-shadow 180ms cubic-bezier(0.4,0,0.2,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: 'inline-flex',
      flexShrink: 0
    }
  }, icon), label);
}
Object.assign(__ds_scope, { SocialLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SocialLink.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SocialLink = __ds_scope.SocialLink;

})();
