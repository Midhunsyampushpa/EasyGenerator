import egPracticePagEFile from "../egPracticePage/egPracticePage";
import data from "../egPracticeFixtures/egPracticeFixtures.json";
import { dropDownFeatureObjects,uploadImageFeatureObjects,openNewTabFeatureObjects,toggleInputFeatureObjects,mouseHoverFeatureObjects,egiFrameFeatureObjects,invokeAlertFeatureObjects } from "../egPracticeObjects/egPracticeObjects";

describe("Verify Eg Practice Page", () => {
    const dropDownFeatureData = {
        expectedOptions: [
          data.dropDownFeature.firstOption,
          data.dropDownFeature.secondOption,
          data.dropDownFeature.thirdOption
        ],
        expectedText: data.dropDownFeature.validationText
      };

  const uploadImageFeatureData = {
    imageName: data.uploadImageFeature.imageName,
    validationText:data.uploadImageFeature.validationText
  };

  const openNewTabFeatureData={
    validationText:data.openNewTabFeature.validationText
  }

  const toggleInputFeatureData={
    validationText:data.toggleInputFeature.validationText
  }

  const mouseHoverFeatureData={
    validationText:data.mouseHoverFeature.validationText
  }

  const egiFrameFeatureData={
    validationText:data.egiFrameFeature.validationText
    
  }

  const invokeAlertFeatureData={
    validationText:data.invokeAlertFeature.validationText,
    alertTextFileName:data.invokeAlertFeature.alertTextFileName,
    alertTextFileValidation:data.invokeAlertFeature.alertTextFileValidation,
    alertValidation:data.invokeAlertFeature.alertValidation
  }

  //User navigates to the environment mentioned in the config file
  it("Navigate to the environment", () => {
    cy.Navigate(Cypress.env("test_env"));
  });
  //Test the dropdown feature
  it("Dropdown feature", () => {
    egPracticePagEFile.dropDownFeature(dropDownFeatureData, dropDownFeatureObjects)
  });
  //Test the Image Upload feature
  it("Upload Image Feature", () => {
    egPracticePagEFile.uploadImageFeature(uploadImageFeatureObjects,uploadImageFeatureData);
  });
  //Test the Open New Tab feature
  it("Open New Tab Feature", () => {
    egPracticePagEFile.openNewTabFeature(openNewTabFeatureObjects,openNewTabFeatureData);
  });
  //Test the Show/hide input feature
  it("Toggle input Feature", () => {
    egPracticePagEFile.toggleInputFeature(toggleInputFeatureObjects,toggleInputFeatureData);
  });
  //Test the alert feature
  it("Alert Feature", () => {
    egPracticePagEFile.invokeAlertFeature(invokeAlertFeatureObjects,invokeAlertFeatureData);
  });
  //Test the Mousehover feature
  it("MouseHover Feature", () => {
    egPracticePagEFile.mouseHoverFeature(mouseHoverFeatureObjects,mouseHoverFeatureData);
  });
  //Test the iFrame feature
  it("iFrame Feature", () => {
    egPracticePagEFile.egiFrameFeature(egiFrameFeatureObjects,egiFrameFeatureData);
  });
});
