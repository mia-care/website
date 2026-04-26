export type ResourceCategory = "whitepaper" | "video";

export type Resource = {
  slug: string;
  category: ResourceCategory;
  title: string;
  description: string;
  coverImage: string;
  portalId: string;
  formId: string;
  fileUrl?: string;
  videoEmbedUrl?: string;
};

export const PORTAL_ID = "5308597";

export const RESOURCES: Resource[] = [
  {
    slug: "unlocking-remote-patient-monitoring",
    category: "whitepaper",
    title: "Unlocking the Potential of Remote Patient Monitoring",
    description:
      "Download the whitepaper about Remote Patient Monitoring and discover how patient-friendly technology is transforming healthcare.",
    coverImage: "/competence-center/unlocking-remote-patient-monitoring.png",
    portalId: PORTAL_ID,
    formId: "5e52ca36-ddd7-4daa-8952-b561052251f4",
    fileUrl: "/downloads/unlocking-remote-patient-monitoring.pdf",
  },
  {
    slug: "how-to-develop-certified-samd",
    category: "whitepaper",
    title: "Reduce the Complexity of SaMD Development with Composable Architecture",
    description:
      "Composable Architecture and Agile methodologies are the pillars to rely on when developing certified Software as a Medical Device.",
    coverImage: "/competence-center/how-to-develop-certified-samd.jpg",
    portalId: PORTAL_ID,
    formId: "9ac4839c-73fc-47ae-9a2f-b96152b45802",
    fileUrl: "/downloads/samd-composable-architecture.pdf",
  },
  {
    slug: "enable-cloud-native-healthcare-platform",
    category: "whitepaper",
    title: "Enable a Cloud-Native Healthcare Platform for Seamless Medical Device Interoperability",
    description:
      "A medical device digital platform can streamline the management of medical devices and provide real-time data on their usage.",
    coverImage: "/competence-center/enable-cloud-native-healthcare-platform.png",
    portalId: PORTAL_ID,
    formId: "9e254df9-78db-4825-882d-16f6881c99f6",
    fileUrl: "/downloads/connected-medical-devices.pdf",
  },
  {
    slug: "enable-fhir-data-interoperability",
    category: "whitepaper",
    title: "Enable FHIR-Based Digital Services for Data Interoperability",
    description:
      "Discover how to efficiently address the challenges of reaching high levels of data interoperability by leveraging the FHIR standard.",
    coverImage: "/competence-center/enable-fhir-data-interoperability.png",
    portalId: PORTAL_ID,
    formId: "f7560e33-a3eb-493d-89e2-d6b982e64bdc",
    fileUrl: "/downloads/enable-fhir-data-interoperability.pdf",
  },
  {
    slug: "composable-architecture-digital-health",
    category: "whitepaper",
    title: "Assemble a Digital Health Platform with Composable Architecture",
    description:
      "Composable Architecture offers a solution that enables rapid evolution and seamless assembly of IT components within a Digital Health Platform.",
    coverImage: "/competence-center/composable-architecture-digital-health.jpg",
    portalId: PORTAL_ID,
    formId: "9c27479e-859e-47c1-acc4-161317f662d6",
  },
  {
    slug: "telemedicine-platform-cloud-native",
    category: "whitepaper",
    title: "Create Your Telemedicine Platform With Cloud-Native Technology",
    description:
      "Have a clear view of what are the technical and functional requirements to build your Telemedicine Platform through a modular software suite.",
    coverImage: "/competence-center/telemedicine-platform-cloud-native.png",
    portalId: PORTAL_ID,
    formId: "1cef3971-070a-47cf-95fc-1fadc7b46f86",
    fileUrl: "/downloads/telemedicine-platform-cloud-native.pdf",
  },
  {
    slug: "mia-care-product-demo",
    category: "video",
    title: "Mia-Care Product Demo – Platform for Software as a Medical Device",
    description:
      "Take a tour of Mia-Care Platform for Software as a Medical Device, the microservice-based software suite to build compliant medical software.",
    coverImage: "/competence-center/mia-care-product-demo.jpg",
    portalId: PORTAL_ID,
    formId: "deeb2d9f-1669-4098-b533-bfe998874bba",
    videoEmbedUrl: "",
  },
  {
    slug: "build-certified-samd",
    category: "video",
    title: "Build Certified SaMD with a Regulated Healthcare Developer Platform",
    description:
      "Explore the SaMD examples, regulatory requirements, and the challenges associated with software component development.",
    coverImage: "/competence-center/build-certified-samd.jpg",
    portalId: PORTAL_ID,
    formId: "90fa4ee4-771e-4841-a966-9b5400e1abb8",
    videoEmbedUrl: "",
  },
  {
    slug: "ai-powered-healthcare-samd",
    category: "video",
    title: "AI-Powered Healthcare Software: Accelerating Innovation While Ensuring Compliance",
    description:
      "Discover how to build regulated intelligent solutions like Software as a Medical Device (SaMD) smarter, faster, safer.",
    coverImage: "/competence-center/ai-powered-healthcare-samd.png",
    portalId: PORTAL_ID,
    formId: "2c1538cf-192e-4b54-b3b5-3091dbf6a273",
    videoEmbedUrl: "",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
