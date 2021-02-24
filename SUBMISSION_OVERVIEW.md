---


---

<h1 id="submission-overview">Submission Overview:</h1>
<h2 id="dev-technologies">Dev Technologies</h2>
<ul>
<li><a href="https://trello.com/invite/b/kopcvyMk/9616e91ac8690334b97cdd2284152f06/nycc-code-challenge">Trello Board</a></li>
<li><a href="https://documenter.getpostman.com/view/6222631/TWDZJc9J#intro">Postman</a></li>
<li><a href="https://pipenv.pypa.io/en/latest/">Pipenv</a></li>
<li><a href="https://classic.yarnpkg.com/en/">Yarn</a></li>
<li><a href="https://github.com/">GitHub</a></li>
</ul>
<h2 id="tech-stack">Tech Stack</h2>
<p><strong>Backend</strong></p>
<ul>
<li><a href="https://www.django-rest-framework.org/">Django Rest Framework</a></li>
</ul>
<p><strong>Frontend</strong></p>
<ul>
<li><a href="https://reactjs.org/">React.js</a></li>
<li><a href="https://react-bootstrap.github.io/">React Bootstrap</a></li>
<li><a href="https://reactrouter.com/web/guides/quick-start">React Router</a></li>
<li><a href="https://react-table.tanstack.com/">React Table</a></li>
<li><a href="https://react-icons.github.io/react-icons/">React Icons</a></li>
<li><a href="https://www.npmjs.com/package/node-sass">Node-Sass</a></li>
<li><a href="https://www.npmjs.com/package/react-csv">React CSV</a></li>
<li><a href="https://nivo.rocks/">Nivo Charts</a></li>
<li><a href="https://momentjs.com/">Moment.js</a></li>
<li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
</ul>
<h2 id="api-endpoints">API endpoints</h2>
<p><strong>Base Url</strong><br>
<code>localhost:8000</code></p>
<p><strong>Original</strong><br>
| <code>/admin/</code> | GET | Log in for superusers into the Django admin portal |<br>
| <code>/login/</code> | POST | Accepts username and password and returns a <strong>token</strong>. Use this <strong>token</strong> to authorize use of other endpoints. View the <a href="https://www.django-rest-framework.org/api-guide/authentication/#basicauthentication">documentation</a> |<br>
| <code>/api/complaints/</code> | GET | Returns <strong>all complaints</strong> |<br>
| <code>/api/complaints/openCases/</code> | GET | Returns <strong>all open complaints</strong> |<br>
| <code>/api/complaints/closedCases/</code> | GET | Returns <strong>all closed complaints</strong> |<br>
| <code>/api/complaints/topComplaints/</code> | GET | Returns <strong>top 3 complaint types</strong> |<br>
<strong>Added*</strong><br>
| <code>/api/userPofile/user/</code> | GET | Returns <strong>all user profiles</strong> |<br>
| <code>/api/userPofile/user/:id</code> | GET | Returns <strong>a single user profile</strong> |<br>
| <code>/api/userPofile/user/get-profile/</code> | GET | Returns <strong>user’s profile based on token in the Authorization header</strong></p>
<p>* <strong>Note</strong>: I didn’t actually crate a ‘user profile app’. I only added the userProfile prefix to be semantic. You can get the the user endpoints the same as the  complaints. i.e. <code>/api/complaints/user/get-profile</code> etc.</p>
<h2 id="frontend-state-management">Frontend State Management</h2>
<p><strong>useContext</strong></p>
<ul>
<li>UserContext - Provider in App.js hands authentication and profile information down to all components</li>
<li>DashBoardContext - Provider in DashboardPage.js - Hands all district complaint data down to Dashboard 		    components</li>
</ul>
<h2 id="frontend-optimization-strategies">Frontend Optimization Strategies</h2>
<p><strong>useMemo</strong><br>
Making good use of the useMemo hook to cache backend data that has been converted  into table data. No need to convert data on every page re-render.<br>
<strong>Debouncing</strong><br>
Although the complaint data sets are not too large, the search bar above the complaints data table has been ‘debounced’ from key up events in the input onChange function. Searches will not be executed until the there is a significant period of time  between keyup events (200ms).</p>
<h2 id="application-structure">Application Structure</h2>
<p><strong>Component  Hierarchy</strong></p>
<div class="mermaid"><svg xmlns="http://www.w3.org/2000/svg" id="mermaid-svg-fddnliqvEOsfoYZm" width="100%" style="max-width: 232.140625px;" viewBox="0 0 232.140625 313.078125"><g transform="translate(-12, -12)"><g class="output"><g class="clusters"></g><g class="edgePaths"><g class="edgePath" style="opacity: 1;"><path class="path" d="M107.7280993852459,66L67.5234375,104L67.5234375,142" marker-end="url(#arrowhead3680)" style="fill:none"></path><defs><marker id="arrowhead3680" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M156.3969006147541,66L196.6015625,104L196.6015625,142" marker-end="url(#arrowhead3681)" style="fill:none"></path><defs><marker id="arrowhead3681" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M67.5234375,188L67.5234375,213L67.5234375,238" marker-end="url(#arrowhead3682)" style="fill:none"></path><defs><marker id="arrowhead3682" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M196.6015625,188L196.6015625,213L196.6015625,238" marker-end="url(#arrowhead3683)" style="fill:none"></path><defs><marker id="arrowhead3683" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" transform="translate(67.5234375,104)" style="opacity: 1;"><g transform="translate(-47.5234375,-13)" class="label"><foreignObject width="95.046875" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Private Route</span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g></g><g class="nodes"><g class="node" id="A" transform="translate(132.0625,43)" style="opacity: 1;"><rect rx="0" ry="0" x="-24.390625" y="-23" width="48.78125" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-14.390625,-13)"><foreignObject width="28.78125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">App</div></foreignObject></g></g></g><g class="node" id="B" transform="translate(67.5234375,165)" style="opacity: 1;"><rect rx="5" ry="5" x="-26.9765625" y="-23" width="53.953125" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-16.9765625,-13)"><foreignObject width="33.953125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Page</div></foreignObject></g></g></g><g class="node" id="C" transform="translate(196.6015625,165)" style="opacity: 1;"><rect rx="5" ry="5" x="-26.9765625" y="-23" width="53.953125" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-16.9765625,-13)"><foreignObject width="33.953125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Page</div></foreignObject></g></g></g><g class="node" id="D" transform="translate(67.5234375,277.5390625)" style="opacity: 1;"><circle x="-39.5390625" y="-23" r="39.5390625"></circle><g class="label" transform="translate(0,0)"><g transform="translate(-29.5390625,-13)"><foreignObject width="59.078125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Children</div></foreignObject></g></g></g><g class="node" id="E" transform="translate(196.6015625,277.5390625)" style="opacity: 1;"><circle x="-39.5390625" y="-23" r="39.5390625"></circle><g class="label" transform="translate(0,0)"><g transform="translate(-29.5390625,-13)"><foreignObject width="59.078125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Children</div></foreignObject></g></g></g></g></g></g></svg></div>
<p><strong>Corresponding File Structure</strong><br>
| Src<br>
&nbsp;&nbsp;&nbsp;&nbsp;| Pages (directory)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| DashbaordPage (diretory)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| DashboardPage.js (file)*<br>
&nbsp;&nbsp;&nbsp;| Components (directory)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Dashbaord (directory)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Dashboard.js (file)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Dashboard.scss (file)**<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| ChildOne.js (file)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| ChileTwo.js (file)<br>
&nbsp;&nbsp;&nbsp;&nbsp;App.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;App.scss</p>
<p>*<strong>Note</strong> All page components are wrapped in a Layout component<br>
**<strong>Note</strong> Eevery Directory typically has at least one scss files which is imported into App.scss</p>

