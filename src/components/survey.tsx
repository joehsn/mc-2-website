import React from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import { data } from "@/utils/data";
import "survey-core/survey.i18n";
import "survey-core/defaultV2.min.css";

StylesManager.applyTheme("defaultV2");

function SurveyComponent() {
  const onCompleteFunc = React.useCallback((sender: any) => {
    console.log(JSON.stringify(sender.data, null, 3));
  }, []);

  const survey = React.useMemo(() => new Model(data), []);

  React.useEffect(() => {
    console.log(data.pages.length);
    survey.locale = "ar";
    survey.sendResultOnPageNext = true;
    const storageItemKey = "corporateor-survey";

    function saveSurveyData(survey: any) {
      const data = survey.data;
      data.pageNo = survey.currentPageNo;
      window.localStorage.setItem(storageItemKey, JSON.stringify(data));
    }
    // Save survey results
    survey.onPartialSend.add((survey) => {
      saveSurveyData(survey);
    });
    survey.onComplete.add((survey) => {
      saveSurveyData(survey);
    });
    // Restore survey results
    const prevData = window.localStorage.getItem(storageItemKey) || null;
    if (prevData) {
      const data = JSON.parse(prevData);
      survey.data = data;
      if (data.pageNo) {
        survey.currentPageNo = data.pageNo;
      }
    }

    survey.onComplete.add(onCompleteFunc);
  }, [survey, onCompleteFunc]);

  return <Survey model={survey} />;
}

export default SurveyComponent;
