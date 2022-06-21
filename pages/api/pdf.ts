import { NextApiHandler } from "next";
const puppeteer = require("puppeteer-core");
const chrome = require("chrome-aws-lambda");

const Handler: NextApiHandler = async (req, res) => {
  const browser = await puppeteer.launch(
    process.env.NODE_ENV === "production"
      ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless,
        }
      : {}
  );
  const page = await browser.newPage();

  await page.goto("http://localhost:3000");
  await page.emulateMediaType("screen");

  const pdfBuffer = await page.pdf({
    format: "a4",
  });

  res.send(pdfBuffer);

  await browser.close();
};
export default Handler;
