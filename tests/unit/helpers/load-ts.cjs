const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

/** Transpila um módulo TypeScript do projeto e o executa isolado, sem bundler. */
function loadTs(path, { globals = {}, modules = {} } = {}) {
  const source = readFileSync(resolve(__dirname, '../../..', path), 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const sandbox = {
    exports: {},
    URL,
    require: (name) => {
      if (name in modules) return modules[name];
      throw new Error(`Módulo não simulado: ${name}`);
    },
    ...globals,
  };
  vm.runInNewContext(compiled.outputText, sandbox);
  return sandbox.exports;
}

module.exports = { loadTs };
