import { readFileSync } from "node:fs";

const catalog = JSON.parse(readFileSync("data/tools.json", "utf8"));
const readme = readFileSync("README.md", "utf8");
const failures = [];

if (!/^\d+\.\d+$/.test(catalog.schema_version ?? "")) failures.push("schema_version must use major.minor format.");
if (!/^\d{4}-\d{2}-\d{2}$/.test(catalog.last_reviewed ?? "")) failures.push("last_reviewed must use YYYY-MM-DD format.");

const categoryIds = new Set();
for (const category of catalog.categories ?? []) {
  if (!category.id || !category.name) failures.push("Every category needs id and name.");
  if (categoryIds.has(category.id)) failures.push(`Duplicate category id: ${category.id}`);
  categoryIds.add(category.id);
  if (!Array.isArray(category.workflow_stages) || category.workflow_stages.length === 0) {
    failures.push(`${category.id} needs at least one workflow stage.`);
  } else if (new Set(category.workflow_stages).size !== category.workflow_stages.length) {
    failures.push(`${category.id} has duplicate workflow stages.`);
  } else if (category.workflow_stages.some((stage) => typeof stage !== "string" || !stage.trim())) {
    failures.push(`${category.id} has an invalid workflow stage.`);
  }
}

const names = new Set();
for (const tool of catalog.tools ?? []) {
  if (!tool.name || !tool.category || !tool.url) {
    failures.push("Every tool needs name, category, and url.");
    continue;
  }
  if (names.has(tool.name)) failures.push(`Duplicate tool name: ${tool.name}`);
  names.add(tool.name);
  if (!categoryIds.has(tool.category)) failures.push(`${tool.name} uses an unknown category.`);
  if (!/^https:\/\//.test(tool.url)) failures.push(`${tool.name} must use an HTTPS URL.`);
  if (!readme.includes(`](${tool.url})`)) failures.push(`${tool.name} is missing from README.md.`);
}

if (failures.length) {
  console.error("Catalog integrity check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Catalog integrity check passed for ${catalog.tools.length} tools in ${catalog.categories.length} categories.`);
