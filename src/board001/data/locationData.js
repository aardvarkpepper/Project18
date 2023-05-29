/*
frontend src>board001>data>locationData comments:

Object keys are snake_case instead of camelCase, for later integration with SQL database.
(Assumed: SQL database will not have case sensitivity on.)
(JSON instead of JSONB for this application, but more complicated games should use JSONB.)

locationData contains data specific to locations, but generally not data that could be expressed
at a higher level of abstraction.
E.g. Algorithm Alley is not shown here to be in group "a"; that is tracked at another level.
If a player owns all skills in the "a" group, cost to other players doubling is not shown here.

locationData is imported into state. Game actions may change that data in state.
E.g. a player buys a property in group "a"; as part of that process the game checks if all other
group "a" properties are owned by the same player, and if so upgrades "synergy".  When a property
in group "a" is sold, "synergy" is downgraded if appropriate.

Similarly, when a proficiency investment is attempted, a check is made to see if the appropriate 
property has sufficient synergy.  If so, and other conditions met (cost paid, no auction, etc.)
then "proficiency_level" is upgraded.
*/
const locationData = [
    {
        position: 0,
        name: "Iterate",
        text: "Collect $200 as you enter this square",
        type: "corner1",
        graphic: "placeholderGraphic/iterate.jpg",
    },
    {
        position: 1,
        name: "Debugging Drive",
        type: "skill",
        group: "a",
        graphic: "placeholderGraphic/debuggingDrive.jpg",
        price: 60,
        proficiency_cost: 50,
        proficiency_level: 0,
        c0: 2,
        c1: 10,
        c2: 30,
        c3: 90,
        c4: 160,
        c5: 250,
        owner: "",
        debt: false,
    },
    {
        position: 2,
        name: "Data Structures",
        type: "deck1",
        graphic: "placeholderGraphic/dataStructures.jpg",
    },
    {
        position: 3,
        name: "Scope Square",
        type: "skill",
        group: "a",
        graphic: "placeholderGraphic/scopeSquare.jpg",
        price: 60,
        proficiency_cost: 50,
        proficiency_level: 0,
        c0: 4,
        c1: 20,
        c2: 60,
        c3: 180,
        c4: 320,
        c5: 450,
        owner: "",
        debt: false,
    },
    {
        position: 4,
        name: "Performance Optimization",
        type: "investment1",
        graphic: "placeholderGraphic/performanceOptimization.jpg",
    },
    {
        position: 5,
        name: "ERD Estates",
        type: "groupskill",
        group: "gs",
        graphic: "placeholderGraphic/erdEstates.jpg",
        price: 200,
        c0: 25,
        c1: 50,
        c2: 100,
        c3: 200,
        owner: "",
        debt: false,
    },
    {
        position: 6,
        name: "NPM Narrows",
        type: "skill",
        group: "b",
        graphic: "placeholderGraphic/npmNarrows.jpg",
        price: 100,
        proficiency_cost: 50,
        proficiency_level: 0,
        c0: 6,
        c1: 30,
        c2: 90,
        c3: 270,
        c4: 400,
        c5: 550,
        owner: "",
        debt: false,
    },
    {
        position: 7,
        name: "Algorithms",
        type: "deck2",
        graphic: "placeholderGraphic/algorithms.jpg",
    },
    {
        position: 8,
        name: "Git Gardens",
        type: "skill",
        group: "b",
        graphic: "placeholderGraphic/gitGardens.jpg",
        price: 100,
        proficiency_cost: 50,
        proficiency_level: 0,
        c0: 6,
        c1: 30,
        c2: 90,
        c3: 270,
        c4: 400,
        c5: 550,
        owner: "",
        debt: false,
    },
    {
        position: 9,
        name: "Github Grove",
        type: "skill",
        group: "b",
        graphic: "placeholderGraphic/githubGrove.jpg",
        price: 120,
        proficiency_cost: 50,
        proficiency_level: 0,
        c0: 8,
        c1: 40,
        c2: 100,
        c3: 300,
        c4: 450,
        c5: 600,
        owner: "",
        debt: false,
    },
    {
        position: 10,
        name: "Debugging",
        name2: "Just Testing",
        type: "corner2",
        graphic: "placeholderGraphic/debugging.jpg",
    },
    {
        position: 11,
        name: "Javascript Junction",
        type: "skill",
        group: "c",
        graphic: "placeholderGraphic/javascriptJunction.jpg",
        price: 140,
        proficiency_cost: 100,
        proficiency_level: 0,
        c0: 10,
        c1: 50,
        c2: 150,
        c3: 450,
        c4: 625,
        c5: 750,
        owner: "",
        debt: false,
    },
    {
        position: 12,
        name: "CRUD Database",
        type: "skillset",
        group: "ss",
        graphic: "placeholderGraphic/crudDatabase.jpg",
        price: 150,
        m0: 4,
        m1: 10,
        owner: "",
        debt: false,
    },
    {
        position: 13,
        name: "NodeJS Neighborhood",
        type: "skill",
        group: "c",
        graphic: "placeholderGraphic/nodejsNeighborhood.jpg",
        price: 140,
        proficiency_cost: 100,
        proficiency_level: 0,
        c0: 10,
        c1: 50,
        c2: 150,
        c3: 450,
        c4: 625,
        c5: 750,
        owner: "",
        debt: false,
    },
    {
        position: 14,
        name: "VSCode Villa",
        type: "skill",
        group: "c",
        graphic: "placeholderGraphic/vscodeVilla.jpg",
        price: 160,
        proficiency_cost: 100,
        proficiency_level: 0,
        c0: 12,
        c1: 60,
        c2: 180,
        c3: 500,
        c4: 700,
        c5: 900,
        owner: "",
        debt: false,
    },
    {
        position: 15,
        name: "Trello Terrace",
        type: "groupskill",
        group: "gs",
        graphic: "placeholderGraphic/trelloTerrace.jpg",
        price: 200,
        c0: 25,
        c1: 50,
        c2: 100,
        c3: 200,
        owner: "",
        debt: false,
    },
    {
        position: 16,
        name: "HTML Heights",
        type: "skill",
        group: "d",
        graphic: "placeholderGraphic/htmlHeights.jpg",
        price: 180,
        proficiency_cost: 100,
        proficiency_level: 0,
        c0: 14,
        c1: 70,
        c2: 200,
        c3: 550,
        c4: 750,
        c5: 950,
        owner: "",
        debt: false,
    },
    {
        position: 17,
        name: "Data Structures",
        type: "deck1",
        graphic: "placeholderGraphic/dataStructures.jpg",
    },
    {
        position: 18,
        name: "CSS Corner",
        type: "skill",
        group: "d",
        graphic: "placeholderGraphic/cssCorner.jpg",
        price: 180,
        proficiency_cost: 100,
        proficiency_level: 0,
        c0: 14,
        c1: 70,
        c2: 200,
        c3: 550,
        c4: 750,
        c5: 950,
        owner: "",
        debt: false,
    },
    {
        position: 19,
        name: "Responsive Web Design",
        type: "skill",
        group: "d",
        graphic: "placeholderGraphic/responsiveWebDesign.jpg",
        price: 200,
        proficiency_cost: 100,
        proficiency_level: 0,
        c0: 16,
        c1: 80,
        c2: 220,
        c3: 600,
        c4: 800,
        c5: 1000,
        owner: "",
        debt: false,
    },
    {
        position: 20,
        name: "Water Break",
        type: "corner3",
        graphic: "placeholderGraphic/waterBreak.jpg",
    },
    {
        position: 21,
        name: "DOM Drive",
        type: "skill",
        group: "e",
        graphic: "placeholderGraphic/domDrive.jpg",
        price: 220,
        proficiency_cost: 150,
        proficiency_level: 0,
        c0: 18,
        c1: 90,
        c2: 250,
        c3: 700,
        c4: 875,
        c5: 1050,
        owner: "",
        debt: false,
    },
    {
        position: 22,
        name: "Algorithms",
        type: "deck2",
        graphic: "placeholderGraphic/algorithms.jpg",
    },
    {
        position: 23,
        name: "Forms Forest",
        type: "skill",
        group: "e",
        graphic: "placeholderGraphic/formsForest.jpg",
        price: 220,
        proficiency_cost: 150,
        proficiency_level: 0,
        c0: 18,
        c1: 90,
        c2: 250,
        c3: 700,
        c4: 875,
        c5: 1050,
        owner: "",
        debt: false,
    },
    {
        position: 24,
        name: "Events Estate",
        type: "skill",
        group: "e",
        graphic: "placeholderGraphic/eventsEstate.jpg",
        price: 240,
        proficiency_cost: 150,
        proficiency_level: 0,
        c0: 20,
        c1: 100,
        c2: 300,
        c3: 750,
        c4: 925,
        c5: 1100,
        owner: "",
        debt: false,
    },
    {
        position: 25,
        name: "Wireframes Way",
        type: "groupskill",
        group: "gs",
        graphic: "placeholderGraphic/wireframesWay.jpg",
        price: 200,
        c0: 25,
        c1: 50,
        c2: 100,
        c3: 200,
        owner: "",
        debt: false,
    },
    {
        position: 26,
        name: "Postman Parkway",
        type: "skill",
        group: "f",
        graphic: "placeholderGraphic/postmanParkway.jpg",
        price: 260,
        proficiency_cost: 150,
        proficiency_level: 0,
        c0: 22,
        c1: 110,
        c2: 330,
        c3: 800,
        c4: 975,
        c5: 1150,
        owner: "",
        debt: false,
    },
    {
        position: 27,
        name: "Promises Plaza",
        type: "skill",
        group: "f",
        graphic: "placeholderGraphic/promisesPlaza.jpg",
        price: 260,
        proficiency_cost: 150,
        proficiency_level: 0,
        c0: 22,
        c1: 110,
        c2: 330,
        c3: 800,
        c4: 975,
        c5: 1150,
        owner: "",
        debt: false,
    },
    {
        position: 28,
        name: "RESTful APIs",
        type: "skillset",
        group: "ss",
        graphic: "placeholderGraphic/restfulApis.jpg",
        price: 150,
        m0: 4,
        m1: 10,
        owner: "",
        debt: false,
    },
    {
        position: 29,
        name: "UI/UX Utopia",
        type: "skill",
        group: "f",
        graphic: "placeholderGraphic/uiuxUtopia.jpg",
        price: 280,
        proficiency_cost: 150,
        proficiency_level: 0,
        c0: 24,
        c1: 120,
        c2: 360,
        c3: 850,
        c4: 1025,
        c5: 1200,
        owner: "",
        debt: false,
    },
    {
        position: 30,
        name: "Go To Debugging",
        type: "corner4",
        graphic: "placeholderGraphic/goToDebugging.jpg",
    },
    {
        position: 31,
        name: "React Road",
        type: "skill",
        group: "g",
        graphic: "placeholderGraphic/reactRoad.jpg",
        price: 300,
        proficiency_cost: 200,
        proficiency_level: 0,
        c0: 26,
        c1: 130,
        c2: 390,
        c3: 900,
        c4: 1100,
        c5: 1275,
        owner: "",
        debt: false,
    },
    {
        position: 32,
        name: "Pair Programming",
        type: "skill",
        group: "g",
        graphic: "placeholderGraphic/pairProgramming.jpg",
        price: 300,
        proficiency_cost: 200,
        proficiency_level: 0,
        c0: 26,
        c1: 130,
        c2: 390,
        c3: 900,
        c4: 1100,
        c5: 1275,
        owner: "",
        debt: false,
    },
    {
        position: 33,
        name: "Data Structures",
        type: "deck1",
        graphic: "placeholderGraphic/dataStructures.jpg",
    },
    {
        position: 34,
        name: "Express Estate",
        type: "skill",
        group: "g",
        graphic: "placeholderGraphic/expressEstate.jpg",
        price: 320,
        proficiency_cost: 200,
        proficiency_level: 0,
        c0: 28,
        c1: 150,
        c2: 450,
        c3: 1000,
        c4: 1200,
        c5: 1400,
        owner: "",
        debt: false,
    },
    {
        position: 35,
        name: "Agile Avenue",
        type: "groupskill",
        group: "gs",
        graphic: "placeholderGraphic/agileAvenue.jpg",
        price: 200,
        c0: 25,
        c1: 50,
        c2: 100,
        c3: 200,
        owner: "",
        debt: false,
    },
    {
        position: 36,
        name: "Algorithms",
        type: "deck2",
        graphic: "placeholderGraphic/algorithms.jpg",
    },
    {
        position: 37,
        name: "PostgreSQL Parkway",
        type: "skill",
        group: "h",
        graphic: "placeholderGraphic/postgresqlParkway.jpg",
        price: 350,
        proficiency_cost: 200,
        proficiency_level: 0,
        c0: 35,
        c1: 175,
        c2: 500,
        c3: 1100,
        c4: 1300,
        c5: 1500,
        owner: "",
        debt: false,
    },
    {
        position: 38,
        name: "Tech Upgrade",
        type: "investment2",
        graphic: "placeholderGraphic/techUpgrade.jpg",
    },
    {
        position: 39,
        name: "Optimization Oasis",
        type: "skill",
        group: "h",
        graphic: "placeholderGraphic/optimizationOasis.jpg",
        price: 400,
        proficiency_cost: 200,
        proficiency_level: 0,
        c0: 50,
        c1: 200,
        c2: 600,
        c3: 1400,
        c4: 1700,
        c5: 2000,
        owner: "",
        debt: false,
    },
]
export default locationData;