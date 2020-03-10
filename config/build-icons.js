/**
 * Copyright 2018 dialog LLC <info@dlg.im>
 */

/* eslint no-sync:0 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const SVGSpriter = require('svg-sprite');

const src = path.resolve(__dirname, '../src');
const component = path.join(src, '/components/Icon');
const iconsPath = path.join(component, 'svg');
const icons = glob.sync('*.svg', { cwd: iconsPath });
const spriteFileName = 'Icons.svg';

const config = {
  dest: component,
  mode: {
    symbol: true
  }
};

const spriter = new SVGSpriter(config);

for (const iconName of icons) {
  const iconPath = path.join(iconsPath, iconName);
  spriter.add(iconPath, iconName, fs.readFileSync(iconPath, { encoding: 'utf-8' }));
}

spriter.compile((error, result) => {
  if (error) {
    throw error;
  }

  const output = path.join(component, spriteFileName);
  fs.writeFileSync(output, result.symbol.sprite.contents);
});
