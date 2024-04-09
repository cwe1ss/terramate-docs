import{_ as e,c as a,o as t,a4 as i}from"./chunks/framework.Bl20_RFa.js";const g=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"cloud/getting-started/index.md","filePath":"cloud/getting-started/index.md"}'),n={name:"cloud/getting-started/index.md"},o=i(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="sign-up-as-a-new-user" tabindex="-1">Sign up as a new user <a class="header-anchor" href="#sign-up-as-a-new-user" aria-label="Permalink to &quot;Sign up as a new user&quot;">​</a></h2><h3 id="first-time-sign-in" tabindex="-1">First Time Sign in <a class="header-anchor" href="#first-time-sign-in" aria-label="Permalink to &quot;First Time Sign in&quot;">​</a></h3><p>When signing up to the platform at <a href="https://cloud.terramate.io/" target="_blank" rel="noreferrer">cloud.terramate.io</a>, you are asked to choose a social login provider to sign in with.</p><p>Terramate Cloud offers to sign in using:</p><ul><li>A Google Workspace Account (formerly known as GSuite Account),</li><li>A GitHub Account (coming soon; please <a href="mailto:hello@terramate.io" target="_blank" rel="noreferrer">get in touch with support</a>), or</li><li>A Microsoft Account (coming soon; please <a href="mailto:hello@terramate.io" target="_blank" rel="noreferrer">get in touch with support</a>).</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you are not a registered early access customer yet, your domain might not be allowed-listed yet, and you will need to <a href="mailto:hello@terramate.io" target="_blank" rel="noreferrer">contact our support</a> to book a demo and get early access.</p></div><h3 id="configuring-your-profile" tabindex="-1">Configuring your Profile <a class="header-anchor" href="#configuring-your-profile" aria-label="Permalink to &quot;Configuring your Profile&quot;">​</a></h3><p>Upon the first sign-in, your profile will need to be created. You need to choose a display name and set your company position. Using your real name or a name your team recognizes is recommended.</p><h3 id="creating-or-joining-an-organization" tabindex="-1">Creating or Joining an Organization <a class="header-anchor" href="#creating-or-joining-an-organization" aria-label="Permalink to &quot;Creating or Joining an Organization&quot;">​</a></h3><p>After setting up your profile, you can join an organization you are invited to or create a new one.</p><p>You can be a member of multiple organizations simultaneously and thus part of multiple teams.</p><p>Select the “join” button to join an organization, and you will become an active member. After this, you can “visit” your newly joined organization.</p><p>Creating a new organization is as easy as joining one.</p><p>You can choose a display name of your new organization and an organization&#39;s short name. The short name will be used in URLs (<code>https://cloud.terramate.io/o/{short-name}</code>) when visiting the organization or in Terramate CLI when selecting the organization to sync or receive data from.</p><h3 id="inviting-your-team" tabindex="-1">Inviting your team <a class="header-anchor" href="#inviting-your-team" aria-label="Permalink to &quot;Inviting your team&quot;">​</a></h3><p>After creating a new organization, you can invite your teammates by e-mail.</p><p>You can select any number of e-mail addresses to invite, or you can skip this step to invite your team later from the Organization Management area.</p><h3 id="the-dashboard" tabindex="-1">The dashboard <a class="header-anchor" href="#the-dashboard" aria-label="Permalink to &quot;The dashboard&quot;">​</a></h3><p>Initially, you will be located on the organization&#39;s dashboard. If no data has been synchronized to your organization so far, instructions to do so will lead you to this documentation.</p><h2 id="connecting-the-cli" tabindex="-1">Connecting the CLI <a class="header-anchor" href="#connecting-the-cli" aria-label="Permalink to &quot;Connecting the CLI&quot;">​</a></h2><p>To synchronize the first data with your new Terramate Cloud Organization, you must also sign in from your CLI after signing up with the cloud.</p><p>You can use <a href="./../../cli/cmdline/cloud/cloud-login"><code>terramate cloud login</code></a> to log in to Terramate Cloud. A browser window will allow you to select the Google Workspace Account you want to sign in with.</p><p>You need to select the same account you just signed up with to use Terramate CLI with your Terramate Cloud Organization.</p><p>You can validate you are connected to the correct Terramate Cloud Organization using <a href="./../../cli/cmdline/cloud/cloud-info"><code>terramate cloud info</code></a>:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-xlxOh" id="tab-KGnBmjL" checked="checked"><label for="tab-KGnBmjL">shell</label><input type="radio" name="group-xlxOh" id="tab-qZZcejh"><label for="tab-qZZcejh">output</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cloud</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> signed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provider:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Social</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Provider</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Display</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">email:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you@example.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">organizations:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example</span></span></code></pre></div></div></div><p>After successful sign-in via Terramate CLI, it is recommended to persist the selected cloud organization to your configuration by creating a config section in e.g., your <code>terramate.tm.hcl</code> file as shown here, but replacing <code>&quot;example&quot;</code> with the selected short name of your organization:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    cloud</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      organization</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Terramate CLI is now aware of Terramate Cloud and can be used to synchronize data.</p><h2 id="synchronizing-initial-terraform-drift-information" tabindex="-1">Synchronizing initial Terraform drift information <a class="header-anchor" href="#synchronizing-initial-terraform-drift-information" aria-label="Permalink to &quot;Synchronizing initial Terraform drift information&quot;">​</a></h2><p>For this next step, you need to have a repository containing some Terramate Stacks and access to run a <code>terraform plan</code> command. If you have a repository with directories containing plain terraform configuration, you can detect Terraform stacks using <code>terramate create --all-terraform</code> and configure them as Terramate Stacks.</p><p>Each stack requires a unique Stack ID. If you did not set stack IDs, you can use <code>terramate create --ensure-stack-ids</code> to generate an ID for all available stacks. Be sure to git commit your changes if you created stack ids.</p><p>It is recommended to execute the initial drift synchronization with clean git status: not having any uncommitted or untracked files and being on a merged and stable state of your IaC.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The following commands expect your environment or Terraform configuration to allow you to run the terraform plan without any additional steps. If you are using toolings like <a href="https://github.com/99designs/aws-vault" target="_blank" rel="noreferrer">aws-vault</a> or another authentication wrapper, you will need to replace Terraform with your wrapper call, e.g., <code>aws-vault exec my profile terraform</code> or wrap the full terramate call.</p></div><h1 id="on-boarding" tabindex="-1">On-boarding <a class="header-anchor" href="#on-boarding" aria-label="Permalink to &quot;On-boarding&quot;">​</a></h1><ol><li>Execute <code>terramate run terraform init</code> to initialize terraform in all available stacks.</li><li>Execute <code>terramate run --cloud-sync-drift-status --cloud-sync-terraform-plan-file=drift.tfplan -- terraform plan -detailed-exitcode -out drift.tfplan</code> to synchronize your drift plans. Continue reading to understand what will happen before actually executing the command.</li></ol><p>Terramate CLI will do the following things when executing the command:</p><ol><li><p><code>terramate</code> will <code>run</code> a <code>terraform plan -detailed-exitcode -out drift.tfplan</code> in every stack available.</p><ol><li><p>The <code>-detailed-exitcode</code> will ensure we get information about planned changes. Terraform will exit with an exit code of</p><ul><li><code>0</code> in case the plan was created successfully and no changes were planned.</li><li><code>1</code> in case there have been errors and a plan could not be created.</li><li><code>2</code> in case the plan was created successfully and changes have been planned.</li></ul><p>Terramate CLI will interpret the exit code accordingly and synchronize the status to the cloud.</p></li><li><p>The <code>-out drift.tfplan</code> tells Terraform to store the planned changes in a file within each stack called <code>drift.tfplan</code></p></li></ol></li><li><p>The <code>--cloud-sync-drift-status</code> option will ensure Terramate CLI honors the <code>detailed-exitcode</code> of Terraform and synchronize the status to Terramate Cloud</p></li><li><p>The <code>--cloud-sync-terraform-plan-file=drift.tfplan</code> is an additional option ensuring that Terramate CLI synchronizes the drift details to Terramate Cloud. We are using the same name for the plan file that was created using <code>terrafrom plan</code>.</p><p>Terramate CLI will redact all sensitive fields before synchronizing the details to Terramate Cloud as a terraform plan file can contain sensitive information. In addition, the Terramate Cloud Backend will redact the values again before persisting them in case someone synchronizes a Terraform Plan without using Terramate CLI.</p></li></ol><p>After this command is executed and all stacks have been synchronized, you can visit the dashboard on Terramate Cloud again and see the results of your drift synchronization.</p><p>In the best case, you will have zero drifts detected. In any other case, you can review drifts also from the CLI:</p><ol><li>Start with identifying all drifted stacks by running <code>terramate list --cloud-status drifted</code></li><li>If stacks are listed using the previous command, enter a stack (change directory using <code>cd</code>) that has a drift and show the drift details using <code>terramate cloud drift show</code> from the stacks directory. This command will print the Terraform plan details and is callable by any user that is part of your organization and connected to the Terramate cloud. No additional cloud access is required, this means this command can be executed without having access to run a <code>terraform plan</code> allowing to set up a least needed privilege access structure. Any known sensitive information is redacted from the plan.</li></ol><h3 id="summary-of-steps-required-to-use-terramate-cli-and-cloud" tabindex="-1">Summary of steps required to use Terramate CLI and Cloud <a class="header-anchor" href="#summary-of-steps-required-to-use-terramate-cli-and-cloud" aria-label="Permalink to &quot;Summary of steps required to use Terramate CLI and Cloud&quot;">​</a></h3><ul><li><code>terramate create --all-terraform</code> (optional, if not yet using Terramate Stacks)</li><li><code>terramate create --ensure-ids</code> (optional, if using Terramate Stacks but not having ids configured yet)</li><li>persist cloud organization in Terramate configuration (optional, recommended)</li><li><code>terramate cloud login</code> login to Terramate Cloud, requires signup via web on <a href="http://cloud.terramate.io" target="_blank" rel="noreferrer">cloud.terramate.io</a> and being an active member of an organization.</li><li><code>terramate run terraform init</code> initialize terraform in all stacks</li><li><code>terramate run --cloud-sync-drift-status --cloud-sync-terraform-plan-file=drift.tfplan -- terraform plan -detailed-exitcode -out drift.tfplan</code> detect drifts in all stacks.</li><li><code>terramate list --cloud-status drifted</code> to see drifted stacks in CLI (optional)</li></ul>`,43),r=[o];function s(l,d,c,h,u,p){return t(),a("div",null,r)}const f=e(n,[["render",s]]);export{g as __pageData,f as default};