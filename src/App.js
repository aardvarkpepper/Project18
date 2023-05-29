import ColorProperty from "./components/ColorProperty.jsx";
import Corner from "./components/Corner.jsx";
import './App.css';

const App = () => {
  return (
    <div className="App">

      "Technical Debt" - "debt" property.
      boardProperty changes whenever goes into or comes out of technical debt.
      "Consulting Fee" - 
      "Proficiency" / "Mastery" - upgrade with cash.
      "Synergy" - increases as more of the group is owned.

      Roll doubles 3 times and go to debugging

      2500 start money.  Developer dice AFTER land on go or pass over. 2 developer, 1 focus, 1 2 3.
      Doubles do NOT count developer die.  three of a kind move anywhere you like.  Developer dice NOT used
      if sent to jail on third doubles.
      
      Do NOT use speed dice for jail.  Sum ALL 3 dice when paying utility.  Bus and Monopoly Mr value at 0.

      If NOT buy skill, is auction.
      Verification style.

      Build and break down evenly.

      Player based "cheating" skills - later.

      Upgrade skills / mastery any time.
      Unimproved spots but NOT upgrades may be sold to any player by agreement.
      But no skill may be sold to another player if ANY upgrades on ANY skills in that group.

     Skills and mastery sold back to bank half price.  If not enough skills available, only
     available skills may be placed.

      Bankrupt: pay to player or bank; if player turn over all of value and retire.
      If own upgrade skills/mastery, sell to bank half price.

      Traded technical debt skills must pay 10% to bank immediately, then immediately pay
      off rest OR leave in technical debt and pay 10% AGAIN later.

      "SKILL CERTIFICATE" (rework name)
      SKIL NAME 
      rent
      rent with color set 
      rent with 1 skill upgrade
      2, 3, 4, mastery
      skills cost x Each
      mastery cost x each plus 4 skill


      CSS dice animation.

      Whenever a skill is bought, sold, or traded, all other skils in the group are checked.
      This may increase or decrease synergy, depending on type.



3 dice, 32 skill, 12 mastery, code refactoring  and datastructureandalgorithm cards, skill certificate,
money for look, and some game modes.


      Global style:  board (and element) size,
      Language

      Each skill 3 wide, 5 tall.  (9 per side).  Additional 1 for identifiers below skills.
      Corners 5 square.
      Central 27 by 27

      Skill cards 6.25 tall, 4 wide.  Consider re-framing as horizontal though, but data display issue.

      Code refactoring, datastructureandalgorithm cards, same dimensions.  Source pictures.

      Developer-themed icons like cactus, straw hat, dog.

      Skills 1x1, little less "high". Masteries 1.5 x 1 deep 1.25 "tall".

      up to 8 players

UX/UI Uptown
Security Square
AI Avenue, Acres, Abbey, Arbor
Blockchain Boulevard
Open Source Oasis
Debugging Drive
JSON Junction
Encapsulation Expressway
Stack Street
Websocket Way
Object-Oriented Oasis
Testing Terrace
Version Control Valley
Optimization Oasis
Template Terrace
Responsive Road
Scalability Street
Cloud Corner
Automation Alley
Machine Learning Manor
Full Stack Street



Algorithm Alley - 1
Control Flow
Functions
Arrays
Scope Square - 2
Objects
Expressions
Collaborative Programming
Markdown
NPM Narrows - 3
Git Gardens - 4
Github Grove - 5
Methods
Higher Order Functions
Error Handling

Replit
NPM Narrows - 6
Javascript Junction - 7
NodeJS Neighborhood -8
VSCode Villa - 9
HTML Heights - 10
CSS Corner - 11
DOM Drive - 12
Forms Forest - 13
Events Estate
Postman Parkway - 14
Promises Plaza - 15
API Alley - 16

Flexbox
Grid Garden
Merge Conflicts
Promises and Fetch
Async Await


NPM
React Road - 17
React State
React Router Row
CRUD Corner - 18Y
Bootstrap Boulevard
Pair Projects - 19



Express Estate- 20
Axios Acres - 21
PostgreSQL - 22
Postman Park - 23
PERN Plaza - 24X

ERD - 25A Entity Relationship Diagram
Trello Terrace - 26B
Wireframes Way - 27C
Agile Avenue - 27D


Data Structures and Algorithms - Community Chest
Contingency Planning - Chance

Crowdfunding
Debugging / Just Testing
Water Break
Go To Debugging

      <div className="board">
        <Corner />
        <ColorProperty />
        <ColorProperty />
        <ColorProperty />
        <ColorProperty />
        <ColorProperty />
        <ColorProperty />
        <ColorProperty />
        <ColorProperty />
        <ColorProperty />
        <Corner />
      </div>


    </div>
  );
};
export default App;
