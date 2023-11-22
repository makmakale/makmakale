import { ProjectResponsibilities, SectionTitle } from '@/common/components/Experience';

function CloudResponsibilities() {
  return (
    <>
      <SectionTitle>Responsibilities:</SectionTitle>
      <ProjectResponsibilities>
        <li>creating a list of parameters related to telemetry, integration with the backend;</li>
        <li>implementing telemetry to the application;</li>
        <li>transferring old reports / components for telemetry, integrating with the backend, agreeing on parameters;
        </li>
        <li>developing a unified functionality for working with graphs (Echarts) for monitoring the charging of
          chargers
          for specific plaza with the addition of configuration files for each type of plaza;
        </li>
        <li>developing a report on monitoring the charging devices for specific plasmas;</li>
        <li>developing a filter by plaza nodes considering hierarchy, allowing selection of both a specific node and
          considering hierarchy by parent;
        </li>
        <li>development of a search for the filter by nodes with the result output saving hierarchy;</li>
        <li>Error Boundary integration;</li>
        <li>correcting errors associated with recalculation of plasma nodes caused by the backend;</li>
      </ProjectResponsibilities>
    </>
  );
}

export default CloudResponsibilities;
