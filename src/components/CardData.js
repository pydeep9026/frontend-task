import nutrition from "../assets/cardimages/Rectangle 152.png";
import physical_activity from "../assets/cardimages/Rectangle 154.png";
import restorative_sleep from "../assets/cardimages/Rectangle 156.png";
import stress_management from "../assets/cardimages/Rectangle 158.png";
import social_connection from "../assets/cardimages/Rectangle 160.png";
import substance_abuse from "../assets/cardimages/Rectangle 144.png";
import nutritionmetricicon from "../assets/metricIcons/Vector.png";
import physical_activitymetricicon from "../assets/metricIcons/Vector (1).png";
import restorative_sleepmetricicon from "../assets/metricIcons/Mask group.png";
import stress_managementmetricicon from "../assets/metricIcons/Vector (3).png";
import substance_abusemetricicon from "../assets/metricIcons/Vector (4).png";




const cardData = [
    {
        id: 1,
        title: "Nutrition",
        description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
        metric: "121/80",
        submetric: "mmHg",
        metricicon: nutritionmetricicon,
        image: nutrition
    },
    {
        id: 2,
        title: "Physical activity",
        description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
        metric: "32",
        submetric: "minutes",
        metricicon: physical_activitymetricicon,
        image: physical_activity
    },
    {
        id: 3,
        title: "Restorative sleep",
        description: "Consistent, quality sleep is essential for cognitive function and physical health.",
        metric: "8",
        submetric: "hours",
        metricicon: restorative_sleepmetricicon,
        image: restorative_sleep
    },
    {
        id: 4,
        title: "Stress management",
        description: "Effective stress management techniques are crucial for mental well-being and overall health.",
        metric: "60",
        submetric: "minutes",
        metricicon: stress_managementmetricicon,
        image: stress_management
    },
    {
        id: 5,
        title: "Social connection",
        description: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
        metric: "Feeling",
        submetric: "better",
        metricicon: physical_activitymetricicon,
        image: social_connection
    },
    {
        id: 6,
        title: "Substance abuse",
        description: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
        metric: "62",
        submetric: "days",
        metricicon: substance_abusemetricicon,
        image: substance_abuse
    }
];

export default cardData;
