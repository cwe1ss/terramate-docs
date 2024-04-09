import{_ as e,c as t,o as a,a4 as o}from"./chunks/framework.Bl20_RFa.js";const b=JSON.parse('{"title":"Configure Terramate","description":"Learn about the different configuration options in Terramate ranging from avoiding duplication by leveraging powerful code generation to flexible orchestration.","frontmatter":{"title":"Configure Terramate","description":"Learn about the different configuration options in Terramate ranging from avoiding duplication by leveraging powerful code generation to flexible orchestration."},"headers":[],"relativePath":"cli/configuration/index.md","filePath":"cli/configuration/index.md"}'),i={name:"cli/configuration/index.md"},r=o(`<h1 id="terramate-configuration-overview" tabindex="-1">Terramate Configuration Overview <a class="header-anchor" href="#terramate-configuration-overview" aria-label="Permalink to &quot;Terramate Configuration Overview&quot;">​</a></h1><p>Different configurations can be done in Terramate, ranging from avoiding duplication by leveraging powerful code generation to flexible orchestration by allowing control of stacks order of execution.</p><p>To do so, Terramate works with configuration files that have the suffixes:</p><ul><li><code>tm.hcl</code></li><li><code>tm</code></li></ul><h2 id="configuration-files" tabindex="-1">Configuration files <a class="header-anchor" href="#configuration-files" aria-label="Permalink to &quot;Configuration files&quot;">​</a></h2><p>Terramate files can be found in any non-hidden directory of a Terramate project and all non-hidden files in a single directory will be handled as the concatenation of all of them in a single file, forming a single <strong>configuration</strong>.</p><p>The configuration blocks can be defined multiple times and their values are merged whenever possible. See <a href="#config-merging">Config Merging</a> for details.</p><h2 id="importing-configurations" tabindex="-1">Importing configurations <a class="header-anchor" href="#importing-configurations" aria-label="Permalink to &quot;Importing configurations&quot;">​</a></h2><p>Each configuration can import other configurations using the <code>import</code> block. See the example below:</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># globals.tm.hcl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # import a specific file</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    source</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/more/globals.tm.hcl&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The import block supports globs as well:</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># globals.tm.hcl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # import all files in a directory</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    source</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/imports/*.tm.hcl&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The <code>source</code> must reference a file using a relative path or an absolute path relative to the project&#39;s root. Only files inside the project can be imported and they must be from disjoint directories, which means you cannot import files from parent directories as they&#39;re already visible in the child configuration.</p><p>The <em>imported</em> file is handled as if it&#39;s in the directory of the <em>importing</em> file, then the same <a href="#config-merging">merging strategy</a> applies for the case of duplicated blocks being defined.</p><p>The <code>import</code> block do not support <a href="#config-merging">merging</a> of its attributes and multiple blocks can be defined in the same file or directory given that their <code>source</code> attributes are different. In other words, each file can only be imported once into a single configuration set.</p><p>An imported file can import other files but cycles are not allowed.</p><h2 id="terramate-projects" tabindex="-1">Terramate Projects <a class="header-anchor" href="#terramate-projects" aria-label="Permalink to &quot;Terramate Projects&quot;">​</a></h2><p>A Terramate project is essentially a collection of Terraform code organized into stacks.</p><p>It is not a hard requirement for Terramate to work that the project uses Git for version control (support to other VCS might be added in the future), but features like change detection do depend on a VCS to work and will fail if this soft requirement is not met.</p><p>In general, a Terramate project looks like this:</p><ul><li>A Git project.</li><li>The git top-level dir is the project root dir.</li><li>Stacks are organized as different directories.</li><li>Configuration may be present on any directory.</li></ul><h1 id="config-merging" tabindex="-1">Config merging <a class="header-anchor" href="#config-merging" aria-label="Permalink to &quot;Config merging&quot;">​</a></h1><p>Multiple configuration blocks of the same type defined in a directory are merged into a single configuration, provided their contents do not conflict. For instance, the block definitions can be split into several blocks, with each one defining a part of the whole. The exceptions to this are the <a href="./../code-generation/">generate</a> and <code>import</code> blocks.</p><p>The <a href="./../code-generation/variables/globals">globals</a> block extends the merging to the hierarchy of globals.</p><p>For example, the configuration below is valid:</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    required_version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;~&gt; 0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            default_branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;main&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>And the blocks can also be defined in different files.</p><p>But the following is invalid:</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    required_version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;~&gt; 0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    required_version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;~&gt; 0.2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h1 id="skipping-directories" tabindex="-1">Skipping Directories <a class="header-anchor" href="#skipping-directories" aria-label="Permalink to &quot;Skipping Directories&quot;">​</a></h1><p>Terramate provides an option to ignore a non-hidden directory by creating an empty file named <code>.tmskip</code> inside the directory. Terramate features will ignore this directory and its contents, even if it contains Terramate files.</p><p>However, code located inside such a directory can still be imported.</p><h1 id="terramate-configuration-schema" tabindex="-1">Terramate Configuration Schema <a class="header-anchor" href="#terramate-configuration-schema" aria-label="Permalink to &quot;Terramate Configuration Schema&quot;">​</a></h1><p>The terramate configuration is defined by the following top-level blocks:</p><ul><li><a href="#terramate-block-schema">terramate</a></li><li><a href="#stack-block-schema">stack</a></li><li><a href="#globals-block-schema">globals</a></li><li><a href="#generate_file-block-schema">generate_file</a></li><li><a href="#generate_hcl-block-schema">generate_hcl</a></li><li><a href="#import-block-schema">import</a></li><li><a href="#vendor-block-schema">vendor</a></li></ul><h2 id="terramate-block-schema" tabindex="-1">terramate block schema <a class="header-anchor" href="#terramate-block-schema" aria-label="Permalink to &quot;terramate block schema&quot;">​</a></h2><p>For detailed information about this block, see the <a href="./../projects/configuration#project-configuration">Project Configuration</a> docs.</p><p>The <code>terramate</code> block has no labels, supports <a href="#config-merging">merging</a> and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td>required_version</td><td>string</td><td><a href="https://www.terraform.io/language/expressions/version-constraints" target="_blank" rel="noreferrer">version constraint</a></td></tr><tr><td>required_version_allow_prereleases</td><td>bool</td><td>Enable <em>prerelease</em> matches in the <code>required_version</code> constraint.</td></tr><tr><td><a href="#terramateconfig-block-schema">config</a></td><td>block</td><td>project configuration</td></tr></tbody></table><h2 id="terramate-config-block-schema" tabindex="-1">terramate.config block schema <a class="header-anchor" href="#terramate-config-block-schema" aria-label="Permalink to &quot;terramate.config block schema&quot;">​</a></h2><p>The <code>terramate.config</code> block has no labels and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><a href="#terramateconfiggit-block-schema">git</a></td><td>block</td><td>git configuration</td></tr><tr><td>disable_safeguards</td><td>set(string)</td><td>list of safeguards to be disabled</td></tr></tbody></table><h2 id="terramate-config-git-block-schema" tabindex="-1">terramate.config.git block schema <a class="header-anchor" href="#terramate-config-git-block-schema" aria-label="Permalink to &quot;terramate.config.git block schema&quot;">​</a></h2><p>The <code>terramate.config.git</code> block has no labels and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th><th>default</th></tr></thead><tbody><tr><td>default_branch</td><td>string</td><td>The default git branch</td><td></td></tr><tr><td>default_remote</td><td>string</td><td>The default git remote</td><td></td></tr><tr><td>default_branch_base_ref</td><td>string</td><td>The default git branch base reference</td><td></td></tr><tr><td>check_untracked</td><td>boolean</td><td>(DEPRECATED) Enable check of untracked files</td><td>true</td></tr><tr><td>check_uncommitted</td><td>boolean</td><td>(DEPRECATED) Enable check of uncommitted files</td><td>true</td></tr><tr><td>check_remote</td><td>boolean</td><td>(DEPRECATED) Enable checking if local main is updated with remote</td><td>true</td></tr></tbody></table><h2 id="terramate-config-generate-block-schema" tabindex="-1">terramate.config.generate block schema <a class="header-anchor" href="#terramate-config-generate-block-schema" aria-label="Permalink to &quot;terramate.config.generate block schema&quot;">​</a></h2><p>The <code>terramate.config.generate</code> block has no labels and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th><th>default</th></tr></thead><tbody><tr><td>hcl_magic_header_comment_style</td><td>string</td><td>The comment style used in \`generate_hcl\`\` blocks</td><td>&quot;//&quot;</td></tr></tbody></table><h2 id="terramate-config-run-block-schema" tabindex="-1">terramate.config.run block schema <a class="header-anchor" href="#terramate-config-run-block-schema" aria-label="Permalink to &quot;terramate.config.run block schema&quot;">​</a></h2><p>The <code>terramate.config.run</code> block has no labels and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th><th>default</th></tr></thead><tbody><tr><td>check_gen_code</td><td>boolean</td><td>(DEPRECATED) Enable check for up to date generated code</td><td>true</td></tr></tbody></table><h2 id="terramate-config-run-env-block-schema" tabindex="-1">terramate.config.run.env block schema <a class="header-anchor" href="#terramate-config-run-env-block-schema" aria-label="Permalink to &quot;terramate.config.run.env block schema&quot;">​</a></h2><p>The <code>terramate.config.run.env</code> block has no labels and it allows arbitrary attributes. Each attribute <strong>must</strong> evaluate to a string.</p><p>More details can be found <a href="./../projects/configuration#the-terramateconfigrunenv-block">here</a>.</p><h2 id="stack-block-schema" tabindex="-1">stack block schema <a class="header-anchor" href="#stack-block-schema" aria-label="Permalink to &quot;stack block schema&quot;">​</a></h2><p>The <code>stack</code> block has no labels, <strong>does not</strong> support <a href="#config-merging">merging</a> and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>The id of the stack</td></tr><tr><td>name</td><td>string</td><td>The name of the stack</td></tr><tr><td>description</td><td>string</td><td>The description of the stack</td></tr><tr><td>tags</td><td>list(string)</td><td>The tags of the stack</td></tr><tr><td>before</td><td>list(string)</td><td>The list of <code>before</code> stacks. See <a href="./../orchestration/#stacks-ordering">ordering</a> docs.</td></tr><tr><td>after</td><td>list(string)</td><td>The list of <code>after</code> stacks. See <a href="./../orchestration/#stacks-ordering">ordering</a> docs</td></tr><tr><td>wants</td><td>list(string)</td><td>The list of <code>wanted</code> stacks. See <a href="./../orchestration/#stacks-ordering">ordering</a> docs</td></tr><tr><td>watch</td><td>list(string)</td><td>The list of <code>watch</code> files. See <a href="./../change-detection/">change detection</a> for details</td></tr></tbody></table><h2 id="assert-block-schema" tabindex="-1">assert block schema <a class="header-anchor" href="#assert-block-schema" aria-label="Permalink to &quot;assert block schema&quot;">​</a></h2><p>The <code>assert</code> block has no labels, <strong>does not</strong> support <a href="#config-merging">merging</a>, can be defined multiple times and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td>assertion</td><td>boolean</td><td>If true assertion passed, fails otherwise</td></tr><tr><td>warning</td><td>boolean</td><td>True if the assertion is a warning</td></tr><tr><td>message</td><td>string</td><td>Message to show if assertion fails</td></tr></tbody></table><h2 id="globals-block-schema" tabindex="-1">globals block schema <a class="header-anchor" href="#globals-block-schema" aria-label="Permalink to &quot;globals block schema&quot;">​</a></h2><p>The <code>globals</code> block accepts any number of labels, supports <a href="#config-merging">merging</a>, accepts <strong>any</strong> attribute and supports any number of <a href="#map-block">map</a> blocks.</p><p>For more information about <code>globals</code>, see the <a href="./../code-generation/variables/globals">Globals</a> documentation.</p><h2 id="map-block-schema" tabindex="-1">map block schema <a class="header-anchor" href="#map-block-schema" aria-label="Permalink to &quot;map block schema&quot;">​</a></h2><p>The <code>map</code> block can only be used inside the <a href="#globals-block-schema">globals</a> block, requires 1 label and optionally accepts a <a href="#value-block-schema">value</a>.</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><code>for_each</code></td><td><code>list(any)</code></td><td>The input list</td></tr><tr><td><code>key</code></td><td><code>string</code></td><td>The computed key</td></tr><tr><td><code>value</code></td><td><code>any</code></td><td>The value for the key</td></tr><tr><td><a href="#value-block-schema"><code>value</code></a></td><td><code>block*</code></td><td>value properties</td></tr></tbody></table><p>The <code>value</code> block and the <code>value</code> attribute <strong>cannot</strong> be used together.</p><h2 id="value-block-schema" tabindex="-1">value block schema <a class="header-anchor" href="#value-block-schema" aria-label="Permalink to &quot;value block schema&quot;">​</a></h2><p>The <code>value</code> block does not support labels. It accepts multiple attributes of any name and value of type <code>any</code>. It supports any number of nested <a href="#map-block">map</a> blocks.</p><h2 id="generate-file-block-schema" tabindex="-1">generate_file block schema <a class="header-anchor" href="#generate-file-block-schema" aria-label="Permalink to &quot;generate_file block schema&quot;">​</a></h2><p>The <code>generate_file</code> block requires one label, <strong>do not</strong> support <a href="#config-merging">merging</a> and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><a href="#lets-block-schema">lets</a></td><td>block*</td><td>lets variables</td></tr><tr><td>condition</td><td>bool</td><td>The condition for generation</td></tr><tr><td>content</td><td>string</td><td>The content to be generated</td></tr></tbody></table><p>For detailed documentation about this block, see the <a href="./../code-generation/generate-file">File Code Generation</a> docs.</p><h2 id="generate-hcl-block-schema" tabindex="-1">generate_hcl block schema <a class="header-anchor" href="#generate-hcl-block-schema" aria-label="Permalink to &quot;generate_hcl block schema&quot;">​</a></h2><p>The <code>generate_hcl</code> block requires one label, <strong>do not</strong> support <a href="#config-merging">merging</a> and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><a href="#lets-block-schema">lets</a></td><td>block*</td><td>lets variables</td></tr><tr><td>condition</td><td>bool</td><td>The condition for generation</td></tr><tr><td><a href="#generate_hclcontent-block-schema">content</a></td><td>block</td><td>The content to be generated</td></tr></tbody></table><p>For detailed documentation about this block, see the <a href="./../code-generation/generate-hcl">HCL Code Generation</a> docs.</p><h2 id="lets-block-schema" tabindex="-1">lets block schema <a class="header-anchor" href="#lets-block-schema" aria-label="Permalink to &quot;lets block schema&quot;">​</a></h2><p>The <code>lets</code> block has no labels, supports <a href="#config-merging">merging</a> of blocks in the same level, accepts <strong>any</strong> attribute and supports any number of <a href="#map-block">map</a> blocks.</p><h2 id="generate-hcl-content-block-schema" tabindex="-1">generate_hcl.content block schema <a class="header-anchor" href="#generate-hcl-content-block-schema" aria-label="Permalink to &quot;generate_hcl.content block schema&quot;">​</a></h2><p>The <code>generate_hcl.content</code> block has no labels and accepts any valid HCL.</p><h2 id="import-block-schema" tabindex="-1">import block schema <a class="header-anchor" href="#import-block-schema" aria-label="Permalink to &quot;import block schema&quot;">​</a></h2><p>The <code>import</code> block has no labels, <strong>do not</strong> supports <a href="#config-merging">merging</a> and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td>source</td><td>string</td><td>The file path to be imported</td></tr></tbody></table><h2 id="vendor-block-schema" tabindex="-1">vendor block schema <a class="header-anchor" href="#vendor-block-schema" aria-label="Permalink to &quot;vendor block schema&quot;">​</a></h2><p>The <code>vendor</code> block has no labels, <strong>do not</strong> support <a href="#config-merging">merging</a> and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td>dir</td><td>string</td><td>Absolute path relative to root where vendored projects will be downloaded</td></tr><tr><td><a href="#vendormanifest--block-schema">manifest</a></td><td>block</td><td>The manifest for which files to vendor</td></tr></tbody></table><h2 id="vendor-manifest-block-schema" tabindex="-1">vendor.manifest block schema <a class="header-anchor" href="#vendor-manifest-block-schema" aria-label="Permalink to &quot;vendor.manifest block schema&quot;">​</a></h2><p>The <code>vendor.manifest</code> block has no labels, <strong>do not</strong> support <a href="#config-merging">merging</a> and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><a href="#vendormanifestdefault--block-schema">default</a></td><td>block</td><td>The default manifest</td></tr></tbody></table><h2 id="vendor-manifest-default-block-schema" tabindex="-1">vendor.manifest.default block schema <a class="header-anchor" href="#vendor-manifest-default-block-schema" aria-label="Permalink to &quot;vendor.manifest.default block schema&quot;">​</a></h2><p>The <code>vendor.manifest.default</code> block has no labels, <strong>do not</strong> support <a href="#config-merging">merging</a> and has the following schema:</p><table><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td>files</td><td>list(string)</td><td>The list of patterns to match selected files. The pattern format is the same of <a href="https://git-scm.com/docs/gitignore#_pattern_format" target="_blank" rel="noreferrer">gitignore</a></td></tr></tbody></table>`,93),s=[r];function n(l,d,h,c,p,g){return a(),t("div",null,s)}const k=e(i,[["render",n]]);export{b as __pageData,k as default};
