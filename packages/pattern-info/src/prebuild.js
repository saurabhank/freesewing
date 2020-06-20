const path = require('path')
const fse = require('fs-extra')
const aaron = require('@freesewing/aaron').config
const benjamin = require('@freesewing/benjamin').config
const bent = require('@freesewing/bent').config
const brian = require('@freesewing/brian').config
const breanna = require('@freesewing/breanna').config
const diana = require('@freesewing/diana').config
const bruce = require('@freesewing/bruce').config
const carlita = require('@freesewing/carlita').config
const carlton = require('@freesewing/carlton').config
const cathrin = require('@freesewing/cathrin').config
const florent = require('@freesewing/florent').config
const florence = require('@freesewing/florence').config
const holmes = require('@freesewing/holmes').config
const huey = require('@freesewing/huey').config
const hugo = require('@freesewing/hugo').config
const jaeger = require('@freesewing/jaeger').config
const penelope = require('@freesewing/penelope').config
const sandy = require('@freesewing/sandy').config
const shin = require('@freesewing/shin').config
const simon = require('@freesewing/simon').config
const simone = require('@freesewing/simone').config
const sven = require('@freesewing/sven').config
const tamiko = require('@freesewing/tamiko').config
const theo = require('@freesewing/theo').config
const trayvon = require('@freesewing/trayvon').config
const wahid = require('@freesewing/wahid').config
const waralee = require('@freesewing/waralee').config
const indsleeve = require('@freesewing/indsleeve').config
const skirt = require('@freesewing/skirt').config
const bodiceblock = require('@freesewing/bodiceblock').config
const dress = require('@freesewing/dress').config
const kurti = require('@freesewing/kurti').config
const churidar = require('@freesewing/churidar').config
const dhoti = require('@freesewing/dhoti').config
const sharara = require('@freesewing/sharara').config
const suit = require('@freesewing/suit').config
const salvar = require('@freesewing/suit').config

const patterns = {
  aaron,
  benjamin,
  bent,
  brian,
  breanna,
  diana,
  bruce,
  carlita,
  carlton,
  cathrin,
  florent,
  florence,
  holmes,
  huey,
  hugo,
  jaeger,
  penelope,
  sandy,
  shin,
  simon,
  simone,
  sven,
  tamiko,
  theo,
  trayvon,
  wahid,
  waralee,
  indsleeve,
  skirt,
  bodiceblock,
  dress,
  kurti,
  churidar,
  dhoti,
  suit,
  salvar,
  sharara
}
const patternOptions = (config) => {
  let all = []
  let groups = config.optionGroups
  for (let group of Object.keys(groups)) {
    for (let option of groups[group]) {
      if (typeof option === 'string') all.push(option)
      else {
        for (let subgroup of Object.keys(option)) {
          for (let suboption of option[subgroup]) all.push(suboption)
        }
      }
    }
  }

  return all
}

const patternParts = (config) => {
  let parts = {}
  if (config.parts) {
    for (let p of config.parts) parts[p] = p
  }
  if (config.dependencies) {
    for (let p of Object.keys(config.dependencies)) {
      parts[p] = p
      if (typeof config.dependencies[p] === 'string') {
        parts[config.dependencies[p]] = config.dependencies[p]
      } else {
        for (let d of config.dependencies[p]) parts[d] = d
      }
    }
  }
  if (config.inject) {
    for (let p of Object.keys(config.inject)) {
      parts[p] = p
      parts[config.inject[p]] = config.inject[p]
    }
  }
  if (config.hide) {
    for (let p of config.hide) delete parts[p]
  }

  return Object.keys(parts)
}

const options = {}
const optionGroups = {}
const parts = {}
const measurements = {}
const versions = {}
const info = {}
for (let pattern of Object.keys(patterns)) {
  options[pattern] = patternOptions(patterns[pattern])
  optionGroups[pattern] = patterns[pattern].optionGroups
  parts[pattern] = patternParts(patterns[pattern])
  measurements[pattern] = patterns[pattern].measurements
  versions[pattern] = patterns[pattern].version
  info[pattern] = {
    design: patterns[pattern].design,
    code: patterns[pattern].code,
    department: patterns[pattern].department,
    type: patterns[pattern].type,
    difficulty: patterns[pattern].difficulty,
    tags: patterns[pattern].tags
  }
}

fse.mkdirSync(path.join('.', 'src', 'prebuild'), { recursive: true })
fse.writeFileSync(
  path.join('.', 'src', 'prebuild', 'options.js'),
  'module.exports = ' + JSON.stringify(options) + '\n'
)
fse.writeFileSync(
  path.join('.', 'src', 'prebuild', 'option-groups.js'),
  'module.exports = ' + JSON.stringify(optionGroups) + '\n'
)
fse.writeFileSync(
  path.join('.', 'src', 'prebuild', 'parts.js'),
  'module.exports = ' + JSON.stringify(parts) + '\n'
)
fse.writeFileSync(
  path.join('.', 'src', 'prebuild', 'measurements.js'),
  'module.exports = ' + JSON.stringify(measurements) + '\n'
)
fse.writeFileSync(
  path.join('.', 'src', 'prebuild', 'versions.js'),
  'module.exports = ' + JSON.stringify(versions) + '\n'
)
fse.writeFileSync(
  path.join('.', 'src', 'prebuild', 'info.js'),
  'module.exports = ' + JSON.stringify(info) + '\n'
)
