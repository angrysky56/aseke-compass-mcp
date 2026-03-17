/**
 * Panksepp's Seven Primary Emotional Systems
 * Grounded in electrical brain stimulation, lesion studies,
 * and pharmacological challenges across mammalian species.
 */
export type SystemName = "SEEKING" | "RAGE" | "FEAR" | "PANIC_GRIEF" | "CARE" | "PLAY" | "LUST";
export interface PrimarySystem {
    name: SystemName;
    displayName: string;
    neuralBasis: string;
    functionalRole: string;
    behavioralSignature: string;
    ceDemand: string;
    isVulnerability: string;
    chronicEffect: string;
    politicalBridge: string;
    keyDistinctions: string[];
}
export declare const SYSTEMS: Record<SystemName, PrimarySystem>;
/** Get all system names */
export declare const SYSTEM_NAMES: SystemName[];
//# sourceMappingURL=systems.d.ts.map