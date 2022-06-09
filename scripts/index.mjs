#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 56,
  title: "valmor.dev",
  titleAlignment: "center",
  borderStyle: "round",
  borderColor: "#8ae234",
};

const intro = chalk.bold(
  "Hi there! I'm Valmor. I'm an engineer, software developer and tech savvy who loves to learn and building things.\n\n",
  "If you came all this way down here perhaps we should talk. You can find me on: \n\n"
);

const links = [
  {
    name: chalk.hex("#fff").bgHex("#262626")("Website"),
    url: "   https://valmor.dev",
  },
  {
    name: chalk.hex("#fff").bgHex("#9400ff")("GitHub"),
    url: "    https://github.com/valmormn",
  },
  {
    name: chalk.hex("#fff").bgHex("#1DA1F2")("LinkedIn"),
    url: "  https://www.linkedin.com/in/valmormn",
  },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
