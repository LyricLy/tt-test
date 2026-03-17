const axes = ["fakeclaiming", "unconventional", "active", "bold", "confplaying", "hunt"];
const axisLabels = ["Fake-claiming", "Unconventionality", "Activity", "Boldness", "Conf-playing", "Hunt tendency"];

const archetypes = [
    {
        name: "LyricLy",
        data: [0.766, 0.56, 0.76, 0.611, 0.521, 0.267],
    },
    {
        name: "Danman",
        data: [0.186, 0.077, 0.274, 0.198, 0.339, 0.4],
    },
    {
        name: "Gork",
        data: [0.073, 0, 0.069, 0.099, 0.455, 0.667],
    },
    {
        name: "Gus",
        data: [0.182, 0.137, 0.377, 0.37, 0.758, 0.733],
    },
    {
        name: "Athelix",
        data: [0.562, 0.56, 0.783, 0.716, 0.273, 0.111],
    },
    {
        name: "L4LYFE",
        data: [0.927, 0.911, 0.766, 0.84, 0.485, 0.244],
    },
];

const questions = [
    {
        text: `You are a <span class="coven">Town Traitor Deputy</span>. On Day 2, a <span class="town">Sheriff</span> claim finds your teammate, the <span class="coven">Hex Master</span>,
               <span class="kw">Sus</span>. Do you shoot your teammate?`,
        answers: [
            {text: "Yes", effect: {hunt: +10, confplaying: +10, bold: +5, active: +2}},
            {text: "No", effect: {hunt: -10, confplaying: -10}},
        ],
    },
    {
        text: `You are the <span class="coven">Witch</span>. What do you do on Night 1?`,
        answers: [
            {text: `<span class="kw">Control</span> a <span class="town">Town</span> member`, effect: {unconventional: -5, bold: -2}},
            {text: `<span class="kw">Control</span> the <span class="kw">Town Traitor</span>`, effect: {hunt: +5, confplaying: +5}},
            {text: "Stay home", effect: {unconventional: +10}},
            {text: `Stay home and claim (or let another <span class="coven">Coven</span> member claim) to have been <span class="kw">Control</span>led`, effect: {confplaying: +5, active: +5}},
        ],
    },
    {
        text: `You are a <span class="town">Coroner</span>. What are you most likely to claim?`,
        answers: [
            {text: `<span class="town">Coroner</span>`, effect: {fakeclaiming: -10, bold: -5, unconventional: -5, active: -5}},
            {text: `<span class="town">Town Power</span>`, effect: {fakeclaiming: +5, unconventional: -5}},
            {text: `Something else, like <span class="town">Town Protective</span>`, effect: {fakeclaiming: +10, unconventional: +2, active: +2}},
        ],
    },
    {
        text: `You are the <span class="coven">Conjurer</span>, and it's day 3. 7 <span class="town">Town</span> and 5 <span class="coven">Coven</span>-aligned players are alive,
               but you've yet to use your ability. A <span class="town">Sheriff</span> found you <span class="kw">Sus</span> last night, and the players are occupied with the 1f1.
               Tech X is convinced you are evil, but the <span class="town">Town</span> as a whole seems split. EvilFr, who you know to be unskilled, claims <span class="town">Marshal</span>
               and declares her intent to call a <span class="kw">Tribunal</span>. You know your decision of who to kill may decide the game. Tech X is the better player, and his read is correct.
               But he was <span class="kw">Reveal</span>ed last night. He's only a <span class="town">Retributionist</span>. Which player do you <span class="kw">Conjure</span>?`,
        answers: [
            {text: "Tech X", effect: {unconventional: +10, bold: +10, active: +2}},
            {text: "EvilFr", effect: {unconventional: -10, bold: -5}},
        ],
    },
    {
        text: `You are a member of the <span class="coven">Coven</span>. It is Night 2, and your <span class="coven">Coven Leader</span> died yesterday. Your <span class="kw">Town Traitor</span>
               is an unremarkable <span class="coven">Lookout</span>. Is it time to aim for hunt, or is winning by majority still viable?`,
        answers: [
            {text: "Go majority", effect: {hunt: -10, active: +2}},
            {text: "Go hunt", effect: {hunt: +10, bold: -10}},
        ],
    },
    {
        text: `You are a member of the <span class="coven">Coven</span>, and you accidentally find yourself 1f1 with your <span class="kw">Town Traitor</span> on Day 2. How do you play it?`,
        answers: [
            {text: "Defend poorly to try and be hanged over them", effect: {unconventional: -5, hunt: +5, active: -5}},
            {text: "Push them as hard as you can", effect: {unconventional: +10, hunt: -5, bold: +10, active: +5}},
        ],
    },
    {
        text: `You are a <span class="town">Deputy</span>. On Day 2, a <span class="town">Sheriff</span> claim finds another player <span class="kw">Sus</span>. What do you do?`,
        answers: [
            {text: `<span class="kw">High Noon</span> the player accused`, effect: {}},
            {text: `<span class="kw">High Noon</span> the <span class="town">Sheriff</span> claim`, effect: {unconventional: +5, bold: +5}},
            {text: "Wait to see if the accused player admits before acting", effect: {active: +2}},
            {text: "Do nothing today", effect: {unconventional: +3, active: -5}},
        ],
    },
    {
        text: `Do you fake claim as <span class="town">Town Investigative</span>, such as by claiming <span class="town">Investigator</span> as <span class="town">Tracker</span> or
               <span class="town">Town Protective</span> as <span class="town">Lookout</span>?`,
        answers: [
            {text: "Yes, often", effect: {unconventional: +5, fakeclaiming: +10, active: +2}},
            {text: "Yes, sometimes", effect: {unconventional: +2, fakeclaiming: +5, active: +1}},
            {text: "No, or only rarely", effect: {unconventional: -5, bold: -5}},
        ],
    },
    {
        text: `You are a weak <span class="kw">Town Traitor</span>, such as a <span class="coven">Coroner</span> or <span class="coven">Bodyguard</span>. How do you play it?`,
        answers: [
            {text: "Claim your real role", effect: {unconventional: -10, fakeclaiming: -10, confplaying: +5, hunt: +10, active: -5}},
            {text: "Claim another alignment so a teammate can take the slot", effect: {fakeclaiming: +5, hunt: -10}},
            {text: `Claim <span class="town">Town Investigative</span> and go for hard mislynches`, effect: {unconventional: +3, fakeclaiming: +10, bold: +5, confplaying: -10, hunt: -20, active: +10}},
        ],
    },
    {
        text: `You are a <span class="coven">Town Traitor Veteran</span>. How do you play it?`,
        answers: [
            {text: `Claim <span class="town">Veteran</span>`, effect: {fakeclaiming: -10, confplaying: +5, hunt: +10, active: -5}},
            {text: `Call for TPLO and <span class="kw">Alert</span>`, effect: {confplaying: -4, hunt: -20, active: +5}},
            {text: `Fake claim and try to bait <span class="town">Town</span> later in the game`, effect: {unconventional: +5, fakeclaiming: +7, bold: +5, confplaying: -10, hunt: -15, active: +10}},
        ],
    },
    {
        text: `You are a <span class="coven">Town Traitor Vigilante</span>. It's Night 3, and 2 of your teammates are dead. You, the <span class="coven">Hex Master</span>, and the
        <span class="coven">Ritualist</span> remain. None of you are outed yet, but 7 <span class="town">Town</span> members remain and only 1 of them is
        <span class="kw">Hex</span>ed. The <span class="town">Marshal</span> is dead, and you've yet to kill anyone. What do you do?`,
        answers: [
            {text: `<span class="kw">Shoot</span> the <span class="coven">Hex Master</span>`, effect: {bold: -3, hunt: +15, confplaying: +10, fakeclaiming: -5}},
            {text: `<span class="kw">Shoot</span> a <span class="town">Town</span> member`, effect: {fakeclaiming: +5, hunt: -10, bold: +4}},
            {text: `<span class="kw">Load</span>`, effect: {bold: -10, confplaying: -5, hunt: +5, active: -2}},
        ],
    },
    {
        text: `What's the furthest you're likely to take your claim on Day 2 as a <span class="town">Veteran</span>?`,
        answers: [
            {text: `<span class="town">Town Killing</span>`, effect: {bold: -5, active: -5}},
            {text: `<span class="town">Town Protective</span> or <span class="town">Town Support</span>`, effect: {fakeclaiming: +5}},
            {text: `<span class="town">Town Investigative</span>`, effect: {unconventional: +10, fakeclaiming: +10, bold: +5, active: +5}},
            {text: `<span class="town">Town Power</span>`, effect: {unconventional: +20, fakeclaiming: +10, bold: +10, active: +5}},
        ],
    },
    {
        text: `You are a <span class="town">Town</span> member. It's Day 4, and things are tense. The <span class="coven">Coven</span> are close to gaining majority, and 2 players are in a 1f1.
               You're not sure which one of them is real. What's your plan A?`,
        answers: [
            {text: "Read the players' logs and try to scumread them", effect: {}},
            {text: "Look for the answer based on how other players are pushing", effect: {active: +5}},
            {text: "Search for a scummy player unrelated to the 1f1 to push instead", effect: {active: +10, bold: +2}},
            {text: "Vote with someone you trust", effect: {active: -2}},
        ],
    },
    {
        text: `What do you think of L4LYFE's <span class="town">Town</span> gameplay?`,
        answers: [
            {text: "He was ahead of his time", effect: {fakeclaiming: +10, unconventional: +7, bold: +2}},
            {text: "Some of his ideas made sense, but sometimes he was just doing it for the sake of it", effect: {fakeclaiming: +5, unconventional: +3}},
            {text: "He was a terrible player who got carried", effect: {}},
            {text: "Don't know who that is", effect: {}},
        ],
    },
    {
        text: `You are a <span class="town">Trickster</span>. Who do you go on on Night 1?`,
        answers: [
            {text: "The TPLO call", effect: {}},
            {text: "A regular", effect: {unconventional: +5, active: +2}},
            {text: "Someone random you feel might be attacked", effect: {unconventional: +7}},
        ],
    },
    {
        text: `You are a <span class="town">Cleric</span>. Who do you go on on Night 2?`,
        answers: [
            {text: "The TPLO call from Night 1", effect: {unconventional: -5, active: -2}},
            {text: `A <span class="town">Town Power</span> claim`, effect: {unconventional: -10}},
            {text: `A likely target like a <span class="town">Town Investigative</span> or <span class="town">Socialite</span>`, effect: {active: +2}},
            {text: `Another <span class="town">Town Protective</span>`, effect: {unconventional: +5, bold: +2}},
            {text: "A trustworthy regular", effect: {active: +5}},
        ],
    },
    {
        text: `Would you ever pretend to be a <span class="town">Town Investigative</span> and falsely claim to find someone evil as <span class="town">Town</span>?`,
        answers: [
            {text: "Yes", effect: {fakeclaiming: +20, unconventional: +10, bold: +10, active: +10}},
            {text: "Maybe", effect: {fakeclaiming: +10, unconventional: +5, bold: +5, active: +5}},
            {text: "No", effect: {}},
        ],
    },
    {
        text: `You are a <span class="coven">Town Traitor Cleric</span> and your team is in a bad way. By Night 3, it's clear you will have to go through hunt. Your teammate suggests you could
               help confirm yourself by saving someone from an attack. They believe it's a good idea, but they're not you. Do you agree?`,
        answers: [
            {text: "Yes, go for the confirmation play", effect: {confplaying: +10}},
            {text: "No, that's too predictable", effect: {confplaying: -10}},
        ],
    },
    {
        text: `Would you bus your teammate on Day 2 as <span class="coven">Town Traitor Town Investigative</span> (or as another alignment, by faking <span class="town">Town Investigative</span>)?`,
        answers: [
            {text: "Yes, I will look good in hunt", effect: {unconventional: +3, confplaying: +10, hunt: +10}},
            {text: "Yes, but only if majority is viable after", effect: {unconventional: +5, confplaying: +10}},
            {text: "Never!", effect: {confplaying: -10, hunt: -5}},
        ],
    },
    {
        text: `You are an <span class="town">Oracle</span>, and someone claims to find you guilty of <span class="kw">Murder</span> and <span class="kw">Trespassing</span> on Day 2. What do you do?`,
        answers: [
            {text: `State you are real and the <span class="coven">"Investigator"</span> is fake`, effect: {}},
            {text: "Defend yourself adamantly until your last breath", effect: {active: +5}},
            {text: `Give up and wish the <span class="town">Town</span> luck`, effect: {active: -3, bold: -2}},
            {text: `Claim to be <span class="town">Town Power</span>`, effect: {fakeclaiming: +10, unconventional: +5, active: +5, bold: +5}},
        ],
    },
    {
        text: `You are a <span class="coven">Potion Master</span>, and someone finds you <span class="kw">Sus</span> on Day 2. What do you do?`,
        answers: [
            {text: `State you are real and the <span class="town">Sheriff</span> is fake`, effect: {}},
            {text: "Defend yourself adamantly until your last breath", effect: {active: +5}},
            {text: `Give up and wish your <span class="coven">Coven</span> luck`, effect: {active: -3, bold: -2}},
            {text: `Claim to be <span class="town">Town Power</span>`, effect: {unconventional: +2, active: +5, bold: +2}},
        ],
    },
    {
        text: `When claiming <span class="town">Town Investigative</span> as the <span class="kw">Town Traitor</span>, do you always give true information?`,
        answers: [
            {text: "Yes", effect: {active: -3, bold: -2, confplaying: +10, hunt: +10}},
            {text: "Not always", effect: {active: +1}},
            {text: "It's usually false", effect: {active: +5, bold: +5, confplaying: -10, hunt: -10}},
        ],
    },
    {
        text: `You are a <span class="coven">Town Traitor Amnesiac</span>, and you have a <span class="coven">Conjurer</span> on your team. Do you tell the <span class="kw">Necronomicon</span> holder
               not to attack?`,
        answers: [
            {text: `Yes, try to nuke a <span class="town">Town Power</span>`, effect: {hunt: -5, bold: +5, active: +10, unconventional: +2}},
            {text: "No, it's not worth it", effect: {}},
        ],
    },
    {
        text: `As a <span class="coven">Town Traitor Socialite</span>, do you ever <span class="kw">Guest List</span> the <span class="kw">Necronomicon</span> holder and help them bypass
               <span class="town">Town Protective</span>s?`,
        answers: [
            {text: "Yes, from Night 1", effect: {hunt: -20, bold: +10, active: +10, unconventional: +5, confplaying: -10, fakeclaiming: +5}},
            {text: "Yes, later in the game if majority is very viable", effect: {hunt: -5, active: +5}},
            {text: `No, outing the <span class="kw">Town Traitor</span> role isn't worth it`, effect: {hunt: +5}},
        ],
    },
    {
        text: `You are a <span class="coven">Town Traitor Tavern Keeper</span>. Are you more liable to try to appear <span class="town">Town</span> with your <span class="kw">Roleblock</span>s
               or to play like a <span class="coven">Poisoner</span>?`,
        answers: [
            {text: `<span class="kw">Roleblock</span> the players you would if you were <span class="town">Town</span>, including your teammates`, effect: {hunt: +10, confplaying: +10, active: +3}},
            {text: `Look good without affecting your team by <span class="kw">Roleblock</span>ing suspicious <span class="town">Town</span> members`, effect: {bold: -10, active: -5}},
            {text: `Hide your role while openly targeting threats to the <span class="coven">Coven</span>`, effect: {fakeclaiming: +5, confplaying: -10, hunt: -10, bold: +5}},
        ],
    },
    {
        text: `Have you ever faked your <span class="coven">Coven</span> teammate's visit to confirm them while claiming <span class="town">Lookout</span> or <span class="town">Trapper</span>
               (not <span class="town">Tracker</span>)?`,
        answers: [
            {text: "Yes", effect: {confplaying: +5, active: +10, bold: +2}},
            {text: "No", effect: {active: -3}},
        ],
    },
];

const bounds = new Map(axes.map(x => [x, [0, 0]]));

for (const question of questions) {
    const thisQ = new Map();
    for (const {effect} of question.answers) {
        for (const [effected, change] of Object.entries(effect)) {
            let r = thisQ.get(effected);
            if (!r) thisQ.set(effected, (r = [0, 0]));
            r[0] = Math.min(r[0], change);
            r[1] = Math.max(r[1], change);
        }
    }
    for (const [key, [min, max]] of thisQ.entries()) {
        const r = bounds.get(key);
        r[0] += min;
        r[1] += max;
    }
}

function renderQuestion() {
    const index = +localStorage.getItem("index");
    if (index >= questions.length) return renderEnd();
    const {text, answers} = questions[index];
    const header = document.createElement("h2");
    header.textContent = `Question ${index+1} of ${questions.length}`;
    const question = document.createElement("p");
    question.innerHTML = text;
    const buttons = document.createElement("ul");
    buttons.classList.add("choice");
    for (const {text, effect} of answers) {
        const button = document.createElement("li");
        button.innerHTML = text;
        button.addEventListener("click", () => {
            for (const [key, change] of Object.entries(effect)) {
                localStorage.setItem(key, +(localStorage.getItem(key) ?? 0) + change);
            }
            localStorage.setItem("index", index+1);
            renderQuestion();
        });
        buttons.appendChild(button);
    }
    document.getElementById("quiz").replaceChildren(header, question, buttons);
}

function dist(data1, data2) {
    let n = 0;
    for (const [i, x] of data1.entries()) {
        n += (x-data2[i]) ** 2;
    }
    return Math.sqrt(n);
}

function renderEnd() {
    const data = axes.map(key => {
        const [min, max] = bounds.get(key);
        return (localStorage.getItem(key) - min) / (max - min);
    });
    const ctx = document.createElement("canvas");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: axisLabels,
            datasets: [{
                data,
                borderWidth: 1,
            }],
        },
        options: {
            plugins: {legend: {display: false}},
            scales: {
                y: {
                    ticks: {display: false},
                    grid: {display: false},
                    beginAtZero: true,
                    suggestedMax: 1,
                },
            },
        },
    });

    let bestName;
    let bestDist;
    for (const {name, data: data2} of archetypes) {
        const d = dist(data, data2);
        if (bestDist === undefined || d < bestDist) {
            bestName = name;
            bestDist = d;
        }
    }
    const summary = document.createElement("p");
    summary.innerHTML = `You are like <b>${bestName}</b>. <button onclick="reset()">Retake quiz</button>`;

    document.getElementById("quiz").replaceChildren(ctx, summary);
}

function reset() {
    localStorage.clear();
    renderQuestion();
}

window.addEventListener("load", renderQuestion);
