import dataIngestionVisualization from "@images/services/time-series/data-ingestion-visualization.png";
import storagePerformanceVisualization from "@images/services/time-series/storage-performance-visualization.png";
import dataIngestionIcon from "@images/icons/data-ingestion-icon.svg";
import realTimeDashboardsIcon from "@images/icons/real-time-dashboards-icon.svg";
import storagePerformanceIcon from "@images/icons/storage-performance-icon.svg";
import buildApplicationsIcon from "@images/icons/build-applications-icon.svg";

export const timeSeriesData = {
  title:
    "Bonitoo.io specializes in time-series related services such as data ingestion, real-time data processing, data transformation, storing of time-series data, dashboards, etc.",
  subtitle: "our part",
  firstSection: {
    image: dataIngestionVisualization,
    services: [
      {
        icon: dataIngestionIcon,
        iconAlt: "Data ingestion icon",
        title: "Data ingestion",
        description:
          "Bonitoo.io has long experience with data transformations and integrations of various solutions and products into time-series format. We have also implemented and maintaining plenty of libraries in various programming languages for InfluxDB.",
      },
      {
        icon: realTimeDashboardsIcon,
        iconAlt: "Real-time dashboards icon",
        title: "Real-time dashboards",
        description:
          "We designed the whole real-time ecosystem including dashboards that are combining live data from data sources or queues and historical data from InfluxDB database.",
      },
    ],
  },
  secondSection: {
    image: storagePerformanceVisualization,
    services: [
      {
        icon: storagePerformanceIcon,
        iconAlt: "Storage performance icon",
        title: "Storage performance and resampling",
        description:
          "Bonitoo.io is author of many time-series benchmarks that are comparing products in time-series space. We have rich experience with data optimizations that improve overall performance and decrease costs.",
      },
      {
        icon: buildApplicationsIcon,
        iconAlt: "Build applications icon",
        title: "Build applications using InfluxDB",
        description:
          "Almost all the applications from Bonitoo.io are using time-series technology internally. We have also implemented an IoT Center application for education purposes that is showing how to leverage time-series in custom applications.",
      },
    ],
  },
};
