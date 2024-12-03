import {BlogCardProps} from "@components/blog/types";
import blogImage from "@images/blog/notebook.png";

export const blogPosts: BlogCardProps[] = [
    {
        date: "august 15, 2024",
        title: "Influxdata Client Libraries August Release",
        description:
            "Best articles about InfluxDB 2.0 client libraries in 2021 Python Client Library...",
        image: blogImage,
        imageAlt: "Influxdata Client Libraries Release Information",
    },
    {
        date: "august 14, 2024",
        title: "Getting Started with Time Series Data",
        description:
            "Learn the fundamentals of working with time series data in InfluxDB...",
        image: blogImage,
        imageAlt: "Time Series Data Introduction Guide",
    },
];
