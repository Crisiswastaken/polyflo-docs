export interface SiteLink {
  label: string
  href: string
}

export type BrandPresetKey = 'primary' | 'secondary'

export interface BrandPalette {
  background: string
  card?: string
  foreground: string
  muted: string
  mutedForeground?: string
  border: string
  accent: string
  accentForeground: string
  accent2?: string
  accent2Foreground?: string
  input?: string
  sidebar?: string
  ring: string
  sidebarActiveBg: string
  sidebarActiveText: string
}

export interface BrandConfig {
  light: BrandPalette
  dark: BrandPalette
}

export interface OgImageConfig {
  /** Background gradient start color (hex). Defaults to dark background from brand. */
  backgroundStart?: string
  /** Background gradient end color (hex). Defaults to dark muted from brand. */
  backgroundEnd?: string
  /** Accent color for top bar and decorative orbs (hex). Defaults to dark accent from brand. */
  accent?: string
  /** Title text color (hex). Defaults to dark foreground from brand. */
  titleColor?: string
  /** Description text color (hex). */
  descriptionColor?: string
  /** Group label text color (hex). Defaults to accent. */
  groupColor?: string
  /** Domain text shown in the bottom bar (e.g. "docs.example.com"). Defaults to THALLY_SITE_URL hostname. */
  domain?: string
  /** Logo text displayed in the bottom bar. Defaults to site name. */
  logoText?: string
  /** Google Font family for the title. Defaults to "Inter". */
  fontFamily?: string
  /** Google Font weight for the title. Defaults to "700". */
  fontWeight?: string
}

export interface AnalyticsConfig {
  /** Google Analytics measurement ID (e.g. "G-XXXXXXXXXX"). */
  googleAnalyticsId?: string
  /** Plausible domain (e.g. "docs.example.com"). */
  plausibleDomain?: string
  /** Plausible script URL. Defaults to "https://plausible.io/js/script.js". */
  plausibleScriptUrl?: string
  /** PostHog project API key. */
  posthogKey?: string
  /** PostHog API host. Defaults to "https://us.i.posthog.com". */
  posthogHost?: string
}

export interface DocVersion {
  /** Version label displayed in the switcher (e.g. "v2.0", "Latest"). */
  label: string
  /** URL for this version. Use "/" for the current site, or a full URL for older versions hosted elsewhere. */
  href: string
  /** Whether this is the currently active version. Exactly one should be true. */
  current?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  repoUrl: string
  links: Array<SiteLink>
  brand: BrandConfig
  brandPreset: BrandPresetKey
  brandPresets: Record<BrandPresetKey, BrandConfig>
  /** Configuration for dynamic OG image generation. All fields are optional and fall back to brand colors. */
  ogImage?: OgImageConfig
  /** Analytics provider configuration. Leave undefined to disable analytics. */
  analytics?: AnalyticsConfig
  /** Doc versions for the version switcher. Leave undefined or empty to hide the switcher. */
  versions?: Array<DocVersion>
}

const brandPresets: Record<BrandPresetKey, BrandConfig> = {
  // Copied from the desktop app:
  // Settings (`src/styles/settings.css`) for light, overlay tokens (`src/styles/tokens.css`) for dark.
  primary: {
    light: {
      background: '#F5F4F1',
      card: '#FFFFFF',
      foreground: '#1C1B19',
      muted: '#F0EEE8',
      mutedForeground: '#8B8780',
      border: '#EAE7E1',
      accent: '#2B2A27',
      accentForeground: '#FCFBF9',
      accent2: '#1FA463',
      accent2Foreground: '#FFFFFF',
      input: '#EAE7E1',
      sidebar: '#F5F4F1',
      ring: '#2B2A27',
      sidebarActiveBg: '40 16% 93% / 0.9',
      sidebarActiveText: '#2B2A27',
    },
    dark: {
      background: '#0A0A0A',
      card: '#141414',
      foreground: '#F5F5F5',
      muted: '#141414',
      mutedForeground: '#6E6E6E',
      border: '#1A1A1A',
      accent: '#FFFFFF',
      accentForeground: '#0A0A0A',
      accent2: '#7DFFB3',
      accent2Foreground: '#0A0A0A',
      input: '#1C1C1C',
      sidebar: '#0A0A0A',
      ring: '#FFFFFF',
      sidebarActiveBg: '0 0% 100% / 0.12',
      sidebarActiveText: '#F5F5F5',
    },
  },
  // Alternate preset — violet. Still a first-class, ready-to-use accent.
  secondary: {
    light: {
      background: '#FFFFFF',
      foreground: '#0F172A',
      muted: '#F5F3FF',
      border: '#E4E4F7',
      accent: '#8B5CF6',
      accentForeground: '#F5F3FF',
      ring: '#A855F7',
      sidebarActiveBg: '262 83% 90% / 0.5',
      sidebarActiveText: '#312E81',
    },
    dark: {
      background: '#070B14',
      foreground: '#EDE9FE',
      muted: '#141129',
      border: '#1C1A2C',
      accent: '#C084FC',
      accentForeground: '#0B1220',
      ring: '#C084FC',
      sidebarActiveBg: '262 45% 32% / 0.3',
      sidebarActiveText: '#EDE9FE',
    },
  },
}

const brandPreset: BrandPresetKey = 'primary'

export const siteConfig: SiteConfig = {
  name: 'Polyflo',
  description:
    'Minimal push-to-talk dictation for Windows and macOS. Hold a hotkey, speak, release — text appears wherever your cursor is focused.',
  repoUrl: 'https://github.com/Crisiswastaken/polyflo-docs',
  links: [
    { label: 'Install Polyflo', href: '/quickstart' },
    { label: 'GitHub', href: 'https://github.com/Crisiswastaken/PolyFlo' },
    { label: 'Changelog', href: '/changelog' },
  ],
  ogImage: {
    domain: 'polyflo.thally.app',
    logoText: 'Polyflo',
    fontFamily: 'Sora',
    fontWeight: '600',
    backgroundStart: '#0A0A0A',
    backgroundEnd: '#141414',
    accent: '#FFFFFF',
    titleColor: '#F5F5F5',
    descriptionColor: '#6E6E6E',
  },
  brand: brandPresets[brandPreset],
  brandPreset,
  brandPresets,
}
