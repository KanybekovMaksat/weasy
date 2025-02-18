import React from "react";
import { useParams } from "react-router-dom";
import { industries } from "~entities/IndustriesCard";
import { IndustryDetailsInfo } from "~widgets/industry-detailsInfo";
import { BusinessTypeSelection } from "~features/business-type-selection";
export const IndustriesDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const industry = industries.find((e) => e.slug.toString() === slug);

  if (!industry) {
    return <div>Событие не найдено</div>;
  }
  return (
    <div>
      <IndustryDetailsInfo industry={industry} />
      <BusinessTypeSelection/>
    </div>
  );
};
