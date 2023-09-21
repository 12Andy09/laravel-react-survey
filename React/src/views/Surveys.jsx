import { useContext } from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Surveys() {
  const { surveys } = useStateContext();

  const onDeleteClick = () => {};

  return (
    <PageComponent
      title="Surveys"
      buttons={
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create new
        </TButton>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-rows-2 md:grid-cols-3">
        {surveys.map((surveysItem) => (
          <SurveyListItem
            survey={surveysItem}
            key={surveysItem.id}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </PageComponent>
  );
}
