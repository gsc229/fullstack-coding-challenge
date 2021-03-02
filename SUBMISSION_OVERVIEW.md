---


---

<h1 id="submission-overview">Submission Overview:</h1>
<h2 id="dev-technologies">Dev Technologies</h2>
<ul>
<li><a href="https://trello.com/invite/b/kopcvyMk/9616e91ac8690334b97cdd2284152f06/nycc-code-challenge">Trello Board</a></li>
<li><a href="https://documenter.getpostman.com/view/6222631/TWDZJc9J#intro">Postman (click for project api documentation)</a></li>
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
<code>localhost:8000</code><br>
<a href="https://documenter.getpostman.com/view/6222631/TWDZJc9J#intro"><strong>Postman Documentation</strong></a></p>
<p><strong>Original</strong></p>

<table>
<thead>
<tr>
<th>Route</th>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/admin/</code></td>
<td>GET</td>
<td>Log in for superusers into the Django admin portal</td>
</tr>
<tr>
<td><code>/login/</code></td>
<td>POST</td>
<td>Accepts username and password and returns a <strong>token</strong>. Use this <strong>token</strong> to authorize use of other endpoints. View the <a href="https://www.django-rest-framework.org/api-guide/authentication/#basicauthentication">documentation</a></td>
</tr>
<tr>
<td><code>/api/complaints/</code></td>
<td>GET</td>
<td>Returns <strong>all complaints</strong></td>
</tr>
<tr>
<td><code>/api/complaints/openCases/</code></td>
<td>GET</td>
<td>Returns <strong>all open complaints</strong></td>
</tr>
<tr>
<td><code>/api/complaints/closedCases/</code></td>
<td>GET</td>
<td>Returns <strong>all closed complaints</strong></td>
</tr>
<tr>
<td><code>/api/complaints/topComplaints/</code></td>
<td>GET</td>
<td>Returns <strong>top 3 complaint types</strong></td>
</tr>
</tbody>
</table><p><strong>Added</strong></p>

<table>
<thead>
<tr>
<th>Route</th>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/api/userPofile/user/</code></td>
<td>GET</td>
<td>Returns <strong>all user profiles*</strong></td>
</tr>
<tr>
<td><code>/api/userPofile/user/:id</code></td>
<td>GET</td>
<td>Returns <strong>a single user profile</strong></td>
</tr>
<tr>
<td><code>/api/userPofile/user/get-profile/</code></td>
<td>GET</td>
<td>Returns <strong>user’s profile based on token in the Authorization header</strong></td>
</tr>
<tr>
<td><code>/api/complaints/allCases/type-totals</code></td>
<td>GET</td>
<td>Returns <strong>breakdown of complaint totals by complaint type</strong></td>
</tr>
<tr>
<td><code>api/complaints/allCases/zip-totals</code></td>
<td>GET</td>
<td>Returns <strong>breakdown of total complaints in each zip code</strong></td>
</tr>
<tr>
<td><code>/api/complaints/allCases/borough-totals</code></td>
<td>GET</td>
<td>Returns <strong>breakdown of total complaints in each borough</strong></td>
</tr>
<tr>
<td><code>/api/complaints/allCases/zip-and-type</code></td>
<td>GET</td>
<td>Returns <strong>breakdown of the complaint types and totals for every zip code</strong></td>
</tr>
<tr>
<td><code>/api/complaints/allCases/zip-and-type?zipcode=11208</code></td>
<td>GET</td>
<td>Returns <strong>breakdown of complaint types and totals for a single zip code</strong></td>
</tr>
<tr>
<td><code>/api/complaints/allCases/borough-and-type</code></td>
<td>GET</td>
<td>Returns <strong>breakdown of the complaint types and totals for every borough</strong></td>
</tr>
<tr>
<td><code>/api/complaints/allCases/borough-and-type?borough=Manhattan</code></td>
<td>GET</td>
<td>Returns <strong>breakdown of complaint types and totals for a single borough</strong></td>
</tr>
</tbody>
</table><p>* <strong>Note</strong>: I didn’t actually create a ‘user profile app’. I only added the userProfile prefix to be semantic. You can get the the user endpoints the same as the  complaints. i.e. <code>/api/complaints/user/get-profile</code> etc.</p>
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
Although the complaint data sets are not too large, the search bar above the complaints data table has been ‘debounced’ in case the application were ever needed to scale up. Searches will not be executed until the there is a significant period of time  between keyup events in the onChange function (200ms).</p>
<h2 id="application-structure">Application Structure</h2>
<p><strong>Component  Hierarchy</strong><br>
<a href="https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiXG5ncmFwaCBUQlxuQVtBcHBdIFxuQSAtLSBQcml2YXRlIFJvdXRlIC0tPiBCKFBhZ2UpXG5BIC0tPiBDKFBhZ2UpXG5CIC0tPiBEKChDaGlsZHJlbikpXG5DIC0tPiBFKChDaGlsZHJlbikpXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ"><img src="https://mermaid.ink/img/eyJjb2RlIjoiXG5ncmFwaCBUQlxuQVtBcHBdIFxuQSAtLSBQcml2YXRlIFJvdXRlIC0tPiBCKFBhZ2UpXG5BIC0tPiBDKFBhZ2UpXG5CIC0tPiBEKChDaGlsZHJlbikpXG5DIC0tPiBFKChDaGlsZHJlbikpXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ" alt=""></a></p>
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
**<strong>Note</strong> Eevery directory typically has at least one scss file which is imported into App.scss</p>

