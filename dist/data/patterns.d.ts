/**
 * Named Analytical Patterns
 * Each synthesizes established research into a recognizable behavioral dynamic.
 */
export type PatternName = "SCAPEGOAT_PIVOT" | "COHERENCE_TIMEOUT" | "COMFORT_TRAP" | "BURNOUT_CASCADE" | "ALGORITHMIC_ESCALATION" | "MIRROR_CONFLICT" | "IS_COMPETITION" | "INSTITUTIONAL_MOOD" | "VIRTUE_FORTRESS" | "AUTHORITY_TRANSFER" | "NARRATIVE_GRAVITY_WELL" | "IDENTITY_LOCK_IN";
export interface Pattern {
    name: PatternName;
    displayName: string;
    substrate: string;
    whatIsHappening: string;
    recognizeBy: string;
    acuteExample: string;
    chronicExample: string;
    subjectBlindSpot: string;
    analystBlindSpot: string;
    leveragePoints: string;
    systemsInvolved: string[];
}
export declare const PATTERNS: Record<PatternName, Pattern>;
/** Get all pattern names */
export declare const PATTERN_NAMES: PatternName[];
//# sourceMappingURL=patterns.d.ts.map