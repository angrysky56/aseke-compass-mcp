#!/usr/bin/env node
/**
 * ASEKE Compass Engine — MCP Server
 *
 * Behavioral analysis tools grounded in Panksepp's Affective Neuroscience (1998),
 * Duckitt & Sibley's Dual Process Model (2009), and the ASEKE framework (Hall).
 *
 * Provides structured analytical patterns for understanding human behavior
 * and intent through the lens of primary emotional systems, Information
 * Structure capture, and transition dynamics.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { SYSTEMS } from "./data/systems.js";
import { PATTERNS } from "./data/patterns.js";
const server = new McpServer({
    name: "aseke-compass",
    version: "1.0.0",
});
// ═══════════════════════════════════════════════════════════════
// TOOL: get_system_info
// ═══════════════════════════════════════════════════════════════
const SYSTEM_NAMES = [
    "SEEKING", "RAGE", "FEAR", "PANIC_GRIEF", "CARE", "PLAY", "LUST"
];
server.tool("get_system_info", "Get detailed information about a Panksepp primary emotional system including neural basis, behavioral signature, CE demand, IS vulnerability profile, and political bridge.", {
    system: z.enum(SYSTEM_NAMES)
        .describe("Primary emotional system name"),
}, async ({ system }) => {
    const info = SYSTEMS[system];
    if (!info) {
        return { content: [{ type: "text", text: `Unknown system: ${system}` }] };
    }
    return {
        content: [{
                type: "text",
                text: JSON.stringify(info, null, 2),
            }],
    };
});
// ═══════════════════════════════════════════════════════════════
// TOOL: get_pattern_info
// ═══════════════════════════════════════════════════════════════
const PATTERN_NAME_VALUES = [
    "SCAPEGOAT_PIVOT", "COHERENCE_TIMEOUT", "COMFORT_TRAP",
    "BURNOUT_CASCADE", "ALGORITHMIC_ESCALATION", "MIRROR_CONFLICT",
    "IS_COMPETITION", "INSTITUTIONAL_MOOD", "VIRTUE_FORTRESS",
    "AUTHORITY_TRANSFER", "NARRATIVE_GRAVITY_WELL", "IDENTITY_LOCK_IN"
];
server.tool("get_pattern_info", "Get detailed information about a named behavioral pattern including substrate, recognition signals, blind spots, and leverage points.", {
    pattern: z.enum(PATTERN_NAME_VALUES)
        .describe("Pattern name"),
}, async ({ pattern }) => {
    const info = PATTERNS[pattern];
    if (!info) {
        return { content: [{ type: "text", text: `Unknown pattern: ${pattern}` }] };
    }
    return {
        content: [{
                type: "text",
                text: JSON.stringify(info, null, 2),
            }],
    };
});
// ═══════════════════════════════════════════════════════════════
// TOOL: analyze_behavior
// ═══════════════════════════════════════════════════════════════
server.tool("analyze_behavior", "Perform a structured ASEKE analysis of a behavioral pattern, situation, or conflict. Returns a 5-step analysis: system identification, IS capture analysis, trajectory assessment, blind spot identification, and strategy generation. This is the primary analytical tool.", {
    description: z.string()
        .describe("Description of the behavior, situation, or conflict to analyze"),
    context: z.string().optional()
        .describe("Additional context: who is involved, what's at stake, history"),
    timescale: z.enum(["acute", "chronic", "unknown"]).default("unknown")
        .describe("Whether this is a momentary state or sustained pattern"),
}, async ({ description, context, timescale }) => {
    const systemList = Object.values(SYSTEMS).map(s => `${s.name}: ${s.functionalRole.split('.')[0]}.`).join('\n');
    const patternList = Object.values(PATTERNS).map(p => `${p.displayName}: ${p.substrate}`).join('\n');
    const prompt = `## ASEKE Behavioral Analysis

**Situation**: ${description}
${context ? `**Context**: ${context}` : ''}
**Timescale**: ${timescale}

### Available Primary Systems:
${systemList}

### Available Patterns:
${patternList}

### Analytical Framework:
Apply the 5-step ASEKE query framework:

**Step 1 — SYSTEM IDENTIFICATION**: Which primary emotional system(s) are likely driving this behavior? Estimate activation level and CE demand.

**Step 2 — IS CAPTURE ANALYSIS**: What Information Structure has captured the active system(s)? Where did the IS come from? What competing IS exist?

**Step 3 — TRAJECTORY ASSESSMENT**: Where is this heading without intervention? What system transitions are likely?

**Step 4 — BLIND SPOT IDENTIFICATION**: What can the subject not see from inside their active system? What might the analyst be missing? Apply the meta-rule: if this analysis feels complete and satisfying, that satisfaction is SEEKING gratification, not truth.

**Step 5 — STRATEGY GENERATION**: What approaches account for the emotional reality? System-appropriate interventions, IS-aware communication, CE-conscious delivery, trajectory-conscious timing.`;
    return {
        content: [{
                type: "text",
                text: prompt,
            }],
    };
});
// ═══════════════════════════════════════════════════════════════
// TOOL: match_patterns
// ═══════════════════════════════════════════════════════════════
server.tool("match_patterns", "Given observed behavioral signals, return matching patterns from the library with rationale for each match.", {
    signals: z.array(z.string())
        .describe("Observed behavioral signals, e.g. ['sudden certainty about blame', 'relief mixed with anger', 'diffuse anxiety preceding']"),
}, async ({ signals }) => {
    const matches = [];
    const signalText = signals.join(' ').toLowerCase();
    for (const p of Object.values(PATTERNS)) {
        let score = 0;
        const reasons = [];
        const checkTerms = (terms, weight, source) => {
            for (const t of terms) {
                if (signalText.includes(t.toLowerCase())) {
                    score += weight;
                    reasons.push(`${source} matches signal: "${t}"`);
                }
            }
        };
        // Check substrate description
        checkTerms(p.substrate.split(/[\s,]+/), 1, "substrate");
        // Check recognition signals
        checkTerms(p.recognizeBy.split(/[\s,]+/).filter(w => w.length > 4), 2, "recognition");
        // Check systems involved
        checkTerms(p.systemsInvolved, 3, "system");
        if (score > 3) {
            matches.push({
                pattern: p.displayName,
                score,
                rationale: reasons.slice(0, 5).join('; '),
            });
        }
    }
    matches.sort((a, b) => b.score - a.score);
    const top = matches.slice(0, 5);
    if (top.length === 0) {
        return {
            content: [{
                    type: "text",
                    text: "No strong pattern matches found. Consider using analyze_behavior for a full structured analysis.",
                }],
        };
    }
    return {
        content: [{
                type: "text",
                text: JSON.stringify({ matches: top, note: "Use get_pattern_info for full details on any match." }, null, 2),
            }],
    };
});
// ═══════════════════════════════════════════════════════════════
// TOOL: list_all
// ═══════════════════════════════════════════════════════════════
server.tool("list_all", "List all available primary emotional systems and named behavioral patterns in the ASEKE framework.", {}, async () => {
    const systems = Object.values(SYSTEMS).map(s => ({
        name: s.name,
        role: s.functionalRole.split('.')[0],
    }));
    const patterns = Object.values(PATTERNS).map(p => ({
        name: p.name,
        display: p.displayName,
        substrate: p.substrate,
    }));
    return {
        content: [{
                type: "text",
                text: JSON.stringify({ systems, patterns }, null, 2),
            }],
    };
});
// ═══════════════════════════════════════════════════════════════
// TOOL: bridge_to_political
// ═══════════════════════════════════════════════════════════════
const BRIDGE_SYSTEMS = [
    "SEEKING", "RAGE", "FEAR", "PANIC_GRIEF", "CARE", "PLAY", "LUST"
];
server.tool("bridge_to_political", "Given active primary emotional systems, assess probable political orientation tendencies via the Dual Process Model bridge (FEAR to RWA, CARE breadth to SDO, etc). Returns DPM tendencies with caveats about timescale and IS dependence.", {
    activeSystems: z.array(z.enum(BRIDGE_SYSTEMS))
        .describe("Which primary systems are currently active"),
    dominantSystem: z.enum(BRIDGE_SYSTEMS)
        .describe("Which system is dominant"),
    timescale: z.enum(["acute", "chronic"])
        .describe("Whether this is momentary activation or sustained pattern"),
}, async ({ activeSystems, dominantSystem, timescale }) => {
    const bridges = {
        FEAR: {
            rwa: "HIGH — FEAR directly primes dangerous-world beliefs. Chronic FEAR is the primary RWA substrate.",
            sdo: "IS-DEPENDENT — FEAR alone doesn't determine hierarchy acceptance. If IS aims FEAR at out-groups → SDO↑. If IS aims FEAR at hierarchy → SDO↓.",
            caveat: "FEAR→RWA is fast acutely (single threat shifts attitudes temporarily) and slow chronically (sustained exposure reshapes worldview over months)."
        },
        RAGE: {
            rwa: "MODERATE — RAGE implies a world dangerous enough to fight in, but RAGE is approach-oriented (fighting back) not submission-oriented.",
            sdo: "DIRECTION-DEPENDENT — RAGE aimed down hierarchy reinforces dominance (SDO↑). RAGE aimed at elites/hierarchy undermines it (SDO↓). Same system, different IS aim, opposite output.",
            caveat: "RAGE is the most IS-redirectable system. The anger is real; the target is assigned by narrative."
        },
        SEEKING: {
            rwa: "LOW — Active SEEKING implies the world is interesting rather than dangerous.",
            sdo: "NEUTRAL — SEEKING is the IS acquisition gateway. It doesn't predispose toward hierarchy acceptance or rejection; it predispose toward whatever IS captures it.",
            caveat: "SEEKING is the entry point for ALL IS capture. Active SEEKING + available IS = capture. Suppressed SEEKING = no political engagement at all."
        },
        PANIC_GRIEF: {
            rwa: "MODERATE — Separation distress can prime dangerous-world beliefs if the loss is attributed to external threat.",
            sdo: "IS-DEPENDENT — PANIC/GRIEF drives belongingness-seeking. Can produce left solidarity or right tribalism depending on which community is available.",
            caveat: "PANIC/GRIEF is politically agnostic — it will bond to whatever community offers belonging. This is why grief/isolation are prime recruitment windows."
        },
        CARE: {
            rwa: "LOW — CARE activation generally implies a world safe enough to nurture in.",
            sdo: "CIRCLE-DEPENDENT — Broad CARE (universalist) → low SDO. Narrow CARE (in-group only) → high SDO. The system itself doesn't determine politics; the IS determines who falls inside the circle of care.",
            caveat: "CARE breadth is the most direct biological substrate for the SDO axis. Changes almost entirely through chronic relationship exposure, not argument."
        },
        PLAY: {
            rwa: "LOW — PLAY requires a world experienced as safe enough to play in. Active PLAY is functionally incompatible with high RWA.",
            sdo: "LOW — PLAY requires hierarchy flexible enough to test. PLAY is inherently anti-hierarchical as functional state, not ideology.",
            caveat: "PLAY and RAGE/FEAR mutually inhibit each other. PLAY suppression in an environment is a diagnostic signal of FEAR/RAGE dominance."
        },
        LUST: {
            rwa: "CONTEXT-DEPENDENT — LUST + FEAR = purity politics (high RWA). LUST + PLAY = liberation politics (low RWA).",
            sdo: "MINIMAL DIRECT EFFECT — LUST interacts with SDO primarily through its intersection with CARE (pair-bonding) and FEAR (purity).",
            caveat: "Less analytically central but critical for understanding moral panics around sexuality."
        },
    };
    const dominant = bridges[dominantSystem];
    const active = activeSystems.map(s => ({
        system: s,
        ...(bridges[s] || { rwa: "Unknown", sdo: "Unknown", caveat: "Unknown" }),
    }));
    const timescaleCaveat = timescale === "acute"
        ? "ACUTE ACTIVATION: These tendencies represent momentary biases on judgment, not stable political commitments. RWA/SDO are trait measures that shift slowly. A single FEAR activation doesn't make someone authoritarian — but chronic FEAR exposure does."
        : "CHRONIC PATTERN: Sustained system activation over months/years does reshape dispositional RWA and SDO. The mapping from systems to political orientation is strongest at this timescale.";
    return {
        content: [{
                type: "text",
                text: JSON.stringify({
                    dominantSystem: { system: dominantSystem, ...dominant },
                    activeSystems: active,
                    timescaleCaveat,
                    methodologicalWarning: "This bridge maps biological systems to political psychology dimensions (RWA/SDO). The mapping is supported by research (Duckitt 2001, Jost & Banaji 1994) at the chronic/dispositional level. At the acute level, it generates hypotheses, not diagnoses. The IS variable (which narrative has captured the system) makes this many-to-many, not one-to-one.",
                }, null, 2),
            }],
    };
});
// ═══════════════════════════════════════════════════════════════
// SERVER STARTUP
// ═══════════════════════════════════════════════════════════════
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("ASEKE Compass MCP server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map