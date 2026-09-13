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
  // Matches Polyflo's tray app: near-black surfaces, mint success accent.
  primary: {
    light: {
      background: '#FAFAFA',
      card: '#FAFAFA',
      foreground: '#0A0A0A',
      muted: '#F0F0F0',
      mutedForeground: '#6B6B6B',
      border: '#E5E5E5',
      accent: '#0A0A0A',
      accentForeground: '#FFFFFF',
      accent2: '#0F766E',
      accent2Foreground: '#FFFFFF',
      input: '#E5E5E5',
      sidebar: '#F5F5F5',
      ring: '#0A0A0A',
      sidebarActiveBg: '0 0% 90% / 0.7',
      sidebarActiveText: '#0A0A0A',
    },
    dark: {
      background: '#0A0A0A',
      card: '#141414',
      foreground: '#F5F5F5',
      muted: '#141414',
      mutedForeground: '#8A8A8A',
      border: '#262626',
      accent: '#7DFFB3',
      accentForeground: '#0A0A0A',
      accent2: '#FFFFFF',
      accent2Foreground: '#0A0A0A',
      input: '#1C1C1C',
      sidebar: '#0A0A0A',
      ring: '#7DFFB3',
      sidebarActiveBg: '0 0% 12%',
      sidebarActiveText: '#7DFFB3',
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
  },
  brand: brandPresets[brandPreset],
  brandPreset,
  brandPresets,
}
