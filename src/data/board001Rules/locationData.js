/*
Object keys are snake_case instead of camelCase, for integration with SQL database.
(It is assumed SQL database will not have case sensitivity on.)

locationData contains data specific to locations, but generally not data that could be expressed
at a higher level of abstraction.
E.g. Algorithm Alley is not shown here to be in group "a"; that is tracked at another level.
If a player owns all skills in the "a" group, cost to other players doubling is not shown here.

When actions are taken in other parts of the game, data in locationData may be updated.
E.g. a player buys a property in group "a"; as part of that process the game checks if all other
group "a" properties are owned by the same player, and if so upgrades "synergy".  When a property
in group "a" is sold, "synergy" is downgraded if appropriate.

Similarly, when a proficiency investment is attempted, a check is made to see if the appropriate 
property has sufficient synergy.  If so, and other conditions met (like cost paid and no auction)
then "proficiency_level" is upgraded.
*/
/*
{
    position: 0,
    name: "Iterate",
    type: "corner1",
    graphic: "placeholderGraphic/iterate.jpg",
},
{
    position: 1,
    name: "Algorithm Alley",
    type: "skill",
    graphic: "placeholderGraphic/algorithmAlley.jpg",
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
    synergy: 0,
},
{
    position: 2,
    name: "Data Structures and Algorithms",
    type: "deck1",
    graphic: "placeholderGraphic/dataStructuresandAlgorithms.jpg",
},
{
    position: 3,
    name: "Scope Square",
    type: "skill",
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
    synergy: 0,
},
{
    position: 4,
    name: "Performance Optimization",
    type: "tax1",
    graphic: "placeholderGraphic/performanceOptimization.jpg",
},
{
    position: 5,
    name: "ERD Estates",
    type: "groupskill",
    graphic: "placeholderGraphic/erdEstates.jpg",
    price: 200,
    c0: 25,
    c1: 50,
    c2: 100,
    c3: 200,
    owner: "",
    debt: false,
    synergy: 0,
},
{
    position: 6,
    name: "NPM Narrows",
    type: "skill",
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
    synergy: 0,
},
{
    position: 7,
    name: "Code Refactoring",
    type: "deck2",
    graphic: "placeholderGraphic/codeRefactoring.jpg",
},
{
    position: 8,
    name: "Git Gardens",
    type: "skill",
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
    synergy: 0,
},
{
    position: 9,
    name: "Github Grove",
    type: "skill",
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
    synergy: 0,
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
    name: "NPM Narrows",
    type: "skill",
    graphic: "placeholderGraphic/npmNarrows.jpg",
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
    synergy: 0,
},
{
    position: 12,
    name: "CRUD Database",
    type: "skillset",
    graphic: "placeholderGraphic/crudDatabase.jpg",
    price: 150,
    m0: 4,
    m1: 10
    owner: "",
    debt: false,
    synergy: 0,
},
{
    position: 13,
    name: "Javascript Junction",
    type: "skill",
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
    synergy: 0,
},
{
    position: 14,
    name: "NodeJS Neighborhood",
    type: "skill",
    graphic: "placeholderGraphic/nodejsNeighborhood.jpg",
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
    synergy: 0,
},
{
    position: 15,
    name: "Trello Terrace",
    type: "groupskill",
    graphic: "placeholderGraphic/trelloTerrace.jpg",
    price: 200,
    c0: 25,
    c1: 50,
    c2: 100,
    c3: 200,
    owner: "",
    debt: false,
    synergy: 0,
},
{
    position: 16,
    name: "VSCode Villa",
    type: "skill",
    graphic: "placeholderGraphic/vscodeVilla.jpg",
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
    synergy: 0,
},
{
    position: 17,
    name: "Data Structures and Algorithms",
    type: "deck1",
    graphic: "placeholderGraphic/dataStructuresandAlgorithms.jpg",
},
{
    position: 18,
    name: "HTML Heights",
    type: "skill",
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
    synergy: 0,
},
{
    position: 19,
    name: "CSS Corner",
    type: "skill",
    graphic: "placeholderGraphic/cssCorner.jpg",
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
    synergy: 0,
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
    synergy: 0,
},
{
    position: 22,
    name: "Code Refactoring",
    type: "deck2",
    graphic: "placeholderGraphic/codeRefactoring.jpg",
},
{
    position: 23,
    name: "Forms Forest",
    type: "skill",
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
    synergy: 0,
},
{
    position: 24,
    name: "Events Estate",
    type: "skill",
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
    synergy: 0,
},
{
    position: 25,
    name: "Wireframes Way",
    type: "groupskill",
    graphic: "placeholderGraphic/wireframesWay.jpg",
    price: 200,
    c0: 25,
    c1: 50,
    c2: 100,
    c3: 200,
    owner: "",
    debt: false,
    synergy: 0,
},
{
    position: 26,
    name: "Postman Parkway",
    type: "skill",
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
    synergy: 0,
},
{
    position: 27,
    name: "Promises Plaza",
    type: "skill",
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
    synergy: 0,
},
{
    position: 28,
    name: "RESTful APIs",
    type: "skillset",
    graphic: "placeholderGraphic/restfulApi.jpg",
    price: 150,
    m0: 4,
    m1: 10
    owner: "",
    debt: false,
    synergy: 0,
},
{
    position: 29,
    name: "Promises Plaza",
    type: "skill",
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
    synergy: 0,
},

Water Break - 20 - corner3
DOM Drive - 21E - skill
Code Refactoring - 22 Deck2 
Forms Forest - 23E - skill
Events Estate -24E - skill
Wireframes Way - 25 RR - groupskill
Postman Parkway - 26F - skill
Promises Plaza - 27F - skil
RESTful APIs - 28 Util - skilset, uses m0 instead of c0
API Alley - 29F - skill
Go to Debugging - 30 - corner4

React Road - 31G - skill
Pair Projects - 32G - skill
Data Structures and Algorithms - 33 Deck1
Express Estate- 34G - skill
Agile Avenue - 35 RR - groupskill
Code Refactoring - 36 Deck2
PostgreSQL - 37H - skill
Tech Upgrade - 38 - tax2
Optimization Oasis - 39H - skill


0 corner1 Iterate
1A Algorithm Alley skill
2 DSA Deck1
3A Scope Square skill
4 tax1 performance optimization
5 groupskill ERD Estates (increase synergy)
NPM Narrows - 6B skill
Code Refactoring - 7 Card2 
Git Gardens - 8B skill
Github Grove - 9B skill
corner2 Debugging / Just Testing - 10

NPM Narrows - 11C skill
CRUD Database - 12Util skillset, uses m0 instead of c0 (multiplier)
Javascript Junction - 13C skill
NodeJS Neighborhood -14C skill
Trello Terrace - 15 RR groupskill
VSCode Villa - 16D skill
Data Structures and Algorithms - 17 Deck1
HTML Heights - 18D skill
CSS Corner - 19D skill
*/