// ─── Shared motion types ──────────────────────────────────────────────────────

export type MotionStyle = "smooth" | "normal" | "cinematic";

/** Controls which finite animations play during a video clip */
export type AnimMode = "entry" | "exit" | "entry+exit" | "none" | "static";

/** Animation vector — GSAP tweens this object, Three.js reads it */
export interface AV {
  rx: number;
  ry: number;
  tx: number;
  ty: number;
  sc: number;
}

/** A cinematic script function — returns a repeating GSAP timeline */
export type ScriptFn = (
  av: AV,
  intensity: number,   // 0–1
  durMs: number,
  style: MotionStyle,
  onUpdate: () => void,
) => gsap.core.Timeline;

/** What each template declares about itself */
export interface MotionTemplate {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  icon: string;
  tags: string[];
  defaultDuration: number;   // ms
  /** If false, shows plain video with no phone overlay */
  showPhone: boolean;
  /** The cinematic script — only defined on templates that have one */
  script?: ScriptFn;
  /** Template-specific editor panel component (lazy-imported by the menu) */
  EditorPanel?: React.ComponentType<EditorPanelProps>;
}

/** Props every EditorPanel receives */
export interface EditorPanelProps {
  template: MotionTemplate;
}