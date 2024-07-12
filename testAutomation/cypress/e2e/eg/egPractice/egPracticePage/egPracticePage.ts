interface DropDownFeatureOptions {
  expectedOptions: string[];
  expectedText: string;
}

interface UploadImageFeatureData {
  validationText: string;
  imageName: string;
}

interface OpenNewTabFeatureData {
  validationText: string;
}

interface InvokeAlertFeatureData {
  validationText: string;
  alertTextFileName: string;
  alertTextFileValidation: string;
  alertValidation: string;
}

interface ToggleInputFeatureData {
  validationText: string;
}

interface MouseHoverFeatureData {
  validationText: string;
}

interface EgiFrameFeatureData {
  validationText: string;
}

class egPracticePage {

  /**
   * Function to test the dropdown feature
   * @param {DropDownFeatureOptions} options The options and expected text for the dropdown
   * @param {Object} dropDownFeatureObjects Elements required for the dropdown feature
   */
  dropDownFeature({ expectedOptions, expectedText }: DropDownFeatureOptions, dropDownFeatureObjects: any) {
    cy.get(dropDownFeatureObjects.dropdownText).then(($legend) => {
      expect($legend).to.have.text(expectedText);
    });
    cy.get(dropDownFeatureObjects.dropdownMenu).then(($options) => {
      const actual = Array.from($options).map(
        (option) => (option as HTMLOptionElement).text,
      );
      expect(actual).to.deep.eq(expectedOptions);
    });
  }

  /**
   * Function to test the image upload feature
   * @param {Object} uploadImageFeatureObjects Elements required for the image upload feature
   * @param {UploadImageFeatureData} uploadImageFeatureData Data required for the image upload feature
   */
  uploadImageFeature(uploadImageFeatureObjects: any, uploadImageFeatureData: UploadImageFeatureData) {
    cy.get(uploadImageFeatureObjects.uploadText).then(($uploadText) => {
      expect($uploadText).to.have.text(uploadImageFeatureData.validationText);
    });

    const fileName = uploadImageFeatureData.imageName;

    cy.get(uploadImageFeatureObjects.selectFileButton).selectFile(fileName);

    cy.get(uploadImageFeatureObjects.uploadImageText).should(
      "have.css",
      "display",
      "block",
    );
  }

  /**
   * Function to test the open new tab feature
   * @param {Object} openNewTabFeatureObjects Elements required for the open new tab feature
   * @param {OpenNewTabFeatureData} openNewTabFeatureData Data required for the open new tab feature
   */
  openNewTabFeature(openNewTabFeatureObjects: any, openNewTabFeatureData: OpenNewTabFeatureData) {
    cy.get(openNewTabFeatureObjects.openNewTabText).then(($newTabText) => {
      expect($newTabText).to.have.text(openNewTabFeatureData.validationText);
    });

    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        win.location.href = url; // Redirect in the same tab
      });
    });

    cy.get(openNewTabFeatureObjects.openNewTabButton)
      .invoke("removeAttr", "target") // Remove target attribute to open in the same tab
      .click();

    // Use cy.origin to handle exceptions on the target page
    cy.origin("https://www.easygenerator.com", () => {
      cy.on("uncaught:exception", (e) => {
        if (e.message.includes("gaconnector2 is not defined")) {
          // Ignore this specific error
          return false;
        }
      });

      // After navigating, verify the URL
      cy.url().should("eq", "https://www.easygenerator.com/en/");
    });
    cy.Navigate(Cypress.env("test_env"));
  }

  /**
   * Function to test the alert invocation feature
   * @param {Object} invokeAlertFeatureObjects Elements required for the alert invocation feature
   * @param {InvokeAlertFeatureData} invokeAlertFeature Data required for the alert invocation feature
   */
  invokeAlertFeature(invokeAlertFeatureObjects: any, invokeAlertFeature: InvokeAlertFeatureData) {
    cy.get(invokeAlertFeatureObjects.invokeAlerttext).then(($newTabText) => {
      expect($newTabText).to.have.text(invokeAlertFeature.validationText);
    });

    let alertFileName = invokeAlertFeature.alertTextFileName;
    console.log("hellllloo" + alertFileName);
    let filePath = "./testAutomation/cypress/e2e/eg/egPractice/egPracticeFixtures/" + alertFileName;

    cy.task("readFile", filePath).then((inputText: string) => {
      // Explicitly defining the type here
      expect(inputText).to.eq(invokeAlertFeature.alertTextFileValidation); // Verify the content
      cy.get(invokeAlertFeatureObjects.inputTextArea).type(inputText);
    });

    cy.get(invokeAlertFeatureObjects.alertButton).click();
    cy.on("window:alert", (text) => {
      expect(text).to.eq(invokeAlertFeature.alertValidation);
    });
  }

  /**
   * Function to test the toggle input feature
   * @param {Object} toggleInputFeatureObjects Elements required for the toggle input feature
   * @param {ToggleInputFeatureData} toggleInputFeatureData Data required for the toggle input feature
   */
  toggleInputFeature(toggleInputFeatureObjects: any, toggleInputFeatureData: ToggleInputFeatureData) {
    cy.get(toggleInputFeatureObjects.toggleInputText).then(($toggleText) => {
      expect($toggleText).to.have.text(toggleInputFeatureData.validationText);
    });
    cy.get(toggleInputFeatureObjects.hideTextBox).click();
    cy.get(toggleInputFeatureObjects.hideDisplayText).should("have.css", "display", "none");
    cy.get(toggleInputFeatureObjects.showTextBox).click();
    cy.get(toggleInputFeatureObjects.showDisplayText).should("have.css", "display", "block");
  }

  /**
   * Function to test the mouse hover feature
   * @param {Object} mouseHoverFeatureObjects Elements required for the mouse hover feature
   * @param {MouseHoverFeatureData} mouseHoverFeatureData Data required for the mouse hover feature
   */
  mouseHoverFeature(mouseHoverFeatureObjects: any, mouseHoverFeatureData: MouseHoverFeatureData) {
    cy.get(mouseHoverFeatureObjects.mouseHoverText).then(($mouseHoverFeatureText) => {
      expect($mouseHoverFeatureText).to.have.text(mouseHoverFeatureData.validationText);
    });
    cy.get(mouseHoverFeatureObjects.hoverButton).trigger("mouseover");
    cy.get(mouseHoverFeatureObjects.topSubOption).contains("Top").should("be.visible");
    cy.get(mouseHoverFeatureObjects.reloadSubOption).contains("Reload").should("be.visible");
  }

  /**
   * Function to test the iFrame feature
   * @param {Object} egiFrameFeatureObjects Elements required for the iFrame feature
   * @param {EgiFrameFeatureData} egiFrameFeatureData Data required for the iFrame feature
   */
  egiFrameFeature(egiFrameFeatureObjects: any, egiFrameFeatureData: EgiFrameFeatureData) {
    cy.get(egiFrameFeatureObjects.iFrameText).then(($egiFrameFeatureText) => {
      expect($egiFrameFeatureText).to.have.text(egiFrameFeatureData.validationText);
    });
    cy.get(egiFrameFeatureObjects.iFrameid).should("be.visible");
  }
}

export default new egPracticePage();
