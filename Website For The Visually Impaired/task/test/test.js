import path from 'path';
import {correct, StageTest, wrong} from 'hs-test-web';

const pagePath = path.join(import.meta.url, '../../src/index.html');


class Test extends StageTest {

    page = this.getPage(pagePath)

    tests = [ this.page.execute(() => {
        // test #1
        // HELPERS-->
        // method to check if element with id exists
        this.elementExists = (id, nodeNames) => {
            const element = document.body.querySelector(id);
            if (!element) return true;
            else return (nodeNames && !nodeNames.includes(element.nodeName.toLowerCase()));
        };

        // method to check if element with id has right text
        this.elementHasText = (id, correctText) => {
            const element = document.body.querySelector(id);
            if (!element) return true;

            if (correctText) {
                return !element.innerText.includes(correctText);
            }
            return !element.innerText || element.innerText.trim().length === 0;
        };

        // method to check if element with id has right attribute
        this.elementHasAttribute = (id, attribute, value) => {
            const element = document.body.querySelector(id);
            if (!element) return true;
            const attributeValue = element.getAttribute(attribute);
            if (!attributeValue) return true;
            if (value) return attributeValue !== value;
            return false;
        };

        // method to check the style of the element with id
        this.elementStyle = (id, style, value) => {
            const element = document.querySelector(id);
            if (!element) return true;
            const styleValue = getComputedStyle(element)[style];
            // console.log(styleValue);
            return styleValue !== value;
        };

        // method to check text mode elements
        this.checkTextModeElements = () => {
            // check span exists
            const span = "#span-text";
            if (this.elementExists(span)) return wrong(this.missingElementMsg(span));

            // check span has text
            const spanText = "Change text size";
            if (this.elementHasText(span, spanText)) return wrong(this.wrongTextMsg(span, spanText));

            // check small-text input exists
            const smallText = "#small-text";
            if (this.elementExists(smallText)) return wrong(this.missingElementMsg(smallText));

            // check small-text input has right type
            if (this.elementHasAttribute(smallText, "type", "radio"))
                return wrong(this.wrongAttributeMsg(smallText, "type", "radio"));

            // check medium-text input exists
            const mediumText = "#medium-text";
            if (this.elementExists(mediumText)) return wrong(this.missingElementMsg(mediumText));

            // check medium-text input has right type
            if (this.elementHasAttribute(mediumText, "type", "radio"))
                return wrong(this.wrongAttributeMsg(mediumText, "type", "radio"));

            // check large-text input exists
            const largeText = "#large-text";
            if (this.elementExists(largeText)) return wrong(this.missingElementMsg(largeText));

            // check large-text input has right type
            if (this.elementHasAttribute(largeText, "type", "radio"))
                return wrong(this.wrongAttributeMsg(largeText, "type", "radio"));

            // check larger-text input exists
            const largerText = "#larger-text";
            if (this.elementExists(largerText)) return wrong(this.missingElementMsg(largerText));

            // check larger-text input has right type
            if (this.elementHasAttribute(largerText, "type", "radio"))
                return wrong(this.wrongAttributeMsg(largerText, "type", "radio"));
        };

        // method to check color mode elements
        this.checkColorModeElements = () => {
            // check span exists
            const span = "#span-color";
            if (this.elementExists(span)) return wrong(this.missingElementMsg(span));

            // check span has text
            const spanText = "Change colors";
            if (this.elementHasText(span, spanText)) return wrong(this.wrongTextMsg(span, spanText));

            // check white-theme input exists
            const whiteTheme = "#white-theme";
            if (this.elementExists(whiteTheme)) return wrong(this.missingElementMsg(whiteTheme));

            // check white-theme input has right type
            if (this.elementHasAttribute(whiteTheme, "type", "radio"))
                return wrong(this.wrongAttributeMsg(whiteTheme, "type", "radio"));

            // check yellow-theme input exists
            const yellowTheme = "#yellow-theme";
            if (this.elementExists(yellowTheme)) return wrong(this.missingElementMsg(yellowTheme));

            // check yellow-theme input has right type
            if (this.elementHasAttribute(yellowTheme, "type", "radio"))
                return wrong(this.wrongAttributeMsg(yellowTheme, "type", "radio"));

            // check blue-theme input exists
            const blueTheme = "#blue-theme";
            if (this.elementExists(blueTheme)) return wrong(this.missingElementMsg(blueTheme));

            // check blue-theme input has right type
            if (this.elementHasAttribute(blueTheme, "type", "radio"))
                return wrong(this.wrongAttributeMsg(blueTheme, "type", "radio"));
        }

        // method to check img mode
        this.checkImgModeElements = () => {
            // check button exists
            const button = "#button-hide-images";
            if (this.elementExists(button)) return wrong(this.missingElementMsg(button));

            // check button text
            const buttonText = "Hide images";
            if (this.elementHasText(button, buttonText)) return wrong(this.wrongTextMsg(button, buttonText));
        }

        // method to check accessibility-mode elements removed
        this.checkAccessibilityModesRemoved = () => {
            // check if span-text removed
            const spanText = "#span-text";
            if (!this.elementExists(spanText)) return wrong(this.elementNotRemovedMsg(spanText));

            // check if span-color removed
            const spanColor = "#span-color";
            if (!this.elementExists(spanColor)) return wrong(this.elementNotRemovedMsg(spanColor));

            // check if button-hide-images removed
            const buttonHideImages = "#button-hide-images";
            if (!this.elementExists(buttonHideImages)) return wrong(this.elementNotRemovedMsg(buttonHideImages));

            // check if small-text removed
            const smallText = "#small-text";
            if (!this.elementExists(smallText)) return wrong(this.elementNotRemovedMsg(smallText));

            // check if medium-text removed
            const mediumText = "#medium-text";
            if (!this.elementExists(mediumText)) return wrong(this.elementNotRemovedMsg(mediumText));

            // check if large-text removed
            const largeText = "#large-text";
            if (!this.elementExists(largeText)) return wrong(this.elementNotRemovedMsg(largeText));

            // check if larger-text removed
            const largerText = "#larger-text";
            if (!this.elementExists(largerText)) return wrong(this.elementNotRemovedMsg(largerText));

            // check if white-theme removed
            const whiteTheme = "#white-theme";
            if (!this.elementExists(whiteTheme)) return wrong(this.elementNotRemovedMsg(whiteTheme));

            // check if yellow-theme removed
            const yellowTheme = "#yellow-theme";
            if (!this.elementExists(yellowTheme)) return wrong(this.elementNotRemovedMsg(yellowTheme));

            // check if blue-theme removed
            const blueTheme = "#blue-theme";
            if (!this.elementExists(blueTheme)) return wrong(this.elementNotRemovedMsg(blueTheme));
        }

        // method to check font-size of text elements
        this.checkFontSize = (fontSize, radio) => {
            if (this.elementStyle("html", "font-size", fontSize))
                return wrong(`After clicking on the "${radio}" radio button, the font-size of the HTML should be "${fontSize}".`);
        }

        // method to check color of the body
        this.checkColors = (bg, color, radio) => {
            if (this.elementStyle("html", "background-color", bg))
                return wrong(`After clicking on the "${radio}" radio button, the background-color of the HTML should be "${bg}".`);

            if (this.elementStyle("html", "color", color))
                return wrong(`After clicking on the "${radio}" radio button, the color of the HTML should be "${color}".`);
        }

        // method to check if images are hidden
        this.checkImgHidden = () => {
            const [img1, img2] = document.querySelectorAll("img");
            if (!img1.src.includes("#") || !img2.src.includes("#"))
                return wrong(`After clicking on the "Hide images" button, the images should be hidden.`)

            // the alt attribute there
            if (!img1.alt || !img2.alt)
                return wrong(`After clicking on the "Hide images" button, the alt attribute of the images should be there.`)

            // the alt attribute should not be empty
            if (img1.alt.trim().length === 0 || img2.alt.trim().length === 0)
                return wrong(`After clicking on the "Hide images" button, the alt text of the images should not be empty.`)
        }

        // CONSTANTS-->
        const theElement = "The element with the selector of";
        // <--CONSTANTS

        // MESSAGES-->
        this.missingElementMsg = (selector) => {
            return `${theElement} "${selector}" is missing in the body of the HTML document.`;
        };
        this.wrongTagMsg = (id, tag, tagAlt) => {
            if (tagAlt) return `${theElement} "${id}" should be a/an ${tag} or ${tagAlt} tag.`;
            else return `${theElement} "${id}" should be a/an ${tag} tag.`;
        };
        this.wrongTextMsg = (id, text) => {
            return `${theElement} "${id}" should have the text: "${text}".`;
        };
        this.missingTextMsg = (id) => {
            return `${theElement} "${id}" should have some text.`;
        };
        this.wrongAttributeMsg = (id, attribute, value) => {
            return `${theElement} "${id}" should have the attribute "${attribute}" with the value "${value}".`;
        };
        this.missingAttributeMsg = (id, attribute) => {
            return `${theElement} "${id}" should have the attribute "${attribute}".`;
        }
        this.elementNotRemovedMsg = (id) => {
            return `${theElement} "${id}" should be removed.`;
        }
        // <--MESSAGES
        return correct();

    }), this.page.execute(() => {
        // test #2
        // HEADER TAGS

        // check if header exists
        if (this.elementExists("header")) return wrong(this.missingElementMsg("header"));

        // check if nav exists in header
        const nav = "header > nav";
        if (this.elementExists(nav)) return wrong(this.missingElementMsg(nav));

        // check if button exists in nav
        const button = "header > nav > button";
        if (this.elementExists(button)) return wrong(this.missingElementMsg(button));

        // check if button has text
        const buttonText = "Accessibility";
        if (this.elementHasText(button, buttonText)) return wrong(this.wrongTextMsg(button, buttonText));

        return correct();
    }), this.page.execute(() => {
        // test #3
        // MAIN TAGS

        // check if main exists
        if (this.elementExists("main")) return wrong(this.missingElementMsg("main"));

        // check if section1 exists
        const section1 = "main > section:nth-child(1)";
        if (this.elementExists(section1)) return wrong(this.missingElementMsg(section1));

        // check if h1 exists in section1
        const h1 = "main > section:nth-child(1) h1";
        if (this.elementExists(h1)) return wrong(this.missingElementMsg(h1));

        // check if h1 has text
        if (this.elementHasText(h1)) return wrong(this.missingTextMsg(h1));

        // check if p exists in section1
        const p = "main > section:nth-child(1) p";
        if (this.elementExists(p)) return wrong(this.missingElementMsg(p));

        // check if p has text
        if (this.elementHasText(p)) return wrong(this.missingTextMsg(p));

        // check if img exists in section1
        const img = "main > section:nth-child(1) img";
        if (this.elementExists(img)) return wrong(this.missingElementMsg(img));

        // check if img has alt
        if (this.elementHasAttribute(img, "alt")) return wrong(this.missingAttributeMsg(img, "alt"));

        // check if img has src
        if (this.elementHasAttribute(img, "src")) return wrong(this.missingAttributeMsg(img, "src"));

        return correct();

    }), this.page.execute(() => {
        // test #4
        // MAIN TAGS

        // check if section2 exists
        const section2 = "main > section:nth-child(2)";
        if (this.elementExists(section2)) return wrong(this.missingElementMsg(section2));

        // check if h2 exists in section2
        const h2 = "main > section:nth-child(2) h2";
        if (this.elementExists(h2)) return wrong(this.missingElementMsg(h2));

        // check if h2 has text
        if (this.elementHasText(h2)) return wrong(this.missingTextMsg(h2));

        // check if p exists in section2
        const p2 = "main > section:nth-child(2) p";
        if (this.elementExists(p2)) return wrong(this.missingElementMsg(p2));

        // check if p has text
        if (this.elementHasText(p2)) return wrong(this.missingTextMsg(p2));

        // check if img exists in section2
        const img2 = "main > section:nth-child(2) img";
        if (this.elementExists(img2)) return wrong(this.missingElementMsg(img2));

        // check if img has alt
        if (this.elementHasAttribute(img2, "alt")) return wrong(this.missingAttributeMsg(img2, "alt"));

        // check if img has src
        if (this.elementHasAttribute(img2, "src")) return wrong(this.missingAttributeMsg(img2, "src"));

        return correct();

    }), this.page.execute(() => {
        // test #5
        // FOOTER TAGS

        // check if footer exists
        if (this.elementExists("footer")) return wrong(this.missingElementMsg("footer"));

        // check if h3 exists in footer
        const h3 = "footer h3";
        if (this.elementExists(h3)) return wrong(this.missingElementMsg(h3));

        // check if h3 has text
        if (this.elementHasText(h3)) return wrong(this.missingTextMsg(h3));

        // check if link exist in footer
        const link = "footer a";
        if (this.elementExists(link)) return wrong(this.missingElementMsg(link));

        // check if links have text
        if (this.elementHasText(link)) return wrong(this.missingTextMsg(link));

        return correct();

    }), this.node.execute(async () => {
        // test #6
        // BUTTON EVENT
        // check button click event
        const buttonSelector = "header > nav > button";
        const button = await this.page.findBySelector(buttonSelector);

        let isEventFired = button.waitForEvent('click', 1000);
        await button.click();

        if (await !isEventFired) return wrong(`Expected click event on button with ${buttonSelector} id!`);

        await new Promise((resolve => {
            setTimeout(() => {
                resolve();
            }, 3000)
        }));

        await this.page.evaluate(() => {
            return this.checkTextModeElements();
        });

        await this.page.evaluate(() => {
            return this.checkColorModeElements();
        });

        await this.page.evaluate(() => {
            return this.checkImgModeElements();
        });

        await button.click();

        await new Promise((resolve => {
            setTimeout(() => {
                resolve();
            }, 3000)
        }));

        await this.page.evaluate(() => {
            return this.checkAccessibilityModesRemoved();
        });

        return correct();
    }),
        this.node.execute(async () => {
            // test #7
            // TEXT MODE RADIO BUTTON EVENT
            const buttonSelector = "header > nav > button";
            const button = await this.page.findBySelector(buttonSelector);
            await button.click();

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            const mediumText = "#medium-text";
            let radio = await this.page.findBySelector(mediumText);
            await radio.click();

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            await this.page.evaluate(() => {
                const medium = "24px";
                return this.checkFontSize(medium, "#medium-text");
            });

            const largeText = "#large-text";
            radio = await this.page.findBySelector(largeText);
            await radio.click();

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            await this.page.evaluate(() => {
                const large = "29px";
                return this.checkFontSize(large, "#large-text");
            });

            const largerText = "#larger-text";
            radio = await this.page.findBySelector(largerText);
            await radio.click();

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            await this.page.evaluate(() => {
                const larger = "32px";
                return this.checkFontSize(larger, "#larger-text");
            });

            const smallText = "#small-text";
            radio = await this.page.findBySelector(smallText);
            await radio.click();

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            await this.page.evaluate(() => {
                const small = "16px";
                return this.checkFontSize(small, "#small-text");
            });

            return correct();
        }),
        this.node.execute(async () => {
            // test #8
            // COLOR MODE RADIO BUTTON EVENT
            const yellowTheme = "#yellow-theme";
            let radio = await this.page.findBySelector(yellowTheme);
            await radio.click();

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            await this.page.evaluate(() => {
                const [yellow, black] = ["rgb(245, 211, 40)", "rgb(0, 0, 0)"];
                return this.checkColors(yellow, black, "#yellow-theme");
            });

            const blueTheme = "#blue-theme";
            radio = await this.page.findBySelector(blueTheme);
            await radio.click();

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            await this.page.evaluate(() => {
                const [blue, white] = ["rgb(0, 36, 82)", "rgb(255, 255, 255)"];
                return this.checkColors(blue, white, "#blue-theme");
            });

            const whiteTheme = "#white-theme";
            radio = await this.page.findBySelector(whiteTheme);
            await radio.click();

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            await this.page.evaluate(() => {
                const [white, black] = ["rgb(255, 255, 255)", "rgb(0, 0, 0)"];
                return this.checkColors(white, black, "#white-theme");
            });

            return correct();
        }),
        this.node.execute(async () => {
            // test #9
            // IMAGE MODE RADIO BUTTON EVENT
            const buttonSelector = "#button-hide-images";
            const button = await this.page.findBySelector(buttonSelector);

            let isEventFired = button.waitForEvent('click', 1000);

            await button.click();

            if (await !isEventFired) return wrong(`Expected click event on button with ${buttonSelector} id!`);

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            await this.page.evaluate(() => {
                return this.checkImgHidden();
            });

            await button.click();

            await new Promise((resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000)
            }));

            const [img1, img2] = await this.page.findAllBySelector("img");

            const img1Src = await img1.getAttribute("src");
            const img2Src = await img2.getAttribute("src");

            if (img1Src.includes("#") || img1Src.trim().length === 0
                || img2Src.includes("#") || img2Src.trim().length === 0)
                return wrong(`After clicking on the "Hide images" button, the images should be shown.`)

            return correct();
        }),
    ]

}

it("Test stage", async () => {
    await new Test().runTests()
}).timeout(50000);