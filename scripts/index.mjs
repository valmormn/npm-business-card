#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 54,
  title: "valmor.dev",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#ffb626",
};

const intro = chalk.bold(
  "Hi there! I'm Valmor. I'm an engineer, software developer and tech savvy who loves to learn and building things.\n\n",
  "If you came here to learn more about me, you can find me on: \n\n"
);

const links = [
  {
    name: chalk.hex("#fff").bgHex("#0f111a")("Website"),
    url: "   https://valmor.dev",
  },
  {
    name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"),
    url: "    https://github.com/valmormn",
  },
  {
    name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"),
    url: "   https://twitter.com/tuxsaurus",
  },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
