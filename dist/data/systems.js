/**
 * Panksepp's Seven Primary Emotional Systems
 * Grounded in electrical brain stimulation, lesion studies,
 * and pharmacological challenges across mammalian species.
 */
export const SYSTEMS = {
    SEEKING: {
        name: "SEEKING",
        displayName: "SEEKING (Expectancy/Desire)",
        neuralBasis: "Mesolimbic dopamine pathway (VTA → nucleus accumbens → prefrontal cortex). The most foundational system — energizes all goal-directed behavior.",
        functionalRole: "Drives exploration, curiosity, anticipation, appetitive motivation. The 'engine' that gets organisms to engage with the world. Not pleasure itself — the wanting that precedes pleasure.",
        behavioralSignature: "Forward-leaning engagement, novelty pursuit, energized investigation, optimistic planning. 'I want to find out' and 'I want to get that.'",
        ceDemand: "Moderate. SEEKING enhances cognitive flexibility rather than consuming attentional resources. It is energizing, not overwhelming.",
        isVulnerability: "SEEKING is the system IS competes for most intensely. When active, the organism is looking for explanations and goals. An IS that provides a compelling narrative target captures the person's motivational engine. Radicalization often begins with genuine curiosity before SEEKING energy gets channeled by a specific IS. Cults, ideological movements, and conspiracy theories all hook SEEKING first.",
        chronicEffect: "When chronically suppressed (anhedonia, depression), the organism stops engaging with the world entirely. This is the burnout cascade's endpoint — not just tiredness but the extinction of wanting itself.",
        politicalBridge: "SEEKING is the gateway system for ALL IS capture. Active SEEKING + available IS = capture. Suppressed SEEKING = no capture but also no engagement (depression/apathy).",
        keyDistinctions: [
            "SEEKING is wanting, not liking — dopaminergic anticipation, not opioid consummation",
            "SEEKING is the IS acquisition gateway — it must be active for any IS to take hold",
            "SEEKING suppression (anhedonia) is the deepest form of political disengagement"
        ],
    },
    RAGE: {
        name: "RAGE",
        displayName: "RAGE (Anger)",
        neuralBasis: "Medial amygdala → hypothalamus → PAG (periaqueductal gray). Triggered by frustration of SEEKING (goal blockage), restraint, or territorial violation.",
        functionalRole: "Overcome obstacles, defend resources, signal dominance. An approach emotion — RAGE moves toward the threat, unlike FEAR which moves away.",
        behavioralSignature: "Aggressive posture, confrontational language, boundary assertion, dominance displays. Heightened energy directed at a specific target. 'Get out of my way' and 'This is mine.'",
        ceDemand: "High. RAGE narrows attention to the target and suppresses deliberative processing. Functional in actual combat but catastrophic for complex decision-making. The RAGE-captured person cannot simultaneously analyze whether their target is correctly identified.",
        isVulnerability: "RAGE requires a target. When active but target is ambiguous, any IS that provides one gets adopted with relief (Scapegoat Pivot pattern). RAGE is the emotional substrate most easily redirected by demagogic IS — the anger is real but the aim is manufactured.",
        chronicEffect: "Sustained RAGE without resolution leads to burnout cascade: controlled anger → withdrawal → SEEKING extinction. Also produces cardiovascular stress, social isolation, and increasingly rigid thinking.",
        politicalBridge: "RAGE aimed at out-groups or subordinates reinforces dominance hierarchies (SDO↑). RAGE aimed at elites or hierarchy itself undermines them (SDO↓). Same system, different IS aim, opposite political output.",
        keyDistinctions: [
            "RAGE approaches; FEAR withdraws — neurologically and behaviorally opposite despite both being high-arousal/negative-valence",
            "RAGE narrows on a target; FEAR scans for escape routes",
            "Misidentifying RAGE as FEAR (or vice versa) leads to completely wrong interventions",
            "FEAR→RAGE conversion occurs when escape is blocked (cornered animal)"
        ],
    },
    FEAR: {
        name: "FEAR",
        displayName: "FEAR (Anxiety)",
        neuralBasis: "Central/lateral amygdala → hypothalamus → PAG. Distinct from RAGE circuit despite amygdala involvement — different nuclei, different outputs.",
        functionalRole: "Detect and escape danger. Freeze when escape is impossible. The system that keeps organisms alive by making them attend to threats with absolute priority.",
        behavioralSignature: "Vigilance, scanning, startle response, avoidance, flight. At extreme activation: freeze/immobility. 'Something is wrong' and 'I need to get out.'",
        ceDemand: "Very high. FEAR commandeers attentional resources for threat monitoring, leaving minimal capacity for anything else. The 'weapon focus effect' — under FEAR, attention narrows to the threat source and everything else disappears.",
        isVulnerability: "Primary substrate for authoritarian IS capture. Chronic FEAR primes dangerous-world beliefs (RWA substrate per Duckitt 2001). IS that promise safety through order, strong leadership, and group cohesion resonate directly with FEAR's functional logic. This is why authoritarian movements surge during periods of genuine or manufactured threat.",
        chronicEffect: "Sustained FEAR produces anxiety disorders, hypervigilance, and the dangerous-world worldview that undergirds authoritarianism — not as ideology but as lived experience of a nervous system stuck in threat-detection mode.",
        politicalBridge: "FEAR → RWA. Chronic FEAR activation produces the dangerous-world perception that undergirds Right-Wing Authoritarianism. The person isn't 'choosing' authoritarianism; their nervous system is reporting danger.",
        keyDistinctions: [
            "FEAR wants to escape; RAGE wants to attack",
            "When FEAR is blocked from escape, it converts to RAGE (cornered animal) — a critical transition",
            "FEAR broadens attention (scanning); RAGE narrows it (targeting)",
            "IS that offer RAGE targets provide a discharge path for trapped FEAR"
        ],
    },
    PANIC_GRIEF: {
        name: "PANIC_GRIEF",
        displayName: "PANIC/GRIEF (Separation Distress)",
        neuralBasis: "Anterior cingulate → bed nucleus of stria terminalis → PAG. Opioid and oxytocin systems critically involved — social connection is literally analgesic; social loss is literally painful.",
        functionalRole: "Maintain social bonds. Signal distress when separated from attachment figures or group. Makes mammals need each other — not as preference but as biological imperative.",
        behavioralSignature: "Crying, calling out, clinging, searching for the lost other. Withdrawal, loss of motivation when bond is permanently broken. 'Where are you?' becomes 'Nothing matters.'",
        ceDemand: "Moderate-to-high. Active grief consumes resources through rumination and search behaviors. Resolved grief has low CE demand. Unresolved grief cycles between high and low.",
        isVulnerability: "PANIC/GRIEF makes people desperately seek belonging. Any IS that offers community captures this system powerfully. Bereavement, divorce, job loss, and social exclusion are prime recruitment windows for cults, extremist groups, and populist movements. The IS doesn't need to be accurate; it needs to offer belonging.",
        chronicEffect: "When chronic without resolution, produces depression: SEEKING shuts down (anhedonia), social withdrawal increases, organism enters conservation mode. Panksepp argued depression is fundamentally a disorder of the PANIC/GRIEF system.",
        politicalBridge: "PANIC/GRIEF → belongingness-seeking. Politically agnostic — can produce left solidarity or right tribalism depending on which community is available. 'You're one of us' is the most powerful sentence when PANIC/GRIEF is active.",
        keyDistinctions: [
            "PANIC/GRIEF is about social bond disruption, not about specific threats (FEAR) or obstacles (RAGE)",
            "Opioid system involvement means social connection is literally analgesic — isolation is literally painful",
            "Chronic PANIC/GRIEF → SEEKING extinction = the neurobiological pathway to depression"
        ],
    },
    CARE: {
        name: "CARE",
        displayName: "CARE (Nurturing)",
        neuralBasis: "Preoptic area of hypothalamus → VTA → PAG. Oxytocin and prolactin systems. Originally mapped through maternal behavior but extends to all nurturing bonds.",
        functionalRole: "Protect and nurture offspring and allies. Produces empathy, compassion, and protective behavior toward vulnerable others. The substrate for all caretaking behavior.",
        behavioralSignature: "Protective approach toward the vulnerable, attentive listening, physical comfort provision, self-sacrifice for others' wellbeing. 'I will keep you safe' and 'Let me help.'",
        ceDemand: "Low-to-moderate. CARE is sustainable — designed for the long haul of child-rearing, not the sprint of threat response. This makes CARE-based political engagement more durable than RAGE-based or FEAR-based engagement.",
        isVulnerability: "CARE can be captured by IS that define who 'deserves' care — who counts as 'one of ours' versus 'not our problem.' Narrowing the circle of care is the mechanism of most in-group/out-group IS. Broadening it is the mechanism of universalist ethics.",
        chronicEffect: "Broad CARE produces compassion satisfaction and prosocial behavior. Narrowed CARE produces fierce in-group protectionism. CARE directed at suffering without ability to help produces compassion fatigue (CARE + PANIC/GRIEF combination).",
        politicalBridge: "CARE breadth is the most direct biological substrate for the SDO axis. Broad CARE → low SDO (egalitarian). Narrow CARE → high SDO (in-group protectionism). The system itself doesn't determine politics — the IS determines who falls inside the circle.",
        keyDistinctions: [
            "CARE is the biological substrate of the entire egalitarian-to-stratified axis",
            "The circle of care width is IS-determined, not system-determined",
            "CARE + PANIC/GRIEF = compassion fatigue (empathic distress)",
            "CARE turned inward (self-protection of moral identity) = Virtue Fortress pattern"
        ],
    },
    PLAY: {
        name: "PLAY",
        displayName: "PLAY (Social Joy)",
        neuralBasis: "Thalamic and hypothalamic circuits → dorsomedial diencephalon. Distinct from SEEKING — PLAY requires social partners; SEEKING can be solitary. Opioid involvement in bonding during play.",
        functionalRole: "Build social competence, test boundaries, establish trust. PLAY is how mammals learn social interaction rules without lethal consequences. Mock-fighting teaches real limits.",
        behavioralSignature: "Laughter, rough-and-tumble, teasing, improvisation, spontaneous rule-making and rule-testing. 'Let's see what happens' and 'That was fun.'",
        ceDemand: "Low. PLAY is the lowest-CE social state — intrinsically rewarding, doesn't require effortful processing. This is why humor is such an effective communication tool: it activates PLAY, which lowers defensive processing and opens cognitive flexibility.",
        isVulnerability: "Relatively resistant to IS capture because it operates below the narrative level — pre-verbal, body-based, immediate. However, PLAY can be weaponized: mockery, ridicule, and trolling use PLAY's social dynamics to inflict PANIC/GRIEF (exclusion) while maintaining plausible deniability.",
        chronicEffect: "Communities with high PLAY activation tend toward lower RWA and lower SDO because the world feels safe enough to play in and hierarchy feels flexible enough to test. Suppression of PLAY (authoritarian environments that forbid spontaneity) is a reliable indicator of high-RWA institutional mood.",
        politicalBridge: "PLAY → low RWA, low SDO. Active PLAY requires a world experienced as safe enough to play in and a hierarchy flexible enough to test. PLAY is inherently anti-authoritarian and anti-hierarchical — not as ideology but as functional incompatibility. You cannot simultaneously be in PLAY and in RAGE or FEAR (these systems inhibit each other).",
        keyDistinctions: [
            "PLAY and RAGE/FEAR mutually inhibit — this makes PLAY a powerful de-escalation tool",
            "Shared humor is the fastest mirror-conflict breaker",
            "PLAY suppression in an environment is a diagnostic signal of FEAR/RAGE dominance",
            "Weaponized PLAY (trolling/mockery) uses PLAY dynamics to deliver PANIC/GRIEF"
        ],
    },
    LUST: {
        name: "LUST",
        displayName: "LUST (Sexual/Appetitive Drive)",
        neuralBasis: "Hypothalamic circuits, distinct from SEEKING though they interact. Testosterone, estrogen, vasopressin, oxytocin involvement.",
        functionalRole: "Reproductive motivation. Less directly relevant to the analytical engine's political-behavioral focus, but included for completeness.",
        behavioralSignature: "Mate-seeking behavior, sexual display, pair-bonding initiation. Interacts with SEEKING (pursuit), CARE (pair-bonding), and PLAY (courtship).",
        ceDemand: "Moderate-to-high during active pursuit. Low during satisfaction.",
        isVulnerability: "Exploited by advertising, political scandal narratives, and purity-based IS. The intersection of LUST and FEAR produces purity politics — control of sexuality as proxy for social order. Relevant when analyzing moral panic patterns around sexual behavior.",
        chronicEffect: "Chronic frustration of LUST can activate RAGE (frustration-aggression) or PANIC/GRIEF (isolation). Chronic satisfaction tends to activate CARE (pair-bonding) and reduce SEEKING intensity.",
        politicalBridge: "LUST + FEAR = purity politics (high RWA). LUST + PLAY = sexual liberation politics (low RWA). The system itself is politically neutral; the IS determines whether sexuality is framed as threat or as play.",
        keyDistinctions: [
            "LUST + FEAR → purity politics; LUST + PLAY → liberation politics",
            "Less analytically central than other systems but critical for understanding moral panics",
            "The advertising industry's primary exploitation target alongside SEEKING"
        ],
    },
};
/** Get all system names */
export const SYSTEM_NAMES = Object.keys(SYSTEMS);
//# sourceMappingURL=systems.js.map